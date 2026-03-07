import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-slate-500">
          &copy; {year} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-1 text-xs font-mono text-slate-600">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
