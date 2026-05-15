// Recommended Project Structure
//
// src/
// ├── components/
// │   ├── Hero.jsx
// │   ├── About.jsx
// │   ├── Skills.jsx
// │   ├── Projects.jsx
// │   ├── Experience.jsx
// │   ├── Education.jsx
// │   ├── Contact.jsx
// │   ├── Footer.jsx
// │   └── LanguageSwitcher.jsx
// │
// ├── data/
// │   ├── projects.js
// │   ├── skills.js
// │   └── translations.js
// │
// ├── assets/
// │   ├── images/
// │   └── icons/
// │
// ├── pages/
// │   └── Home.jsx
// │
// ├── styles/
// │   └── globals.css
// │
// ├── App.jsx
// └── main.jsx
//
// Example:
// Move projects array into:
// src/data/projects.js
//
// export const projects = [...]
//
// Then import it:
// import { projects } from "../data/projects";

import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const translations = {
    en: {
      role: "Software Engineer",
      about: "About Me",
      skills: "Technical Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Let’s Work Together",
      contactBtn: "Contact Me",
      githubBtn: "GitHub Profile",
      selectedWork: "Selected recent work",
      freelance: "Freelance Web Developer",
      webDev: "Web Developer",
      heroText:
        "Front-End & Full Stack Developer focused on building modern, scalable, and responsive web applications using React.js, Tailwind CSS, and modern web technologies.",
      aboutText:
        "I am a passionate software engineer with experience in building responsive and scalable web applications.",
      contactText:
        "I’m available for freelance projects, frontend development, and full-stack web applications.",
    },
    ar: {
      role: "مهندس برمجيات",
      about: "من أنا",
      skills: "المهارات التقنية",
      projects: "المشاريع",
      experience: "الخبرات",
      education: "التعليم",
      contact: "لنعمل معًا",
      contactBtn: "تواصل معي",
      githubBtn: "حساب GitHub",
      selectedWork: "أحدث الأعمال",
      freelance: "مطور ويب مستقل",
      webDev: "مطور ويب",
      heroText:
        "مطور واجهات أمامية وفول ستاك متخصص في بناء تطبيقات ويب حديثة ومتجاوبة باستخدام React.js و Tailwind CSS.",
      aboutText:
        "أنا مهندس برمجيات شغوف ببناء تطبيقات ويب حديثة ومتجاوبة.",
      contactText:
        "متاح للعمل الحر وتطوير تطبيقات الويب الحديثة.",
    },
    tr: {
      role: "Yazılım Mühendisi",
      about: "Hakkımda",
      skills: "Teknik Yetenekler",
      projects: "Projeler",
      experience: "Deneyim",
      education: "Eğitim",
      contact: "Birlikte Çalışalım",
      contactBtn: "İletişime Geç",
      githubBtn: "GitHub Profili",
      selectedWork: "Seçilen Projeler",
      freelance: "Freelance Web Geliştirici",
      webDev: "Web Geliştirici",
      heroText:
        "Modern ve responsive web uygulamaları geliştiren Front-End & Full Stack geliştirici.",
      aboutText:
        "Responsive ve modern web uygulamaları geliştirme konusunda deneyimli bir yazılım mühendisiyim.",
      contactText:
        "Freelance projeler ve full-stack uygulamalar için müsaitim.",
    },
  };

  const [lang, setLang] = React.useState("en");
  const t = translations[lang];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce application with responsive UI and API integration.",
      tech: ["React", "Tailwind CSS", "REST API"],
      link: "https://github.com/amedridvan/E-commerce",
    },
    {
      title: "TV App",
      description:
        "Streaming and media browser integrated with public APIs.",
      tech: ["React", "JavaScript", "API"],
      link: "https://github.com/amedridvan/Tv-app",
    },
    {
      title: "Quiz App",
      description:
        "Interactive quiz platform with timers and score tracking.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/amedridvan/quiz-app",
    },
  ];

  const featuredStats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects", value: "15+" },
    { label: "Technologies", value: "10+" },
  ];

  const skills = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="fixed top-5 right-5 z-50 flex gap-2 bg-zinc-900 border border-zinc-800 p-2 rounded-2xl">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-xl ${lang === "en" ? "bg-violet-600" : "bg-zinc-800"}`}
        >
          EN
        </button>

        <button
          onClick={() => setLang("ar")}
          className={`px-4 py-2 rounded-xl ${lang === "ar" ? "bg-violet-600" : "bg-zinc-800"}`}
        >
          AR
        </button>

        <button
          onClick={() => setLang("tr")}
          className={`px-4 py-2 rounded-xl ${lang === "tr" ? "bg-violet-600" : "bg-zinc-800"}`}
        >
          TR
        </button>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-violet-700/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"
        />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-violet-400 text-lg mb-4">{t.role}</p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Ahmed Ridvan
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {t.heroText}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
              {featuredStats.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 text-center"
                >
                  <h3 className="text-2xl font-bold text-violet-400">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="https://github.com/amedridvan"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/ahmed-ridvan-a18527211"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-violet-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-72 h-72 rounded-full bg-gradient-to-br from-violet-600 to-purple-900 shadow-[0_0_100px_rgba(139,92,246,0.5)] flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-7xl font-bold text-violet-400">
                AR
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-violet-400">
            {t.about}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-400">
          {t.skills}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center hover:border-violet-500 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-4xl font-bold text-violet-400">
            {t.projects}
          </h2>

          <p className="text-gray-500">{t.selectedWork}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-violet-500 transition shadow-xl hover:shadow-violet-500/20"
            >
              <div className="h-48 rounded-2xl bg-gradient-to-br from-violet-700 to-purple-900 mb-6 flex items-center justify-center text-3xl font-bold relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                {project.title.charAt(0)}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-violet-600/20 text-violet-300 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition"
              >
                View Project
              </a>

              <button className="px-5 py-3 rounded-xl border border-zinc-700 hover:border-violet-500 transition">
                Live Demo
              </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-violet-400">
          {t.experience}
        </h2>

        <div className="space-y-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">{t.freelance}</h3>
              <span className="text-violet-400">2023 - Present</span>
            </div>

            <p className="text-gray-400">
              Building modern full-stack applications with React.js and Tailwind CSS.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">{t.webDev}</h3>
              <span className="text-violet-400">2021 - 2023</span>
            </div>

            <p className="text-gray-400">
              Worked on responsive applications and API integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-violet-400">
          {t.education}
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Bachelor of Science in Software Engineering
              </h3>

              <p className="text-gray-400 mt-2">
                Fırat University — Elazığ, Turkey
              </p>
            </div>

            <span className="text-violet-400 font-medium">
              2018 - 2022
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Studied software engineering fundamentals including web development,
            databases, algorithms, software architecture, and modern application
            development.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-violet-700 to-purple-900 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.contact}</h2>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            {t.contactText}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:ahmedrad619@gmail.com"
              className="px-6 py-3 rounded-2xl bg-black hover:bg-zinc-900 transition"
            >
              {t.contactBtn}
            </a>

            <a
              href="https://github.com/amedridvan"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-white transition"
            >
              {t.githubBtn}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-8 text-violet-400">
            Contact Form
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-violet-500"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="md:col-span-2 bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-violet-600 hover:bg-violet-500 transition rounded-2xl py-4 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 Ahmed Ridvan. All rights reserved.
      </footer>
    </div>
  );
}
