import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const RefundPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Refund & Cancellation Policy"
        description="Refund and Cancellation Policy for Shyara Tech Solutions. Learn about our refund process and subscription cancellation terms."
        canonical="/refund-policy"
      />
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              At Shyara Tech Solutions (OPC) Pvt. Ltd., we aim to ensure transparency and fairness in all transactions. Due to the nature of digital services, please review our refund and cancellation terms carefully.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Service-Based Nature</h2>
              <p className="text-muted-foreground leading-relaxed">
                All services offered are digital and customized in nature. This includes digital invitations, video invitations, marketing services, and technology solutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Refund Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Refunds are only applicable if the service has not been initiated. Eligibility is determined as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Refund requests must be made within 24 hours of payment.</li>
                <li>Work must not have commenced on your order.</li>
                <li>If a payment is made in error or a technical issue occurs, refunds may be considered on a case-by-case basis.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Non-Refundable Cases</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Refunds will not be provided in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Once design work or customization has begun on your order.</li>
                <li>After delivery of digital products or services.</li>
                <li>For partially used subscription periods.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cancellation Policy</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Orders can be canceled within 24 hours of payment, provided work has not started.</li>
                <li>Subscription services can be canceled before the next billing cycle.</li>
                <li>No refunds are issued for partially used subscription periods.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Refund Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Approved refunds will be processed within 7–10 business days to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund or cancellation requests, contact us at:<br />
                Email: <a href="mailto:support@shyara.co.in" className="text-primary hover:underline">support@shyara.co.in</a><br />
                Phone: <a href="tel:+919584661610" className="text-primary hover:underline">+91-9584661610</a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RefundPolicy;
