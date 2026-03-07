import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Terminal,
  BrainCircuit,
  Blocks,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { skillCategories } from "../data/profile";

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  terminal: Terminal,
  brain: BrainCircuit,
  blocks: Blocks,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          label="// Tech Stack"
          title="Skills & Expertise"
          subtitle="Technologies I work with across the full development stack"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Monitor;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-white text-base">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-slate-300 rounded-lg hover:border-accent/30 hover:text-accent transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
