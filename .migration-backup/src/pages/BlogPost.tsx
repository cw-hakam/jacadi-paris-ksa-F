import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Mail, Link as LinkIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Educational Toys for Toddlers',
    slug: 'top-10-educational-toys-for-toddlers',
    excerpt: 'Discover the best toys that combine fun and learning for your little one\'s development.',
    content: `
      <p>Choosing the right toys for your toddler can make a significant difference in their development. Educational toys not only entertain but also help develop crucial skills like problem-solving, creativity, and motor skills.</p>
      
      <h2>1. Wooden Building Blocks</h2>
      <p>Classic wooden blocks are timeless for a reason. They encourage spatial awareness, creativity, and fine motor skills. Look for sets with various shapes and colors to maximize learning opportunities.</p>
      
      <h2>2. Shape Sorters</h2>
      <p>Shape sorters teach toddlers about different shapes, colors, and problem-solving. They're perfect for developing hand-eye coordination and cognitive skills.</p>
      
      <h2>3. Musical Instruments</h2>
      <p>Simple instruments like xylophones, drums, and shakers introduce rhythm and sound exploration. Music helps with language development and emotional expression.</p>
      
      <h2>4. Stacking Toys</h2>
      <p>Rainbow stackers and nesting cups teach size relationships, sequencing, and balance. They're excellent for developing fine motor skills and problem-solving abilities.</p>
      
      <h2>5. Puzzles</h2>
      <p>Age-appropriate puzzles with large pieces help develop spatial reasoning, patience, and concentration. Start with simple 4-6 piece puzzles and gradually increase complexity.</p>
      
      <h2>Conclusion</h2>
      <p>Remember, the best educational toys are those that grow with your child and can be used in multiple ways. Focus on quality over quantity, and always supervise playtime to ensure safety.</p>
    `,
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
    content: `
      <p>Building a sustainable wardrobe for your children doesn't have to be expensive or complicated. With a few smart choices, you can dress your kids in eco-friendly clothing while staying within budget.</p>
      
      <h2>Why Choose Sustainable Fashion?</h2>
      <p>The fashion industry is one of the largest polluters globally. By choosing sustainable options, you're reducing environmental impact and often getting higher quality clothing that lasts longer.</p>
      
      <h2>Tips for Sustainable Kids' Fashion</h2>
      <p>1. Buy quality over quantity - invest in well-made pieces that last</p>
      <p>2. Choose organic cotton and natural fibers</p>
      <p>3. Shop secondhand and participate in clothing swaps</p>
      <p>4. Look for brands with ethical manufacturing practices</p>
      <p>5. Care for clothes properly to extend their life</p>
      
      <h2>Budget-Friendly Options</h2>
      <p>Thrift stores, consignment shops, and online marketplaces offer great deals on gently used children's clothing. Many sustainable brands also offer sales and have outlet sections.</p>
    `,
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
    content: `
      <p>Developing a love for reading starts early and can last a lifetime. Here's how to choose the right books for every stage of your child's development.</p>
      
      <h2>Infants (0-12 months)</h2>
      <p>Board books with high contrast images, textures, and simple patterns. Focus on books that engage multiple senses.</p>
      
      <h2>Toddlers (1-3 years)</h2>
      <p>Interactive books with flaps, textures, and simple stories. Repetitive text helps with language development.</p>
      
      <h2>Preschoolers (3-5 years)</h2>
      <p>Picture books with engaging stories, rhymes, and more complex narratives. This is when children start understanding story structure.</p>
      
      <h2>Early Readers (5-7 years)</h2>
      <p>Beginning reader books with simple sentences and supportive illustrations. Let them choose books that interest them.</p>
      
      <h2>Tips for Success</h2>
      <p>Make reading a daily routine, visit libraries regularly, and let children see you reading. Create a cozy reading nook and never force reading as a chore.</p>
    `,
    author: 'Michael Brown',
    date: 'March 5, 2024',
    image: '/blog3.jpg',
    category: 'Books',
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  
  const post = blogPosts.find((p) => p.slug === slug);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';

    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
        setShowShareTooltip(false);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareTooltip(false);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl block mb-4">📝</span>
            <h1 className="font-display text-2xl font-bold mb-2">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              We couldn't find the article you're looking for.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
        <CartSidebar />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]} />
        </div>

        {/* Article Header */}
        <article className="container py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {post.date}
                </span>
              </div>

              {/* Share Button */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowShareTooltip(!showShareTooltip)}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>

                {showShareTooltip && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowShareTooltip(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded shadow-lg p-3 z-20 min-w-[200px]">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Share via:</p>
                      <div className="space-y-1">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                        >
                          <Facebook className="h-4 w-4 text-blue-600" />
                          <span>Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                        >
                          <Twitter className="h-4 w-4 text-sky-500" />
                          <span>Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('email')}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                        >
                          <Mail className="h-4 w-4 text-gray-600" />
                          <span>Email</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left"
                        >
                          <LinkIcon className="h-4 w-4 text-primary" />
                          <span>Copy Link</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-muted rounded overflow-hidden mb-8">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: 'var(--foreground)',
              }}
            />

            {/* Related Articles */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-display text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.category === post.category && p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-card rounded border border-border p-4 hover:shadow-card transition-all"
                    >
                      <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                      <h4 className="font-display font-bold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default BlogPost;
