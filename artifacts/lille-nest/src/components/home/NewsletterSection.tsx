import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Lille & Nest Journal 🌿', {
        description: 'Thank you for subscribing. Enjoy 15% off your first organic order.',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-12 md:py-20 bg-muted/40 border-y border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-soft border border-primary/10 bg-card p-3">
            <img
              src="/images/stitch/girl-pajamas-lookbook.jpg"
              alt="Lille & Nest Lookbook"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-2">
              Nordic Slumber Club
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-4">
              Join the Lille & Nest Nesting Journal
            </h2>
            <p className="text-muted-foreground mb-6 font-body leading-relaxed">
              Subscribe to receive private lookbook drops, Scandinavian nursery styling guides, and GOTS organic cotton care tips. Plus receive 15% off your first order.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-full border-primary/20 bg-background text-foreground"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Join Nest
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
