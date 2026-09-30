import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { PageHero } from '@/components/layout/PageHero';
import { Leaf, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="GOTS & Organic Pure Seams"
          description="At Lille & Nest, environmental integrity and infant skin safety guide every thread. Explore our Scandinavian ethical standards and zero-chemical commitments."
          image="/images/stitch/briefs-flatlay-editorial.jpg"
          imageAlt="Lille & Nest Organic Materials & Pure Seams"
        />

        {/* Content */}
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Eco-Friendly Materials */}
            <section className="bg-card p-8 rounded-2xl border border-primary/10 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <Leaf className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground">100% GOTS-Certified Organic Cotton</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground font-body leading-relaxed">
                <p>
                  Our innerwear and sleepwear utilize unbleached, non-GMO organic cotton grown without synthetic fertilizers or pesticides. This preserves natural soil health while ensuring pure softness against newborn skin.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mt-4 text-sm font-medium text-foreground list-disc list-inside">
                  <li>Global Organic Textile Standard (GOTS) Certified</li>
                  <li>Breathable Bamboo-Cotton Ribbed Weaves</li>
                  <li>Hypoallergenic Water-Based Vegetable Dyes</li>
                  <li>100% Biodegradable & Recyclable Packaging</li>
                </ul>
              </div>
            </section>

            {/* OEKO-TEX Standard 100 */}
            <section className="bg-card p-8 rounded-2xl border border-primary/10 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground">OEKO-TEX® Standard 100 Testing</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground font-body leading-relaxed">
                <p>
                  Every fabric batch, elastic waist, and flat-lock thread undergoes independent laboratory testing for over 300 harmful chemicals, phthalates, and heavy metals. Guaranteed safe for infants and toddlers with sensitive skin or eczema.
                </p>
              </div>
            </section>

            {/* Flat-Lock Seamwork */}
            <section className="bg-card p-8 rounded-2xl border border-primary/10 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground">Sensory-Friendly Seam Construction</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground font-body leading-relaxed">
                <p>
                  We replace raised, abrasive clothing seams with flat-lock anti-chafe stitching. Paired with tagless printed labels, our innerwear provides frictionless comfort designed for active play and peaceful sleep.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Sustainability;
