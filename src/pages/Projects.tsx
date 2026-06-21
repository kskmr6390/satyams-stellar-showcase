import { ArrowUpRight, Github } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const projects = [
  {
    title: "Qatalyst",
    tagline: "AI-powered market research platform",
    description:
      "Led a team of 5 to ship Qatalyst — an enterprise-grade research platform with LangChain RAG, hybrid semantic + keyword search on Elasticsearch, and real-time analytics serving millions of data points.",
    tags: ["Python", "FastAPI", "LangChain", "Elasticsearch", "AWS"],
    metric: "+30% retrieval accuracy",
    featured: true,
  },
  {
    title: "Distributed Microservices Platform",
    tagline: "50+ services, event-driven",
    description:
      "Designed and shipped a 50+ microservice platform with Kafka-backed eventing, autoscaling, and zero-downtime deploys. Brought processing latency down 90% through async queues.",
    tags: ["Kafka", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    metric: "−90% latency",
    featured: true,
  },
  {
    title: "Inkwell AI",
    tagline: "Multi-agent authoring assistant",
    description:
      "Open-source AI writing platform with a multi-agent orchestrator (planner → writer → critic → editor), structured tool use, and persistent memory backed by a vector store.",
    tags: ["LangGraph", "LLMs", "Vector DB", "FastAPI", "Python"],
    metric: "WIP · open source",
    link: "https://github.com/kskmr6390/inkwell_ai",
    featured: true,
  },
  {
    title: "Agentic RAG Platform",
    tagline: "Retrieval-augmented agents at scale",
    description:
      "Production RAG stack with hybrid retrieval (BM25 + dense vectors), reranking, function-calling agents, and per-tenant context isolation. Powers grounded insights across long-form research.",
    tags: ["RAG", "LangChain", "pgvector", "OpenAI", "Anthropic"],
    metric: "+25% insight quality",
    featured: true,
  },
  {
    title: "MCP Tool Server",
    tagline: "Model Context Protocol integrations",
    description:
      "An MCP server exposing internal data sources and analytics tools to LLM clients (Claude, Cursor) with auth, rate limits, and audit logging.",
    tags: ["MCP", "TypeScript", "FastAPI", "OAuth2"],
    metric: "Internal tooling",
    featured: false,
  },
  {
    title: "Hybrid Search Engine",
    tagline: "Elasticsearch + semantic vectors",
    description:
      "Built a hybrid retrieval stack combining BM25 with dense vector reranking. Powers analyst-grade search across long-form research at Entropik.",
    tags: ["Elasticsearch", "Vector Search", "Python", "FastAPI"],
    metric: "+30% accuracy",
    featured: false,
  },
  {
    title: "Event-Driven Video Pipeline",
    tagline: "AWS Step Functions + Lambda",
    description:
      "Designed a serverless pipeline for video ingestion, PII redaction, and analysis. Async + idempotent; survives partial failures.",
    tags: ["AWS Lambda", "Step Functions", "SQS", "S3"],
    metric: "−90% processing time",
    featured: false,
  },
  {
    title: "TL-Connect Automation",
    tagline: "Workflow automation suite",
    description:
      "Email automation with chatbot APIs and SQL Server backend, cutting response times to under five minutes for thousands of users.",
    tags: ["Python", "Chatbot APIs", "SQL Server"],
    metric: "+70% efficiency",
    featured: false,
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="Projects"
            title="A few systems I've shipped."
            description="Production work spanning AI platforms, distributed services, search, and automation. Real numbers, real users."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
            Featured
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {featured.map((p) => (
              <article
                key={p.title}
                className="group bg-background p-8 md:p-10 hover:bg-card transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-violet-400">{p.metric}</p>
                    <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-mono text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              More work
            </p>
            <a
              href="https://github.com/kskmr6390"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              See all on GitHub
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {more.map((p) => {
              const Wrapper = p.link ? "a" : "div";
              const props = p.link
                ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={p.title}
                  {...(props as object)}
                  className="group bg-background p-7 hover:bg-card transition-colors cursor-default"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-mono text-violet-400">{p.metric}</p>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
                      <p className="text-xs text-muted-foreground">{p.tagline}</p>
                    </div>
                    {p.link && (
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
