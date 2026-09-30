import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Mom of 2',
    content: 'The quality of the toys is amazing! My kids love everything we\'ve ordered. The age recommendations are spot-on.',
    rating: 5,
    avatar: '/c1.png',
  },
  {
    id: 2,
    name: 'James P.',
    role: 'Dad of 1',
    content: 'Fast shipping and beautiful packaging. The organic cotton clothes are so soft and perfect for my toddler\'s sensitive skin.',
    rating: 5,
    avatar: '/c2.png',
  },
  {
    id: 3,
    name: 'Emma K.',
    role: 'Grandma',
    content: 'Found the perfect gifts for my grandchildren. The book collection is wonderful and the wooden toys are heirloom quality.',
    rating: 5,
    avatar: '/c3.png',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-8 md:py-20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-4">
            Loved by Families
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join thousands of happy parents who trust Lille &amp; Nest
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-card rounded p-6 shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-category-toys text-category-toys" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed flex-1">
                "{testimonial.content}"
              </p>

              {/* Author - Always at bottom */}
              <div className="flex items-center gap-3 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded object-contain border-2 border-primary"
                />
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
