
import { ExternalLink, Calendar, User, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
  const blogPosts = [
    {
      id: 2,
      title: "Designing Rate Limiters for Multi-Agent AI Systems: Patterns, Pitfalls, and Best Practices",
      description: "Learn how to design and implement robust rate limiting strategies for multi-agent AI systems. This comprehensive guide covers patterns, common pitfalls, and best practices for managing API limits in complex AI workflows.",
      readTime: "6 min read",
      publishedDate: "Jul 12, 2024",
      tags: ["AI", "Open Source", "DevTools", "Machine Learning"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/designing-rate-limiters-for-multi-agent-ai-systems-patterns-pitfalls-and-best-practices-4i4e",
      featured: true
    },
    {
      id: 3,
      title: "The Future Is Synthetic: How AI is Creating Art, Music, Code, and Reality",
      description: "Explore how AI is revolutionizing creative industries and transforming the way we create art, music, code, and even reality itself. A deep dive into the synthetic content revolution.",
      readTime: "6 min read",
      publishedDate: "Jul 9, 2024",
      tags: ["AI", "Machine Learning", "Open Source", "LLM"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/the-future-is-synthetic-how-ai-is-creating-art-music-code-and-reality-2j2p",
      featured: false
    },
    {
      id: 4,
      title: "AI-Generated Art: Creativity, Collaboration, or Code-driven Theft?",
      description: "An in-depth analysis of AI-generated art and its implications for creativity, collaboration, and copyright. Exploring the ethical and technical dimensions of code-driven creativity.",
      readTime: "6 min read",
      publishedDate: "Jul 9, 2024",
      tags: ["AI", "Open Source", "DevTools", "Machine Learning"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/ai-generated-art-creativity-collaboration-or-code-driven-theft-45j7",
      featured: false
    },
    {
      id: 5,
      title: "🚀 Just published a new blog—auto-generated and auto-published using my multi-agent AI system built with Inkwell ai !",
      description: "Showcasing the power of automated content creation with a multi-agent AI system. Learn how I built an automated blog publishing pipeline using advanced AI agents.",
      readTime: "1 min read",
      publishedDate: "Jul 9, 2024",
      tags: ["AI", "OpenAI", "Automation", "Software Development"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/just-published-a-new-blog-auto-generated-and-auto-published-using-my-multi-agent-ai-system-built-52m8",
      featured: false
    },
    {
      id: 6,
      title: "How to Build a Multi-Agent AI System Using CrewAI and OpenAI: A Tactical Guide for Developers",
      description: "A comprehensive tactical guide for developers on building sophisticated multi-agent AI systems using CrewAI and OpenAI. Learn the practical implementation strategies and best practices.",
      readTime: "7 min read",
      publishedDate: "Jul 9, 2024",
      tags: ["AI", "Open Source", "DevTools", "Machine Learning"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/how-to-build-a-multi-agent-ai-system-using-crewai-and-openai-a-tactical-guide-for-developers-29b3",
      featured: false
    },
    {
      id: 7,
      title: "The Transformative Power of AI in Healthcare: Unlocking New Potential",
      description: "Exploring how AI is revolutionizing healthcare by unlocking new potential in diagnosis, treatment, and patient care. A look at the transformative applications and future possibilities.",
      readTime: "3 min read",
      publishedDate: "Jul 9, 2024",
      tags: ["AI", "Open Source", "DevTools", "Machine Learning"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/the-transformative-power-of-ai-in-healthcare-unlocking-new-potential-5ehn",
      featured: false
    },
    {
      id: 8,
      title: "From Prompt Engineering to Prompt Strategy: Mapping the Future Of AI",
      description: "Evolution from basic prompt engineering to strategic prompt design. Learn how to develop comprehensive prompt strategies that map the future of AI interactions.",
      readTime: "2 min read",
      publishedDate: "Jul 7, 2024",
      tags: ["AI", "Prompt Engineering", "Prompt Strategy"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/from-prompt-engineering-to-prompt-strategy-mapping-the-future-of-ai-2npk",
      featured: false
    },
    {
      id: 9,
      title: "The $100 Million Gambit: Meta's Bold Move & Its Impact on the AI Ecosystem",
      description: "Analyzing Meta's strategic $100 million investment and its profound impact on the AI ecosystem. Understanding the implications for developers and the industry.",
      readTime: "2 min read",
      publishedDate: "Jul 7, 2024",
      tags: ["AI", "Meta", "OpenAI"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/the-100-million-gambit-metas-bold-move-its-impact-on-the-ai-ecosystem-213i",
      featured: false
    },
    {
      id: 10,
      title: "The Rise of Agentic AI: What It Means for Developers and Businesses",
      description: "Understanding the rise of agentic AI and its implications for developers and businesses. Explore how autonomous AI agents are reshaping the technology landscape.",
      readTime: "2 min read",
      publishedDate: "Jul 7, 2024",
      tags: ["AI", "Agentic AI", "Developers", "Businesses"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/the-rise-of-agentic-ai-what-it-means-for-developers-and-businesses-4f7o",
      featured: false
    },
    {
      id: 11,
      title: "Understanding AI LLMs: Implications, Applications, and the Future",
      description: "A comprehensive exploration of AI Large Language Models, their implications, applications, and future potential. Understanding the technology that's transforming industries.",
      readTime: "2 min read",
      publishedDate: "Jul 7, 2024",
      tags: ["AI", "LLMs", "LegalTech", "Law"],
      url: "https://dev.to/satyam_chourasiya_99ea2e4/understanding-ai-llms-implications-applications-and-the-future-nko",
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">All Articles</h2>
            {/* New Blog Alert */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              🆕 New Blog Alert
            </div>
          </div>
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
