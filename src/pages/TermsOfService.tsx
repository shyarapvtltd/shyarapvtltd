import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground text-sm">Last updated: 2025</p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using our website and services, you agree to these Terms of Service.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Shyara Tech Solutions (OPC) Pvt. Ltd. provides digital marketing, technology solutions, digital invitations, and restaurant POS solutions through its platforms and sub-domains.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to misuse the website, attempt unauthorized access, or engage in activities that disrupt our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payments for services may be one-time or subscription-based, depending on the offering. Prices, billing cycles, and payment terms will be clearly communicated before purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, designs, and materials on this website are the property of Shyara unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Shyara shall not be liable for indirect or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of services implies acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of India.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default TermsOfService;
