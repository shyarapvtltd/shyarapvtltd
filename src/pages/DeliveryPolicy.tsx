import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const DeliveryPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Delivery Policy"
        description="Delivery Policy for Shyara Tech Solutions. We provide digital services only — learn about our service delivery process."
        canonical="/delivery-policy"
      />
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Delivery Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: 2025</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Shyara Tech Solutions (OPC) Pvt. Ltd. provides digital services only. No physical products are shipped.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Service Delivery</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Services are delivered digitally via email, web platforms, dashboards, or dedicated portals.</li>
                <li>Delivery timelines depend on the specific service and will be communicated at the time of engagement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Access Credentials</h2>
              <p className="text-muted-foreground leading-relaxed">
                For software or platform-based services, access credentials or setup information will be shared via registered contact details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                For delivery-related concerns, contact:<br />
                Email: <a href="mailto:support@shyara.co.in" className="text-primary hover:underline">support@shyara.co.in</a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DeliveryPolicy;
