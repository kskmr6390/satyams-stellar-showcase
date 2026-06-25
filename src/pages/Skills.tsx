import { useState } from "react";
import { Brain, Cloud, Code2, Database, Shield, Zap } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const categories = [
  {
    title: "Backend Architecture",
    icon: Code2,
    description: "Distributed systems & event-driven design",
    skills: [
      { name: "Microservices Architecture", level: 95, years: "7+" },
      { name: "Event-Driven Design", level: 92, years: "5+" },
      { name: "Domain-Driven Design", level: 88, years: "4+" },
      { name: "CQRS & Event Sourcing", level: 85, years: "3+" },
      { name: "API Gateway Patterns", level: 90, years: "5+" },
      { name: "Distributed Systems", level: 92, years: "7+" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure that scales itself",
    skills: [
      { name: "AWS (EC2, Lambda, S3, RDS)", level: 93, years: "7+" },
      { name: "Docker & Kubernetes", level: 88, years: "4+" },
      { name: "Terraform & IaC", level: 85, years: "3+" },
      { name: "CI/CD Pipelines", level: 90, years: "5+" },
      { name: "Observability", level: 87, years: "4+" },
      { name: "Auto-scaling", level: 92, years: "5+" },
    ],
  },
  {
    title: "Data & Performance",
    icon: Database,
    description: "Storage, search, and query optimization",
    skills: [
      { name: "PostgreSQL Advanced", level: 95, years: "7+" },
      { name: "Redis & Caching", level: 90, years: "5+" },
      { name: "Elasticsearch", level: 88, years: "4+" },
      { name: "Database Optimization", level: 93, years: "7+" },
      { name: "Data Modeling", level: 90, years: "5+" },
      { name: "Real-time Analytics", level: 85, years: "3+" },
    ],
  },
  {
    title: "Async & Messaging",
    icon: Zap,
    description: "Queues, streams, and back-pressure",
    skills: [
      { name: "Apache Kafka", level: 88, years: "4+" },
      { name: "RabbitMQ", level: 85, years: "3+" },
      { name: "AWS SQS/SNS", level: 90, years: "5+" },
      { name: "WebSocket Real-time", level: 87, years: "4+" },
      { name: "Event Streaming", level: 88, years: "4+" },
      { name: "Message Patterns", level: 92, years: "5+" },
    ],
  },
  {
    title: "AI Agents & RAG",
    icon: Brain,
    description: "Agentic systems, retrieval, vector search",
    skills: [
      { name: "AI Agents & Multi-Agent Systems", level: 90, years: "2+" },
      { name: "RAG (Retrieval-Augmented Generation)", level: 92, years: "3+" },
      { name: "LangChain · LangGraph · LlamaIndex", level: 90, years: "3+" },
      { name: "Vector DBs (Pinecone, Weaviate, pgvector)", level: 88, years: "2+" },
      { name: "Embeddings & Hybrid Retrieval", level: 90, years: "3+" },
      { name: "Tool Use & Function Calling", level: 88, years: "2+" },
      { name: "MCP (Model Context Protocol)", level: 82, years: "1+" },
      { name: "Prompt Engineering & Evals", level: 90, years: "3+" },
      { name: "LLM Observability & Guardrails", level: 85, years: "2+" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    description: "Auth, rate-limiting, audit",
    skills: [
      { name: "OAuth2 & JWT", level: 93, years: "5+" },
      { name: "API Security", level: 95, years: "7+" },
      { name: "Rate Limiting & DDoS", level: 90, years: "4+" },
      { name: "App Monitoring", level: 88, years: "4+" },
      { name: "Security Auditing", level: 85, years: "3+" },
      { name: "GDPR / SOC2", level: 82, years: "3+" },
    ],
  },
];

const stack = [
  "Python", "FastAPI", "TypeScript", "PostgreSQL", "Redis", "Elasticsearch",
  "AWS", "Docker", "Kubernetes", "Kafka",
  "LangChain", "LangGraph", "LlamaIndex", "pgvector", "Pinecone", "OpenAI",
  "Anthropic", "MCP",
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = categories[active].icon;

  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="Skills"
            title="The toolkit, sharpened over six years."
            description="A working knowledge of the systems behind production. Pick a category — depth, not surface."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Categories
              </p>
              <div className="space-y-1">
                {categories.map((c, i) => {
                  const Icon = c.icon;
                  const isActive = active === i;
                  return (
                    <button
                      key={c.title}
                      onClick={() => setActive(i)}
                      className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg border transition-all ${
                        isActive
                          ? "border-foreground/20 bg-card"
                          : "border-transparent hover:bg-card/50"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-md border ${
                          isActive
                            ? "border-violet-400/30 bg-violet-500/10 text-violet-400"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {c.title}
                        </p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {c.skills.length} skills
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="flex items-start gap-4 p-6 border-b border-border">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 text-violet-400">
                    <ActiveIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {categories[active].title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {categories[active].description}
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {categories[active].skills.map((s) => (
                    <div key={s.name} className="px-6 py-4">
                      <div className="flex items-baseline justify-between mb-2 gap-4">
                        <p className="text-sm font-medium">{s.name}</p>
                        <div className="flex items-baseline gap-3 font-mono text-xs">
                          <span className="text-muted-foreground">{s.years} yrs</span>
                          <span className="text-violet-400 tabular-nums">{s.level}%</span>
                        </div>
                      </div>
                      <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-700"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Core stack
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            What I reach for daily.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-mono text-foreground/80 hover:border-foreground/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
