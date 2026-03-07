import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import TechBadge from "./ui/TechBadge";
import { projects } from "../data/profile";

export default function Projects() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="// Portfolio"
          title="Featured Projects"
          subtitle="A selection of work that showcases my technical range"
        />

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-accent/15 transition-all duration-300"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] font-mono tracking-wider uppercase">
                  Featured
                </div>
              )}

              <div className="p-5 sm:p-7 md:p-9">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-1">
                    <span className="font-mono text-xs text-accent/60 tracking-wider">
                      PROJECT {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 font-body leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {project.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-300 font-body">
                      <ChevronRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="accent" />
                  ))}
                </div>

                {/* Certificate Image */}
                {project.certificate && (
                  <div className="mb-6">
                    <img
                      src={project.certificate}
                      alt="Project Certificate"
                      className="w-full max-w-sm h-48 object-cover rounded-xl border border-white/10 cursor-pointer hover:border-accent/30 transition-colors"
                      onClick={() => setLightboxImg(project.certificate!)}
                    />
                  </div>
                )}

                {/* Project Images Grid */}
                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.images.map((img, j) => (
                      <motion.div
                        key={j}
                        whileHover={{ y: -4 }}
                        className="rounded-xl overflow-hidden border border-white/5 cursor-pointer hover:border-accent/30 transition-colors"
                        onClick={() => setLightboxImg(img)}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${j + 1}`}
                          className="w-full h-32 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
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
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Project"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
