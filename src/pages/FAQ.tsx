import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { PageHero } from '@/components/layout/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available at checkout. Free shipping over SAR 300!',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes! We ship to over 50 countries. International shipping times vary by location, typically 10-21 business days.',
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order ships, you\'ll receive an email with a tracking number. You can also track orders in your account dashboard.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy for unused items in original packaging. Simply initiate a return through your account or contact us.',
      },
      {
        q: 'How do I exchange an item?',
        a: 'To exchange, please return the original item and place a new order. This ensures you get the right item quickly.',
      },
      {
        q: 'Are returns free?',
        a: 'Returns within the US are free! International return shipping costs are the responsibility of the customer.',
      },
    ],
  },
  {
    category: 'Products & Safety',
    questions: [
      {
        q: 'Are your products safe for children?',
        a: 'Absolutely! All our products meet or exceed US and EU safety standards. We test for small parts, non-toxic materials, and durability.',
      },
      {
        q: 'What materials do you use?',
        a: 'We prioritize organic cotton, sustainable wood, non-toxic paints, and eco-friendly materials whenever possible.',
      },
      {
        q: 'How do you determine age recommendations?',
        a: 'Age recommendations are based on safety testing, developmental appropriateness, and manufacturer guidelines.',
      },
    ],
  },
  {
    category: 'Account & Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. We also offer Afterpay for buy-now-pay-later.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes! We use industry-standard SSL encryption and never store your full payment details on our servers.',
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Yes! Digital gift cards are available in amounts from SAR 100 to SAR 2000 and are delivered instantly via email.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
        </div>

        <PageHero 
          title="Asked Questions"
          description="Find answers to common questions about orders, shipping, returns, and more."
          image="/Ask.png"
          imageAlt="Frequently Asked Questions"
        />

        <section className="container py-8 mb-8 bg-muted/30 rounded">
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-display text-xl font-bold mb-4">{section.category}</h2>
                <Accordion type="single" collapsible className="bg-card rounded shadow-soft">
                  {section.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${section.category}-${index}`}>
                      <AccordionTrigger className="px-6 text-left font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default FAQ;
