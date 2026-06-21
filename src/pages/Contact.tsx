import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import TopmateMeeting from "@/components/TopmateMeeting";

const channels = [
  { icon: Mail, label: "Email", value: "ksatyam1038@gmail.com", href: "mailto:ksatyam1038@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7397463101", href: "tel:+917397463101" },
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
  { icon: Clock, label: "Response", value: "Within 24 hours" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/satyam-chourasiya-931674141/" },
  { icon: Github, label: "GitHub", href: "https://github.com/kskmr6390" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/ksatyam1038" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent.",
      description: "Thanks — I'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <PageHeader
            eyebrow="Contact"
            title="Let's build something together."
            description="Open to advisory engagements, system design reviews, and select build collaborations. Drop a line — I read everything."
          />
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-5 space-y-8">
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="divide-y divide-border">
                  {channels.map((c) => {
                    const Icon = c.icon;
                    const inner = (
                      <div className="flex items-center gap-4 px-5 py-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground">
                          <Icon className="w-4 h-4" />
                        </span>
                        <div className="flex-1">
                          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-sm text-foreground">{c.value}</p>
                        </div>
                        {c.href && (
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    );
                    return c.href ? (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block hover:bg-background/50 transition-colors"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={c.label}>{inner}</div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  Elsewhere
                </p>
                <div className="flex gap-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-violet-400">
                  Book a 1:1
                </p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">
                  Skip the back-and-forth.
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Grab a slot for a system design review, AI / RAG architecture call, or career advisory session.
                </p>
                <div className="mt-4">
                  <TopmateMeeting label="Schedule on Topmate" variant="primary" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-violet-400">
                  Why reach out
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-foreground">·</span> 7+ yrs backend & distributed systems</li>
                  <li className="flex gap-2"><span className="text-foreground">·</span> Proven scale: 99.9% uptime, 50+ services</li>
                  <li className="flex gap-2"><span className="text-foreground">·</span> Led teams shipping AI platforms end-to-end</li>
                  <li className="flex gap-2"><span className="text-foreground">·</span> Specialty: LangChain RAG, search, event-driven architecture</li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Send a message
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">Tell me about it.</h3>

                <div className="mt-8 grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your full name"
                      required
                      className="mt-2 h-11 bg-background border-border focus-visible:ring-violet-400/30"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@company.com"
                      required
                      className="mt-2 h-11 bg-background border-border focus-visible:ring-violet-400/30"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about the project, the constraint, or the conversation you'd like to have."
                    rows={7}
                    required
                    className="mt-2 bg-background border-border focus-visible:ring-violet-400/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Send message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="mt-6 text-xs text-muted-foreground">
                  Prefer email? Reach me directly at{" "}
                  <a
                    href="mailto:ksatyam1038@gmail.com"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    ksatyam1038@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
