import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageHero } from '@/components/layout/PageHero';
import { ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { content } from '@/data/content';

const About = () => {
  const { about } = content;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Nordic Story' }]} />
        </div>

        <PageHero
          title={about.hero.title}
          description={about.hero.description}
          image="/images/stitch/hero-children-loungewear.jpg"
          imageAlt={about.hero.title}
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
              {about.pillars.map((pillar) => (
                <div key={pillar.id} className="bg-card p-8 rounded-2xl border border-primary/10 text-center shadow-soft">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                    {pillar.icon === 'Leaf' && <Leaf className="h-7 w-7" />}
                    {pillar.icon === 'HeartHandshake' && <HeartHandshake className="h-7 w-7" />}
                    {pillar.icon === 'ShieldCheck' && <ShieldCheck className="h-7 w-7" />}
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-body">
                    {pillar.description}
                  </p>
                </div>
              ))}
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
                  {about.editorial.badge}
                </span>
                <h2 className="font-display text-3xl font-normal mb-4 text-foreground">
                  {about.editorial.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                  {about.editorial.description}
                </p>
                <div className="p-4 bg-muted rounded-xl border border-primary/10">
                  <p className="font-display italic text-foreground text-sm">
                    {about.editorial.quote}
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
