import { Award, Star, TrendingUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const achievements = [
  {
    title: "Developer of the Month",
    org: "Entropik",
    description:
      "Recognized for balancing demanding priorities across Decode and Affect Labs, taking decisive calls, and liaising with stakeholders across functions for smooth delivery.",
    image: "/lovable-uploads/4fddb25b-eea1-4183-834c-f87280a9152d.png",
    type: "Award",
    icon: Award,
  },
  {
    title: "Team Leadership Excellence",
    org: "Entropik",
    description:
      "Led a team of 5 engineers from architecture through launch on Qatalyst — an AI-powered market research platform.",
    type: "Leadership",
    icon: Star,
  },
  {
    title: "Performance Optimization Champion",
    org: "Multiple Projects",
    description:
      "Sustained measurable improvements across systems — 90% latency reduction, 30% accuracy gain, 25% cost reduction.",
    type: "Performance",
    icon: TrendingUp,
  },
];

const metrics = [
  { v: "90%", l: "Latency reduction" },
  { v: "30%", l: "Accuracy lift" },
  { v: "25%", l: "Cost reduction" },
  { v: "50+", l: "Microservices owned" },
];

const Achievements = () => {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="Recognition"
            title="Awards, leadership, and outcomes."
            description="Recognition for technical depth, team leadership, and the operational wins that show up in the numbers."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {achievements.map((a) => {
              const Icon = a.icon;
              return (
                <article key={a.title} className="bg-background p-7 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-violet-400/30 bg-violet-500/10 text-violet-400">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {a.type}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{a.title}</h3>
                  <p className="mt-1 text-sm text-violet-400 font-mono">{a.org}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {a.description}
                  </p>
                  {a.image && (
                    <div className="mt-6 rounded-xl border border-border overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            Impact metrics
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            The outcomes, in numbers.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {metrics.map((m) => (
              <div key={m.l} className="bg-background p-6">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">{m.v}</p>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
