import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const DeliveryPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Delivery Policy"
        description="Delivery Policy for Shyara Tech Solutions. Digital service delivery and pre-launch information for Shyara Education Labs hardware."
        canonical="/delivery-policy"
      />
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Delivery Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: May 2026</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Shyara Tech Solutions (OPC) Pvt. Ltd. operates multiple brands. Most services are delivered digitally. Shyara Education Labs hardware is currently in the design phase and not yet commercially launched.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Digital Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Digital services—including Shyara Marketing, Shyara Digital (custom invitations), Invites by Shyara, and BiteX restaurant POS—are delivered via:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Email</li>
                <li>WhatsApp</li>
                <li>Download links</li>
                <li>Web platforms, dashboards, or dedicated portals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Delivery Timeline (Digital)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Custom digital invitations and related services are typically delivered within 2–5 working days depending on customization requirements. For software or platform-based services, access credentials or setup information will be shared via your registered contact details upon completion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Shyara Education Labs (Hardware)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Student development boards and FPGA learning kits under Shyara Education Labs are in active design and are not yet available for commercial purchase. Until launch, we only collect waitlist and interest submissions through{" "}
                <a href="https://tech.shyara.co.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  tech.shyara.co.in
                </a>
                . Shipping, fulfillment, and delivery terms for hardware will be published on that site when products become available.
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
