import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function DeveloperLanding() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const [page, setPage] = useState<"main" | "achievement" | "project">("main");

  const codingParticles = [
    "0101",
    "{ }",
    "</>",
    "async",
    "const",
    "1101",
    "</div>",
    "fn()",
    "{}",
    "let x = 10;",
    "console.log(x);",
    "function foo(){}",
    "return 0;",
    "await fetch()",
    "if(a > b){}",
    "for(let i=0;i<5;i++)",
    "<div></div>",
    "{props.children}",
    "async function(){}",
    "const data = []",
    "while(true){}",
    "map(() => {})",
    "setTimeout(()=>{})",
    "JSON.parse()",
    "<Button />",
    "{state.value}",
    "try{}catch(e){}",
    "import React from 'react';",
  ];

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const renderParticles = (light = false) => {
    return codingParticles.flatMap((txt, i) => {
      return Array.from({ length: light ? 1 : 3 }).map((_, j) => {
        const top = Math.random() * 90;
        const left = Math.random() * 90;
        const duration = 5 + Math.random() * 6;
        const scale = light ? 0.6 : 0.8;
        const rotate = Math.random() * 40 - 20;
        const opacity = light ? 0.12 : 0.25;

        return (
          <motion.span
            key={`particle-${i}-${j}-${light}`}
            className="absolute text-xs text-green-300 font-mono select-none pointer-events-none"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(${rotate}deg) scale(${scale})`,
            }}
            animate={{
              y: [0, 18, 0],
              opacity: [opacity, opacity + 0.15, opacity],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {txt}
          </motion.span>
        );
      });
    });
  };

  // Effect variant สำหรับปุ่ม interactive
  const buttonHover = {
    whileHover: { scale: 1.08, rotate: [0, 2, -2, 0] },
    whileTap: { scale: 0.95 },
  };

  // Effect float สำหรับ Back Button
  const backButtonFloat = {
    animate: {
      y: [0, -5, 0, 5, 0],
      x: [0, 3, 0, -3, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Effect float สำหรับ Hero Buttons
  const heroButtonFloat = {
    animate: {
      y: [0, -4, 0, 4, 0],
      x: [0, 2, 0, -2, 0],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-x-hidden relative">
      {/* Back Button ลอย ๆ fixed */}
      {page !== "main" && (
        <motion.button
          {...buttonHover}
          {...backButtonFloat}
          onClick={() => setPage("main")}
          className="fixed top-6 left-6 z-50 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl shadow-lg"
        >
          Back to Main Menu
        </motion.button>
      )}

      <AnimatePresence mode="wait">
        {/* Main Hero */}
        {page === "main" && (
          <motion.section
            key="main"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 pt-24 text-center overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />

            {/* Glow blobs */}
            <motion.div
              className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-500/20 blur-[200px] rounded-full"
              animate={{ opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-40 -right-40 w-[450px] h-[450px] bg-purple-500/20 blur-[200px] rounded-full"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            {/* Coding particles */}
            {renderParticles()}

            {/* Hero Text */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white relative z-10 drop-shadow-md mb-6"
            >
              <span className="text-sky-400">Worasret </span>Kulkit
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-lg text-lg text-slate-300 mt-2 leading-relaxed relative z-10 mb-10"
            >
              Computer Engineering Student Interested in AI, Computer Vision,
              and Software Development
            </motion.p>

            {/* Buttons Hero ลอย ๆ */}
            <div className="flex flex-col gap-4 z-10 relative">
              <motion.button
                {...buttonHover}
                {...heroButtonFloat}
                onClick={() => setPage("achievement")}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-xl"
              >
                Achievement
              </motion.button>
              <motion.button
                {...buttonHover}
                {...heroButtonFloat}
                onClick={() => setPage("project")}
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-medium shadow-xl"
              >
                Project
              </motion.button>
            </div>

            {/* Contact Section */}
            <div className="absolute bottom-10 flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg">
                <Mail size={20} />
                wratmkulkic74@gmail.com
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold shadow-lg">
                <Phone size={20} />
                +66 649185760
              </div>
              <motion.a
                {...buttonHover}
                href="https://github.com/LittleKidz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold shadow-lg hover:bg-gray-700 transition"
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                {...buttonHover}
                href="https://www.linkedin.com/in/worasret-kulkit-403059394/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
            </div>
          </motion.section>
        )}

        {page === "achievement" && (
          <motion.section
            key="achievement"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="relative min-h-screen overflow-hidden"
          >
            {/* === FULL WIDTH CODING PARTICLES (ซ้าย + ขวา) === */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {renderParticles(true)}
            </div>

            {/* === CONTENT CONTAINER === */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    title: "POSN - Computer Olympiad - Camp 2",
                    imgSrc: "/images/com.jpg",
                  },
                  {
                    title: "Robotics Competition",
                    imgSrc: "/images/robot1.jpg",
                  },
                  {
                    title: "Robotics Competition",
                    imgSrc: "/images/robot2.jpg",
                  },
                  {
                    title: "Robotics Competition",
                    imgSrc: "/images/robot3.jpg",
                  },
                  {
                    title: "Robotics Competition",
                    imgSrc: "/images/robot4.jpg",
                  },
                  {
                    title: "Robotics Competition",
                    imgSrc: "/images/robot5.jpg",
                  },
                ].map((achievement, i) => (
                  <div
                    key={i}
                    className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 hover:border-blue-400 transition overflow-hidden flex flex-col"
                  >
                    <motion.img
                      src={achievement.imgSrc}
                      alt={achievement.title}
                      className="w-full h-64 md:h-72 object-cover cursor-zoom-in"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      onClick={() => setActiveImage(achievement.imgSrc)}
                    />

                    <div className="p-6 flex justify-center items-center text-center">
                      <h3 className="text-xl font-semibold">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Project Page */}
        {page === "project" && (
          <motion.section
            key="project"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="relative min-h-screen overflow-hidden"
          >
            {/* === FULL WIDTH CODING PARTICLES (เหมือน Achievement) === */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {renderParticles(true)}
            </div>

            {/* === CONTENT CONTAINER === */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
              {/* Background glow */}
              <motion.div
                className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-purple-500/20 blur-[180px] rounded-full"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-sky-500/20 blur-[180px] rounded-full"
                animate={{ opacity: [0.1, 0.18, 0.1] }}
                transition={{ duration: 7, repeat: Infinity }}
              />

              <h2 className="text-3xl font-bold mb-12 text-center relative z-10">
                Project
              </h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 bg-slate-800/90 backdrop-blur rounded-3xl shadow-xl border border-slate-700 overflow-hidden"
              >
                {/* Certificate */}
                <div className="py-10 flex justify-center">
                  <motion.img
                    src="/images/project-certificate.jpg"
                    alt="Project Certificate"
                    className="w-full max-w-md h-64 md:h-72 object-cover rounded-2xl cursor-zoom-in shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 180 }}
                    onClick={() =>
                      setActiveImage("/images/project-certificate.jpg")
                    }
                  />
                </div>

                {/* Divider */}
                <motion.div
                  className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">
                    Object Detection With Sound Feedback
                  </h3>

                  <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
                    Developed a real-time object detection system using YOLOv8
                    that identifies objects from visual input and provides
                    immediate audio feedback through text-to-speech, enabling
                    hands-free and accessible interaction.
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "YOLOv8",
                      "Python",
                      "OpenCV",
                      "Computer Vision",
                      "Text-to-Speech",
                      "Real-time Inference",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full text-sm bg-slate-700/70 border border-slate-600 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-10">
                  {[
                    "/images/project1.jpg",
                    "/images/project2.jpg",
                    "/images/project3.jpg",
                    "/images/project4.jpg",
                  ].map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="rounded-xl overflow-hidden shadow-lg"
                    >
                      <motion.img
                        src={img}
                        alt={`Project Image ${i + 1}`}
                        className="w-full h-40 object-cover cursor-zoom-in"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        onClick={() => setActiveImage(img)}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      {/* ===== FULLSCREEN IMAGE MODAL ===== */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)} // คลิกพื้นหลัง = ปิด
          >
            <motion.img
              src={activeImage}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl cursor-zoom-out"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()} // ⭐ สำคัญ
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
