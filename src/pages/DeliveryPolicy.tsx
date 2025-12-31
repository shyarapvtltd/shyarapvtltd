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
            <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Shyara Tech Solutions (OPC) Pvt. Ltd. delivers all products and services digitally. No physical products are shipped.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Mode of Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Services are delivered digitally via:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Email</li>
                <li>WhatsApp</li>
                <li>Download links</li>
                <li>Web platforms, dashboards, or dedicated portals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Delivery Timeline</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital invitations and related services are delivered within 2–5 working days depending on customization requirements. For software or platform-based services, access credentials or setup information will be shared via registered contact details upon completion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Delays</h2>
              <p className="text-muted-foreground leading-relaxed">
                Delays may occur due to incomplete information provided by the client, pending approvals, or high order volumes. We will communicate any expected delays promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For delivery-related concerns, contact us at:<br /><br />
                <strong>Shyara Tech Solutions (OPC) Pvt. Ltd.</strong><br />
                Lata Kunj, Jai Hanuman Colony, Bazar Samiti,<br />
                Mahendru, Sampatchak, Patna - 800006, Bihar, India<br /><br />
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

export default DeliveryPolicy;
