import {
  ArrowRight,
  Bot,
  Database,
  Download,
  Github,
  Layers,
  Linkedin,
  MapPin,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import TopmateMeeting from "@/components/TopmateMeeting";

const stats = [
  { label: "Years of experience", value: "7+" },
  { label: "Engineers led", value: "15+" },
  { label: "Microservices shipped", value: "50+" },
  { label: "Avg uptime SLA", value: "99.9%" },
];

const highlights = [
  {
    eyebrow: "Now",
    title: "Staff Engineer at Sandisk",
    body: "Building an AI/ML platform.",
  },
  {
    eyebrow: "AI/ML Platform",
    title: "Built Qatalyst, an AI research platform",
    body: "Led a team of 5 at Entropik to ship a production AI/ML platform with RAG, agents, and hybrid semantic search powering millions of data points.",
  },
  {
    eyebrow: "AI Agents",
    title: "Agentic systems, in production",
    body: "Multi-agent orchestration (planner / executor / critic), tool use, MCP, durable workflows, evals — the unglamorous parts that make agents actually ship.",
  },
];

const aiCapabilities = [
  {
    icon: Bot,
    title: "AI Agents",
    body: "Multi-agent orchestration with planner / executor / critic loops, tool use, and persistent memory.",
    tags: ["LangGraph", "Function Calling", "MCP"],
  },
  {
    icon: Database,
    title: "RAG Pipelines",
    body: "Hybrid retrieval (BM25 + dense), reranking, chunking strategies, and grounded answer generation.",
    tags: ["LangChain", "LlamaIndex", "pgvector"],
  },
  {
    icon: Network,
    title: "Vector Search",
    body: "Embedding pipelines and ANN-backed search across Pinecone, Weaviate, and pgvector.",
    tags: ["Pinecone", "Weaviate", "Embeddings"],
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    body: "Durable, observable agent pipelines built on event-driven backends — queues, retries, audits.",
    tags: ["Kafka", "Step Functions", "Temporal"],
  },
  {
    icon: Layers,
    title: "AI/ML Platform",
    body: "End-to-end platforms: feature pipelines, model serving, prompt versioning, evals, caching, cost-per-request controls.",
    tags: ["OpenAI", "Anthropic", "vLLM", "MLflow"],
  },
  {
    icon: Sparkles,
    title: "Production-grade",
    body: "Auth, rate-limiting, audit logs, and SLO-driven monitoring — AI systems that survive Monday morning.",
    tags: ["Observability", "Guardrails", "SOC2"],
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40 gradient-mask-radial pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-mono text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for advisory & collaboration
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance">
                Backend systems,
                <br />
                AI agents &amp;{" "}
                <span className="italic font-serif text-violet-400">ML platforms.</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                I'm <span className="text-foreground font-medium">Satyam Kumar Chourasiya</span>,
                a Staff Engineer at Sandisk building an AI/ML platform. 7+ years across
                production AI/ML systems, RAG, agents, and the distributed backends that run them.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {["AI Agents", "RAG", "AI/ML Platform", "Distributed Systems", "Cloud Infra"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-mono text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <TopmateMeeting />
                <a
                  href="https://github.com/kskmr6390/satyams-stellar-showcase/raw/main/resume.pdf"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  See projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Bangalore, India
                </div>
                <a
                  href="https://github.com/kskmr6390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" /> kskmr6390
                </a>
                <a
                  href="https://www.linkedin.com/in/satyam-chourasiya-931674141/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-fade-in-slow">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-2 bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
                  <img
                    src="/lovable-uploads/profile-pic.png"
                    alt="Satyam Kumar Chourasiya"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Satyam Kumar Chourasiya</p>
                        <p className="text-xs text-muted-foreground font-mono">Staff Engineer · Sandisk</p>
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 hidden sm:block rounded-xl border border-border bg-card px-3 py-2 text-xs font-mono shadow-lg">
                  <span className="text-violet-400">◆</span> AI Agents · RAG
                </div>
                <div className="absolute -top-4 -right-4 hidden sm:block rounded-xl border border-border bg-card px-3 py-2 text-xs font-mono shadow-lg">
                  <span className="text-emerald-400">▲</span> AI/ML Platform
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-6 py-6">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">{s.value}</p>
                <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-block h-px w-8 bg-border" />
                Snapshot
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                A glance at the work.
              </h2>
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Full story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {highlights.map((h) => (
              <div key={h.title} className="bg-background p-8 hover:bg-card transition-colors">
                <p className="text-xs font-mono uppercase tracking-widest text-violet-400">
                  {h.eyebrow}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI / Agents / RAG */}
      <section className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-violet-400">
                <span className="inline-block h-px w-8 bg-violet-400/60" />
                AI Agents · RAG · AI/ML Platform
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-balance">
                Production AI agents and ML platforms,{" "}
                <span className="italic font-serif text-violet-400">grounded.</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I build the boring parts of agents, RAG, and ML platforms so the smart parts ship:
                retrieval, evals, tool contracts, model serving, observability, and the queues that
                keep them up.
              </p>
            </div>
            <Link
              to="/skills"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See the stack
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {aiCapabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-background p-7 hover:bg-card transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-violet-400/30 bg-violet-500/10 text-violet-400">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight">{c.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
            <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
                Have a problem worth solving?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                I take on advisory engagements, system design reviews, and select build collaborations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <TopmateMeeting label="Book a 1:1" variant="outline" />
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  See experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
