import { Calendar, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TOPMATE_URL =
  "https://topmate.io/satyam_chourasiya10/page/UKbicXJCYO?utm_source=portfolio&utm_medium=site";

interface TopmateMeetingProps {
  variant?: "primary" | "ghost" | "outline";
  label?: string;
  className?: string;
}

const TopmateMeeting = ({
  variant = "outline",
  label = "Schedule a meeting",
  className = "",
}: TopmateMeetingProps) => {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const styles = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    outline:
      "border border-border bg-card text-foreground hover:border-foreground/30",
    ghost: "text-muted-foreground hover:text-foreground",
  }[variant];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`${base} ${styles} ${className}`}>
          <Calendar className="w-4 h-4" />
          {label}
          <span className="ml-1 hidden sm:inline rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-0.5 text-[10px] font-mono text-violet-400">
            via Topmate
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden border-border bg-background">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="text-left">
            <p className="text-xs font-mono uppercase tracking-widest text-violet-400">
              Book a session
            </p>
            <span className="mt-2 block text-xl font-semibold tracking-tight">
              Schedule a 1:1 with Satyam
            </span>
            <span className="mt-1 block text-sm font-normal text-muted-foreground">
              System design reviews · career advisory · backend & AI architecture
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="relative bg-card">
          <iframe
            src={TOPMATE_URL}
            title="Book a meeting with Satyam on Topmate"
            className="w-full h-[70vh] border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-6 py-3 border-t border-border text-xs text-muted-foreground">
          <span className="font-mono">topmate.io · satyam_chourasiya10</span>
          <a
            href={TOPMATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            Open in new tab
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopmateMeeting;
