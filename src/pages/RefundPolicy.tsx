import Layout from "@/components/layout/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: 2025</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              At Shyara Tech Solutions (OPC) Pvt. Ltd., we aim to ensure transparency and fairness in all transactions.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Service-Based Nature</h2>
              <p className="text-muted-foreground leading-relaxed">
                All services offered are digital and customized in nature.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Refund Policy</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Payments once made are non-refundable once service delivery has started.</li>
                <li>If a payment is made in error or a technical issue occurs, refunds may be considered on a case-by-case basis.</li>
                <li>Approved refunds will be processed within 7–10 business days to the original payment method.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Subscription Cancellation</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Subscription services can be canceled before the next billing cycle.</li>
                <li>No refunds are issued for partially used subscription periods.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For refund or cancellation requests, contact:<br />
                Email: <a href="mailto:support@shyara.co.in" className="text-primary hover:underline">support@shyara.co.in</a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RefundPolicy;
