import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Shyara Tech Solutions. Learn how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: 2025</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Shyara Tech Solutions (OPC) Pvt. Ltd. ("Shyara", "we", "our", "us") values your privacy and is committed to protecting your personal information.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may collect:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Name, email address, phone number</li>
                <li>Business details provided through contact forms</li>
                <li>Payment-related metadata (processed securely by third-party payment gateways)</li>
                <li>Usage data such as browser type and device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Provide and improve our services</li>
                <li>Communicate with you regarding inquiries or services</li>
                <li>Process payments and transactions</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Payment Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All payments are processed through secure third-party payment gateways. We do not store card or banking details on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect your data from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use trusted third-party tools for analytics, communication, and payment processing. Their privacy practices are governed by their respective policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access, correction, or deletion of your personal data by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related concerns, contact us at:<br />
                Email: <a href="mailto:support@shyara.co.in" className="text-primary hover:underline">support@shyara.co.in</a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PrivacyPolicy;
