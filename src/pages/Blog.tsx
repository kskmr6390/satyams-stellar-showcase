import { useState, useEffect } from "react";
import { ArrowUpRight, Calendar, Clock, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";

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

const formatDate = (s: string) =>
  new Date(s).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=satyam_chourasiya_99ea2e4&per_page=30"
        );
        if (!res.ok) throw new Error("Failed to fetch blog posts");
        setPosts(await res.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="Writing"
            title="Notes on systems, AI, and the work."
            description="Backend architecture, AI integration, cloud infra, and the lessons that come from shipping at scale."
          />
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 rounded-full border-2 border-border border-t-violet-400 animate-spin" />
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-center">
              <p className="text-destructive">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {featured && (
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-border bg-card overflow-hidden mb-12 hover:border-foreground/30 transition-colors"
                >
                  <div className="grid md:grid-cols-2">
                    {featured.cover_image && (
                      <div className="aspect-video md:aspect-auto overflow-hidden bg-background">
                        <img
                          src={featured.cover_image}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-violet-400">
                        Featured
                        <span className="h-px w-8 bg-violet-400/30" />
                        Latest
                      </div>
                      <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-violet-400 transition-colors text-balance">
                        {featured.title}
                      </h2>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {featured.description}
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(featured.published_at)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {featured.reading_time_minutes} min
                        </span>
                      </div>
                      <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                        Read article
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </a>
              )}

              <div className="flex items-end justify-between mb-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  All posts · {posts.length}
                </p>
                <a
                  href="https://dev.to/satyam_chourasiya_99ea2e4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Follow on dev.to
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
                {rest.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-background p-6 flex flex-col hover:bg-card transition-colors"
                  >
                    {p.cover_image && (
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-border">
                        <img
                          src={p.cover_image}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <h3 className="text-base font-semibold tracking-tight leading-snug line-clamp-2 group-hover:text-violet-400 transition-colors">
                      {p.title}
                    </h3>
                    {p.description && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                        {p.description}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tag_list.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-foreground/70"
                        >
                          {t.toLowerCase()}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{formatDate(p.published_at)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {p.reading_time_minutes} min
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-16 rounded-2xl border border-border bg-card p-8 md:p-10 text-center">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Want new posts in your inbox?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I publish regularly on dev.to. Follow there to get notified.
                </p>
                <a
                  href="https://dev.to/satyam_chourasiya_99ea2e4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Follow on dev.to
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
