import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "group-hover:text-blue-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    color: "group-hover:text-emerald-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "LittleKidz",
    href: profile.github,
    color: "group-hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Worasret Kulkit",
    href: profile.linkedin,
    color: "group-hover:text-blue-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-8"
        >
          <Mail size={28} className="text-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 font-body text-base sm:text-lg mb-10 sm:mb-12 max-w-lg mx-auto"
        >
          I'm currently open to internship opportunities, freelance projects, and
          collaborative work. Don't hesitate to reach out.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300 text-left"
              >
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <Icon size={20} className={`text-slate-400 ${item.color} transition-colors`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-slate-500 tracking-wide uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-body text-slate-200 truncate mt-0.5">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-accent transition-colors flex-shrink-0"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Primary CTA */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy-900 font-heading font-semibold text-sm rounded-xl hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
        >
          <Mail size={18} />
          Send Me an Email
        </motion.a>
      </div>
    </section>
  );
}
