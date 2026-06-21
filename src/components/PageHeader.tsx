interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const PageHeader = ({ eyebrow, title, description, align = "left" }: PageHeaderProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} animate-fade-in`}>
      <p className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span className="inline-block h-px w-8 bg-border" />
        {eyebrow}
      </p>
      <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
