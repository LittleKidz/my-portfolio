import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "../data/profile";

const highlights = [
  { icon: GraduationCap, label: "Chulalongkorn University", sub: "Computer Engineering" },
  { icon: Code, label: "Full-Stack Development", sub: "React · Node · Python" },
  { icon: Trophy, label: "National Gold Medalist", sub: "Robotics & Olympiad" },
  { icon: Sparkles, label: "AI & Computer Vision", sub: "YOLOv8 · OpenCV" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="// About Me"
          title="Who I Am"
          subtitle="A snapshot of my background and what drives me"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-slate-300 font-body leading-relaxed text-base">
                {paragraph}
              </p>
            ))}

            {/* Education Card */}
            <div className="mt-8 p-5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={18} className="text-accent" />
                <span className="font-heading font-semibold text-white text-sm">
                  {profile.education.degree}
                </span>
              </div>
              <p className="text-accent font-medium text-sm">
                {profile.education.major}
              </p>
              <p className="text-slate-400 text-sm mt-1">
                {profile.education.university} · {profile.education.period}
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300"
                >
                  <Icon
                    size={22}
                    className="text-accent/70 group-hover:text-accent transition-colors mb-3"
                  />
                  <p className="font-heading text-sm font-semibold text-white leading-tight">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{item.sub}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
