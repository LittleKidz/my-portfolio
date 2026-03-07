import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Medal, Star, X } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { achievements } from "../data/profile";

const typeConfig: Record<string, { icon: React.ComponentType<{ size?: number; className?: string }>; color: string; label: string }> = {
  gold: { icon: Medal, color: "text-yellow-400", label: "Gold Medal" },
  silver: { icon: Medal, color: "text-slate-300", label: "Silver Medal" },
  bronze: { icon: Medal, color: "text-amber-600", label: "Runner-Up" },
  honor: { icon: Star, color: "text-blue-400", label: "Honoree" },
  qualifier: { icon: Award, color: "text-emerald-400", label: "Qualifier" },
};

export default function Achievements() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="achievements" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading
          label="// Accomplishments"
          title="Awards & Achievements"
          subtitle="Competitive experience in computer science and robotics"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          <div className="space-y-6">
            {achievements.map((item, i) => {
              const config = typeConfig[item.type] || typeConfig.qualifier;
              const Icon = config.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-3 sm:gap-5 md:gap-6 pl-0"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0 w-10 sm:w-12 md:w-16 flex justify-center">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center shadow-lg">
                      <Icon size={18} className={config.color} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/15 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] text-accent tracking-wider uppercase px-2 py-0.5 rounded bg-accent/10">
                            {item.year}
                          </span>
                          <span className={`text-[10px] font-mono ${config.color}`}>
                            {config.label}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold text-white text-sm sm:text-base leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full sm:w-28 h-20 object-cover rounded-lg border border-white/5 cursor-pointer hover:border-accent/30 transition-colors flex-shrink-0"
                          onClick={() => setLightboxImg(item.image!)}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white"
              onClick={() => setLightboxImg(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Achievement"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
