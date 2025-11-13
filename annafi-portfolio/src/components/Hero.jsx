import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Shield, Brain } from "lucide-react";

export default function Hero() {
  const icons = [
    { Icon: Code, color: "text-cyan-400", delay: 0 },
    { Icon: Shield, color: "text-teal-400", delay: 0.2 },
    { Icon: Brain, color: "text-emerald-400", delay: 0.4 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
                A
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">Annafi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {icons.map(({ Icon, color, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + delay }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Full Stack Developer | Cybersecurity Specialist | ML Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Crafting secure, intelligent, and scalable solutions at the intersection of development, security, and artificial intelligence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium shadow-lg shadow-teal-500/50 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get In Touch
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-lg font-medium flex items-center gap-2">
            <Github className="w-5 h-5" />
            View GitHub
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { Icon: Github, link: "#" },
            { Icon: Linkedin, link: "#" },
            { Icon: Mail, link: "mailto:annafi@example.com" }
          ].map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href__={link}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}