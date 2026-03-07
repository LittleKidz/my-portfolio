type Props = {
  label: string;
  variant?: "default" | "accent";
};

export default function TechBadge({ label, variant = "default" }: Props) {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-mono tracking-wide border transition-colors duration-200";
  const styles =
    variant === "accent"
      ? "bg-accent/10 border-accent/30 text-accent-light hover:bg-accent/20"
      : "bg-slate-800/60 border-slate-700/50 text-slate-300 hover:border-slate-500";

  return <span className={`${base} ${styles}`}>{label}</span>;
}
