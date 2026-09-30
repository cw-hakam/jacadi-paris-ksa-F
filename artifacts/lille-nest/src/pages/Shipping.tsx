import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { Truck, Package, Globe, Clock } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Shipping Information' }]} />
        </div>

        <section className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-5xl block mb-4">📦</span>
              <h1 className="font-display text-4xl font-bold mb-4">Shipping Information</h1>
              <p className="text-muted-foreground">
                We deliver joy right to your doorstep!
              </p>
            </div>

            {/* Shipping options */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded p-6 shadow-soft">
                <Truck className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Standard Shipping</h3>
                <p className="text-muted-foreground text-sm mb-3">3-5 business days</p>
                <p className="font-semibold">SAR 25 or FREE over SAR 300</p>
              </div>
              <div className="bg-card rounded p-6 shadow-soft border-2 border-primary">
                <Package className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Express Shipping</h3>
                <p className="text-muted-foreground text-sm mb-3">1-2 business days (Major Cities)</p>
                <p className="font-semibold">SAR 45</p>
              </div>
              <div className="bg-card rounded p-6 shadow-soft">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">Same Day Delivery</h3>
                <p className="text-muted-foreground text-sm mb-3">Riyadh only, order by 2pm</p>
                <p className="font-semibold">SAR 65</p>
              </div>
              <div className="bg-card rounded p-6 shadow-soft">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">GCC & International</h3>
                <p className="text-muted-foreground text-sm mb-3">5-14 business days</p>
                <p className="font-semibold">From SAR 85</p>
              </div>
            </div>

            {/* Details */}
            <div className="bg-muted rounded p-8 space-y-6">
              <h2 className="font-display text-2xl font-bold">Shipping Details</h2>
              
              <div>
                <h3 className="font-semibold mb-2">Processing Time</h3>
                <p className="text-muted-foreground">
                  Orders are processed within 1-2 business days. During peak seasons, 
                  processing may take an additional 1-2 days.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tracking Your Order</h3>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a confirmation email with your 
                  tracking number. You can also track your order in your account dashboard.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">GCC & International Shipping</h3>
                <p className="text-muted-foreground">
                  We ship across the GCC and internationally! International customers are responsible 
                  for any customs duties or taxes that may apply in their respective countries.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Delivery Issues</h3>
                <p className="text-muted-foreground">
                  If your package is lost, damaged, or significantly delayed, please 
                  contact our customer service team and we'll make it right.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Shipping;
