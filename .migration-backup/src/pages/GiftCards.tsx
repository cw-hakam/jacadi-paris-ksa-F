import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const amounts = [25, 50, 75, 100, 150, 200];

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Gift card purchased! The recipient will receive it via email.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Gift Cards' }]} />
        </div>

        <PageHero
          title="Gift Cards"
          description="Give the gift of wonder! Perfect for birthdays, holidays, or just because."
          image="/Gift.png"
          imageAlt="Gift Cards"
        />

        <section className="container pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded p-8 shadow-soft">
              <form onSubmit={handlePurchase} className="space-y-8">
                {/* Amount selection */}
                <div>
                  <Label className="text-lg font-display font-semibold mb-4 block">
                    Select Amount
                  </Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={cn(
                          "h-14 rounded font-display font-bold text-lg transition-all",
                          selectedAmount === amount && !customAmount
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/80"
                        )}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">or</span>
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">SAR </span>
                      <Input
                        type="number"
                        placeholder="Custom amount (25-500)"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        className="pl-7"
                        min="25"
                        max="500"
                      />
                    </div>
                  </div>
                </div>

                {/* Recipient details */}
                <div className="space-y-4">
                  <Label className="text-lg font-display font-semibold block">
                    Recipient Details
                  </Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipientName">Recipient's Name</Label>
                      <Input
                        id="recipientName"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="recipientEmail">Recipient's Email</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Personal Message (optional)</Label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Add a special message for the recipient..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Purchase Gift Card - SAR {customAmount || selectedAmount}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <span className="text-3xl block mb-2">📧</span>
                <h3 className="font-semibold mb-1">Instant Delivery</h3>
                <p className="text-sm text-muted-foreground">Sent via email immediately</p>
              </div>
              <div className="p-4">
                <span className="text-3xl block mb-2">🔒</span>
                <h3 className="font-semibold mb-1">No Expiration</h3>
                <p className="text-sm text-muted-foreground">Gift cards never expire</p>
              </div>
              <div className="p-4">
                <span className="text-3xl block mb-2">💳</span>
                <h3 className="font-semibold mb-1">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">Apply at checkout</p>
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

export default GiftCards;
