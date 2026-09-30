import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;
