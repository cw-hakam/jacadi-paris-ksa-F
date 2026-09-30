import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { ProductCard } from '@/components/products/ProductCard';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon, X } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.categories.some(cat => cat.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <section className="container py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Search Products
            </h1>

            {/* Search Input */}
            <div className="relative mb-8">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for toys, clothes, books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-lg"
                autoFocus
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Results */}
            {searchQuery.trim() ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                  </p>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 rounded blur-2xl" />
                        <div className="relative flex items-center justify-center w-24 h-24 rounded bg-muted">
                          <SearchIcon className="h-12 w-12 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      No results found
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      We couldn't find any products matching "{searchQuery}". Try different keywords.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded blur-2xl" />
                    <div className="relative flex items-center justify-center w-24 h-24 rounded bg-muted">
                      <SearchIcon className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Start searching
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Enter keywords to find toys, clothes, books, and more for your little ones.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Search;
