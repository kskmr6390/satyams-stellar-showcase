
import { ExternalLink, Calendar, User, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Backend Systems: My Journey at Entropik",
      description: "As a Senior Backend Engineer with over 6 years of experience, I've had the privilege of working on some fascinating projects that have shaped my understanding of scalable systems and modern backend development...",
      readTime: "8 min read",
      publishedDate: "Nov 2024",
      tags: ["Python", "FastAPI", "AWS", "Architecture"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4",
      featured: true
    },
    {
      id: 2,
      title: "Implementing RAG Systems with LangChain",
      description: "Learn how to build powerful Retrieval Augmented Generation systems using LangChain and open-source LLMs. A comprehensive guide covering architecture, implementation, and optimization strategies.",
      readTime: "12 min read",
      publishedDate: "Coming Soon",
      tags: ["AI/ML", "LangChain", "RAG", "Python"],
      url: "#",
      featured: false
    },
    {
      id: 3,
      title: "FastAPI Best Practices for Production",
      description: "Essential patterns and practices for building production-ready FastAPI applications. From project structure to deployment strategies.",
      readTime: "10 min read",
      publishedDate: "Coming Soon",
      tags: ["FastAPI", "Python", "Best Practices"],
      url: "#",
      featured: false
    },
    {
      id: 4,
      title: "Elasticsearch for Modern Search Applications",
      description: "How to implement hybrid semantic and keyword search using Elasticsearch. Improve your search accuracy by 30% with these techniques.",
      readTime: "15 min read",
      publishedDate: "Coming Soon",
      tags: ["Elasticsearch", "Search", "Backend"],
      url: "#",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Deployment Strategies with Docker & Kubernetes",
      description: "A practical guide to deploying Python applications using containerization and orchestration tools. From development to production.",
      readTime: "14 min read",
      publishedDate: "Coming Soon",
      tags: ["Docker", "Kubernetes", "DevOps", "AWS"],
      url: "#",
      featured: false
    },
    {
      id: 6,
      title: "Async Task Processing with Celery and Redis",
      description: "Building robust background task processing systems. Learn how to handle millions of tasks efficiently and reduce processing latency by 90%.",
      readTime: "11 min read",
      publishedDate: "Coming Soon",
      tags: ["Celery", "Redis", "Python", "Performance"],
      url: "#",
      featured: false
    }
  ];

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
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/50 dark:border-purple-700/50">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">FEATURED</span>
              </div>
              <CardTitle className="text-2xl text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Satyam Kumar Chourasiya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Read Full Article
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* All Articles Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <span>{post.publishedDate}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.description.substring(0, 120)}...
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-slate-500 dark:text-slate-400 text-xs">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  {post.url !== "#" ? (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Read Article
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="pointer-events-none opacity-50" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

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
    </div>
  );
};

export default Blog;
