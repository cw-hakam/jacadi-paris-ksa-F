import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { PageHero } from '@/components/layout/PageHero';
import { Calendar, User, ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Educational Toys for Toddlers',
    slug: 'top-10-educational-toys-for-toddlers',
    excerpt: 'Discover the best toys that combine fun and learning for your little one\'s development.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    image: '/blog1.jpg',
    category: 'Toys',
  },
  {
    id: 2,
    title: 'Sustainable Fashion for Kids: A Parent\'s Guide',
    slug: 'sustainable-fashion-for-kids-parents-guide',
    excerpt: 'Learn how to build an eco-friendly wardrobe for your children without breaking the bank.',
    author: 'Emily Chen',
    date: 'March 10, 2024',
    image: '/blog2.jpg',
    category: 'Fashion',
  },
  {
    id: 3,
    title: 'Building a Reading Habit: Books for Every Age',
    slug: 'building-reading-habit-books-for-every-age',
    excerpt: 'Age-appropriate book recommendations to foster a love of reading from infancy to pre-teens.',
    author: 'Michael Brown',
    date: 'March 5, 2024',
    image: '/blog3.jpg',
    category: 'Books',
  },
  {
    id: 4,
    title: 'Outdoor Activities for Active Kids',
    slug: 'outdoor-activities-for-active-kids',
    excerpt: 'Fun and engaging outdoor activities to keep your children active and healthy.',
    author: 'Sarah Johnson',
    date: 'March 1, 2024',
    image: '/blog4.jpg',
    category: 'Outdoor',
  },
  {
    id: 5,
    title: 'Montessori at Home: Getting Started',
    slug: 'montessori-at-home-getting-started',
    excerpt: 'Simple ways to incorporate Montessori principles into your daily routine.',
    author: 'Emily Chen',
    date: 'February 25, 2024',
    image: '/blog5.jpg',
    category: 'Education',
  },
  {
    id: 6,
    title: 'Choosing Safe and Non-Toxic Toys',
    slug: 'choosing-safe-and-non-toxic-toys',
    excerpt: 'A comprehensive guide to selecting safe toys for your children.',
    author: 'Michael Brown',
    date: 'February 20, 2024',
    image: '/blog6.jpg',
    category: 'Toys',
  },
];

const categories = ['All', 'Toys', 'Fashion', 'Books', 'Outdoor', 'Education'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...blogPosts];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default: // newest
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero 
          title="Blog"
          description="Tips, guides, and inspiration for raising curious, creative, and happy children."
          image="/blog.png"
          imageAlt="Little Boys Blog"
        />

        {/* Blog Posts */}
        <div className="container py-8">
          {/* Search, Filter, and Sort */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters and Sort */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                >
                  <span className="text-sm">
                    {sortBy === 'newest' && 'Newest First'}
                    {sortBy === 'oldest' && 'Oldest First'}
                    {sortBy === 'title' && 'Title A-Z'}
                  </span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", sortDropdownOpen && "rotate-180")} />
                </Button>
                
                {sortDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setSortDropdownOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded shadow-lg z-20 overflow-hidden">
                      {[
                        { value: 'newest', label: 'Newest First' },
                        { value: 'oldest', label: 'Oldest First' },
                        { value: 'title', label: 'Title A-Z' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setSortDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2.5 text-sm transition-colors",
                            sortBy === option.value
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-sm text-muted-foreground">
              Showing {currentPosts.length} of {filteredAndSortedPosts.length} articles
            </p>
          </div>

          {/* Blog Posts Grid */}
          {currentPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {currentPosts.map((post) => (
                  <article key={post.id} className="group bg-card rounded overflow-hidden border border-border hover:shadow-card transition-all duration-300">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <Button variant="ghost" size="sm" className="group/btn" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🔍</span>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">No articles found</h2>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Coming Soon */}
          <div className="text-center mt-8 p-8 bg-muted/50 rounded">
            <span className="text-6xl block mb-4">📝</span>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">More Articles Coming Soon</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to get notified when we publish new content!
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Blog;
