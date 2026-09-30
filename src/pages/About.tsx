import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageHero } from '@/components/layout/PageHero';
import { ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Nordic Story' }]} />
        </div>

        <PageHero
          title="The Lille & Nest Story"
          description="Founded on Scandinavian principles of atmospheric warm minimalism and tactile maternal warmth. We craft GOTS-certified organic cotton & breathable bamboo innerwear for design-conscious parents who value hypoallergenic purity and timeless nursery aesthetics."
          image="/images/stitch/hero-children-loungewear.jpg"
          imageAlt="Lille & Nest Scandinavian Children Innerwear"
        />

        {/* Brand Pillars */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-2">
                Crafted With Poise & Care
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground">
                Our Scandinavian Design Philosophy
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-primary/10 text-center shadow-soft">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-foreground">100% GOTS Organic Cotton</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-body">
                  We use unbleached organic cotton and silky bamboo weaves free from harsh pesticides or synthetic dyes, keeping delicate skin pure and breathable.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-primary/10 text-center shadow-soft">
                <div className="w-14 h-14 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-foreground">Hypoallergenic Seamwork</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-body">
                  Designed with ultra-soft flat-lock stitching and tagless necklines to ensure zero irritation or sensory distraction for infants and toddlers.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-primary/10 text-center shadow-soft">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-foreground">OEKO-TEX® Standard 100</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-body">
                  Every thread, snap, and ribbing undergoes rigorous independent testing to guarantee zero harmful chemicals, setting the benchmark for safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Showcase */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-card">
                <img 
                  src="/images/stitch/full-storefront-stitch-design.jpg" 
                  alt="Stitch Storefront Design"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-2">
                  Nordic Slumber & Nest
                </span>
                <h2 className="font-display text-3xl font-normal mb-4 text-foreground">
                  Quiet Minimalism for Natural Rest
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                  Instead of loud primary colors and synthetic graphics, our palette is rooted in sun-dried terracotta, muted sage, oatmeal linen, and soft cream. Beautiful innerwear designed to harmonise with nursery interiors and morning sunlight.
                </p>
                <div className="p-4 bg-muted rounded-xl border border-primary/10">
                  <p className="font-display italic text-foreground text-sm">
                    "Designed to speak to design-conscious parents who value hypoallergenic purity, ethical craftsmanship, and timeless nursery aesthetics."
                  </p>
                </div>
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

export default About;
