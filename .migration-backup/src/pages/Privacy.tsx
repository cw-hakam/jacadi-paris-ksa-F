import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service providers who help us operate our business</li>
                <li>Shipping carriers to deliver your orders</li>
                <li>Payment processors to handle transactions</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy;
