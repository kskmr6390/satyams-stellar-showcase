import { ExternalLink, Calendar, User, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  url: string;
  cover_image?: string;
  user: {
    name: string;
    profile_image: string;
  };
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dev.to/api/articles?username=satyam_chourasiya_99ea2e4&per_page=30');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts[0]; // Most recent post as featured

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Blog Posts
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Sharing knowledge and insights from my development journey. From backend architecture to AI integration, exploring the technologies that power modern applications.
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <Card className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/50 dark:border-purple-700/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">FEATURED</span>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                  🆕 Latest Post
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {featuredPost.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(featuredPost.published_at)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.reading_time_minutes} min read</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {featuredPost.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tag_list.map((tag) => (
                  <span key={tag} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href={featuredPost.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Read Full Article
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* All Articles Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">All Articles ({blogPosts.length})</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden border-slate-200 dark:border-slate-700">
                <div className="relative">
                  {/* Dev.to style header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-4 border-b border-slate-200 dark:border-slate-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.user.profile_image}
                          alt={post.user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-800 dark:text-white">{post.user.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{formatDate(post.published_at)}</p>
                        </div>
                      </div>
                      <div className="bg-slate-900 text-white px-2 py-1 rounded text-xs font-bold">
                        DEV
                      </div>
                    </div>
                  </div>
                  
                  {/* Cover Image */}
                  {post.cover_image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Article content */}
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                    {post.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        {post.description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tag_list.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs">
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                      <span>{post.reading_time_minutes} min read</span>
                      <span>From dev.to</span>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Read Article
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/50 dark:border-purple-700/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Stay Updated with New Articles
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                I regularly share insights about backend development, AI integration, and cloud architecture. Follow me on Dev.to to get notified when I publish new articles.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href="https://dev.to/satyam_chourasiya_99ea2e4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Follow on Dev.to
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;