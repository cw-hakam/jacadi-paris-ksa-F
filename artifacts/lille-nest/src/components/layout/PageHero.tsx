import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
}

export function PageHero({ 
  title, 
  description, 
  image, 
  imageAlt = title,
  className,
  children 
}: PageHeroProps) {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text on left */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 bg-primary inline-block px-6 py-3 rounded">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed bg-muted/50 p-6 rounded">
                {description}
              </p>
              {children}
            </div>
            
            {/* Image on right */}
            {image && (
              <div className="flex justify-center md:justify-end mb-0">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
