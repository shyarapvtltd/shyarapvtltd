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
            <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
            <p className="text-muted-foreground text-sm">Website: shyara.co.in</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              At Shyara Tech Solutions (OPC) Pvt. Ltd. ("Shyara", "we", "our", "us"), we value your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may collect personal details such as:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Name, email address, phone number</li>
                <li>Billing address and business details</li>
                <li>Payment information (processed securely by authorized payment gateways)</li>
                <li>Usage data such as browser type, device information, and IP address</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Information is used to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Process orders and provide services</li>
                <li>Communicate updates and respond to inquiries</li>
                <li>Improve our offerings and user experience</li>
                <li>Comply with legal requirements</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your data from unauthorized access or disclosure. Payment details are processed securely through authorized payment gateways and are not stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can manage cookie settings through your browser. By continuing to use our website, you consent to our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share limited data with payment processors and analytics tools solely for service delivery. These third-party services are governed by their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access, correction, or deletion of your personal data by contacting us at the details provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related concerns, contact us at:<br />
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

export default PrivacyPolicy;
