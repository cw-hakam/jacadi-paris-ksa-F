import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Lille &amp; Nest website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">3. Product Information</h2>
              <p className="text-muted-foreground">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve the right to correct errors and update information at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">4. Orders and Payment</h2>
              <p className="text-muted-foreground mb-4">
                By placing an order, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Pay all charges at the prices in effect when you place your order</li>
                <li>Pay applicable taxes and shipping fees</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing or product information, or suspected fraud.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground">
                Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or circumstances beyond our control. Risk of loss passes to you upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">6. Returns and Refunds</h2>
              <p className="text-muted-foreground">
                Please refer to our Returns Policy for information about returns and refunds. All returns are subject to our approval and must meet our return conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on our website, including text, graphics, logos, images, and software, is the property of Lille &amp; Nest or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, Lille &amp; Nest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Lille &amp; Nest from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-normal text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: hello@littleboys.com<br />
                Phone: 1-800-LITTLEBOYS
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Terms;
