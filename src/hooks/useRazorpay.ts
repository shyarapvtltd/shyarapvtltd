import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id?: string;
  subscription_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayInstance {
  open: () => void;
  close: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_subscription_id?: string;
  razorpay_signature: string;
}

interface PaymentOptions {
  amount: number;
  currency?: string;
  name: string;
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  onSuccess?: (response: RazorpayResponse) => void;
  onError?: (error: Error) => void;
}

interface SubscriptionOptions {
  planId: string;
  name: string;
  description?: string;
  totalCount?: number;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  onSuccess?: (response: RazorpayResponse) => void;
  onError?: (error: Error) => void;
}

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const useRazorpay = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initiatePayment = useCallback(async (options: PaymentOptions) => {
    setIsLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      const { data, error } = await supabase.functions.invoke('create-razorpay-order', {
        body: {
          amount: options.amount,
          currency: options.currency || 'INR',
          notes: options.notes,
        },
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      const razorpayOptions: RazorpayOptions = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: options.name,
        description: options.description,
        order_id: data.orderId,
        handler: async (response: RazorpayResponse) => {
          try {
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
              'verify-razorpay-payment',
              {
                body: {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                },
              }
            );

            if (verifyError) throw verifyError;
            if (!verifyData.verified) throw new Error('Payment verification failed');

            toast.success('Payment successful!');
            options.onSuccess?.(response);
          } catch (err) {
            toast.error('Payment verification failed');
            options.onError?.(err as Error);
          }
        },
        prefill: options.prefill,
        notes: options.notes,
        theme: {
          color: '#0f172a',
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(razorpayOptions);
      razorpay.open();
    } catch (err) {
      toast.error('Failed to initiate payment');
      options.onError?.(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const initiateSubscription = useCallback(async (options: SubscriptionOptions) => {
    setIsLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      const { data, error } = await supabase.functions.invoke('create-razorpay-subscription', {
        body: {
          plan_id: options.planId,
          total_count: options.totalCount,
          notes: options.notes,
        },
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      const razorpayOptions: RazorpayOptions = {
        key: data.keyId,
        amount: 0,
        currency: 'INR',
        name: options.name,
        description: options.description,
        subscription_id: data.subscriptionId,
        handler: (response: RazorpayResponse) => {
          toast.success('Subscription activated!');
          options.onSuccess?.(response);
        },
        prefill: options.prefill,
        notes: options.notes,
        theme: {
          color: '#0f172a',
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(razorpayOptions);
      razorpay.open();
    } catch (err) {
      toast.error('Failed to initiate subscription');
      options.onError?.(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    initiatePayment,
    initiateSubscription,
  };
};
