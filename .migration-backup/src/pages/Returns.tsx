import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { RotateCcw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Returns & Exchanges' }]} />
        </div>

        <section className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-5xl block mb-4">↩️</span>
              <h1 className="font-display text-4xl font-bold mb-4">Returns & Exchanges</h1>
              <p className="text-muted-foreground">
                We want you to be completely happy with your purchase.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary/10 rounded p-6 text-center">
                <RotateCcw className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="font-display font-bold text-2xl">30 Days</p>
                <p className="text-sm text-muted-foreground">Return Window</p>
              </div>
              <div className="bg-primary/10 rounded p-6 text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-display font-bold text-2xl">Free</p>
                <p className="text-sm text-muted-foreground">US Returns</p>
              </div>
              <div className="bg-accent/30 rounded p-6 text-center">
                <HelpCircle className="h-8 w-8 text-accent-foreground mx-auto mb-3" />
                <p className="font-display font-bold text-2xl">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>

            {/* Return policy */}
            <div className="bg-card rounded p-8 shadow-soft mb-8">
              <h2 className="font-display text-2xl font-bold mb-6">Return Policy</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>Items can be returned within 30 days of delivery</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>Items must be unused and in original packaging</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>Free return shipping for US orders</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>Refunds processed within 5-7 business days</p>
                </div>
              </div>
            </div>

            {/* Non-returnable */}
            <div className="bg-muted rounded p-8 mb-8">
              <h2 className="font-display text-2xl font-bold mb-6">Non-Returnable Items</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p>Personalized or custom items</p>
                </div>
                <div className="flex gap-3">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p>Items marked as final sale</p>
                </div>
                <div className="flex gap-3">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p>Gift cards</p>
                </div>
                <div className="flex gap-3">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p>Items damaged due to misuse</p>
                </div>
              </div>
            </div>

            {/* How to return */}
            <div className="bg-card rounded p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold mb-6">How to Start a Return</h2>
              
              <ol className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold">Log into your account</p>
                    <p className="text-sm text-muted-foreground">Go to your order history</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold">Select items to return</p>
                    <p className="text-sm text-muted-foreground">Choose the items and reason for return</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold">Print shipping label</p>
                    <p className="text-sm text-muted-foreground">Free prepaid label for US orders</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold">Drop off package</p>
                    <p className="text-sm text-muted-foreground">Take it to any carrier location</p>
                  </div>
                </li>
              </ol>

              <Button asChild className="w-full">
                <Link to="/contact">Need Help? Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Returns;
