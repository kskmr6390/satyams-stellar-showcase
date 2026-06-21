import { GraduationCap, Sparkles, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const principles = [
  {
    title: "Build for scale, ship for clarity.",
    body: "Every line is a contract. I optimize for systems that grow without bending and for teammates who can pick them up tomorrow.",
  },
  {
    title: "Latency is a feature.",
    body: "Reduced media processing latency by 90% through async pipelines and serverless optimization. Performance is product.",
  },
  {
    title: "Lead by lifting.",
    body: "Led a team of 5 engineers to build Qatalyst. The win wasn't the launch — it was the engineers who outgrew their roles.",
  },
];

const numbers = [
  { value: "90%", label: "Latency reduction" },
  { value: "30%", label: "Search accuracy boost" },
  { value: "25%", label: "Server cost reduction" },
  { value: "50+", label: "Microservices owned" },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Vellore Institute of Technology, Chennai",
    period: "2016 — 2018",
  },
  {
    degree: "Bachelor of Information Technology (B.IT)",
    school: "Ranchi College, Ranchi",
    period: "2013 — 2016",
  },
];

const About = () => {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="About"
            title="Engineer, mentor, systems thinker."
            description="7+ years building scalable backend systems, distributed storage, and AI infrastructure — from monoliths to event-driven 50-service architectures."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm <span className="text-foreground">Satyam</span>, currently Staff Engineer at
                <span className="text-foreground"> Sandisk</span>, where I architect distributed storage
                systems and lead cross-functional engineering teams toward reliability at scale.
              </p>
              <p>
                Before Sandisk, I led the team that built{" "}
                <span className="text-foreground">Qatalyst</span> at Entropik — an AI-powered market
                research platform that processed millions of data points using LangChain-based RAG and
                open-source LLMs. We shipped a hybrid semantic + keyword search engine on Elasticsearch
                that boosted retrieval accuracy by 30%.
              </p>
              <p>
                I care deeply about three things: clean async architectures, the engineers I work with,
                and the cost-per-request curve. Most of my best work lives at that intersection.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  By the numbers
                </p>
                <div className="mt-6 grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
                  {numbers.map((n) => (
                    <div key={n.label} className="bg-card p-5">
                      <p className="text-2xl font-semibold tracking-tight">{n.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground font-mono">{n.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="/satyam_intro_ppt.pptx"
                  download="Satyam_Kumar_Chourasiya_Presentation.pptx"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Download intro deck (.pptx)
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-10">
            <Target className="w-5 h-5 text-violet-400" />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How I work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {principles.map((p, i) => (
              <div key={i} className="bg-background p-8">
                <p className="text-xs font-mono text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-5 h-5 text-violet-400" />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Education</h2>
          </div>
          <div className="space-y-px bg-border rounded-2xl overflow-hidden border border-border">
            {education.map((e) => (
              <div
                key={e.degree}
                className="bg-background p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <p className="text-lg font-medium">{e.degree}</p>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                </div>
                <p className="text-sm font-mono text-muted-foreground">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
