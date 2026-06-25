import PageHeader from "@/components/PageHeader";

const experiences = [
  {
    title: "Staff Engineer",
    company: "Sandisk",
    period: "Present",
    location: "Bangalore, India",
    description:
      "Building an AI/ML platform — the infrastructure for model training, serving, evaluation, and the agentic workflows that run on top of it.",
    highlights: [
      "Designing and building an end-to-end AI/ML platform for model training, serving, and evaluation",
      "Architecting feature pipelines, model registry, and inference serving",
      "Bringing RAG, agents, and LLM tooling into a unified, production-grade platform",
    ],
    metrics: [
      { v: "99.9%", l: "Uptime SLA" },
      { v: "40%", l: "Pipeline perf gain" },
      { v: "15+", l: "Engineers led" },
    ],
    stack: ["AI/ML Platform", "Model Serving", "MLflow", "Python", "FastAPI", "Kubernetes", "AWS"],
  },
  {
    title: "Senior Backend Engineer",
    company: "Entropik",
    period: "Aug 2021 — Present",
    location: "Bangalore, India",
    description:
      "Led backend engineering for AI-powered market research at scale. Built Qatalyst with a team of 5 from architecture to launch.",
    highlights: [
      "Led a team of 5 to ship Qatalyst — an AI-powered market research platform",
      "Built a hybrid semantic + keyword search engine on Elasticsearch (+30% retrieval accuracy)",
      "Architected a LangChain-based RAG system that improved insights generation by 25%",
    ],
    metrics: [
      { v: "90%", l: "Latency reduction" },
      { v: "25%", l: "Server cost cut" },
      { v: "20%", l: "Engagement boost" },
    ],
    stack: ["Python", "FastAPI", "Django", "AWS", "Elasticsearch", "LangChain", "SQS", "Lambda"],
  },
  {
    title: "Associate Software Engineer",
    company: "Teamlease",
    period: "Jul 2019 — Aug 2021",
    location: "Bangalore, India",
    description:
      "Workflow automation, legacy modernization, and performance work across enterprise applications.",
    highlights: [
      "Automated email workflows via chatbot APIs (response < 5 min)",
      "Refactored legacy TL-Connect modules (attendance, payroll) for reliability",
      "Optimized SQL Server queries — 30% faster data processing",
    ],
    metrics: [
      { v: "70%", l: "Workflow efficiency" },
      { v: "20%", l: "Error reduction" },
      { v: "10%", l: "Response time" },
    ],
    stack: ["Python", "SQL Server", "REST APIs", "Automation"],
  },
];

const Experience = () => {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="Experience"
            title="Six years across storage, AI infra, and platforms."
            description="From legacy modernization at Teamlease to leading AI platform engineering at Entropik to staff-level systems work at Sandisk."
          />
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative">
            <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((e, i) => (
                <div key={e.company} className="relative pl-12 md:pl-16">
                  <div className="absolute left-4 md:left-6 -translate-x-1/2 mt-2 h-3 w-3 rounded-full border-2 border-background bg-violet-400 ring-4 ring-violet-400/20" />

                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="px-6 md:px-8 py-6 border-b border-border">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <p className="text-xs font-mono uppercase tracking-widest text-violet-400">
                            0{i + 1} · {e.location}
                          </p>
                          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                            {e.title}
                          </h2>
                          <p className="text-base text-muted-foreground">
                            <span className="text-foreground">{e.company}</span>
                          </p>
                        </div>
                        <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {e.description}
                      </p>
                    </div>

                    <div className="px-6 md:px-8 py-6 border-b border-border">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                        Highlights
                      </p>
                      <ul className="space-y-2">
                        {e.highlights.map((h, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-foreground/90">
                            <span className="font-mono text-muted-foreground mt-0.5">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="px-6 md:px-8 py-6 border-b border-border">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                        Impact
                      </p>
                      <div className="grid grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
                        {e.metrics.map((m) => (
                          <div key={m.l} className="bg-card p-4">
                            <p className="text-xl md:text-2xl font-semibold tracking-tight">
                              {m.v}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground font-mono">{m.l}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-6 md:px-8 py-6">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {e.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-mono text-foreground/80"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
