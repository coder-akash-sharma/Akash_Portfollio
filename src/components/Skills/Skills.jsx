import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 px-8 md:px-12 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-white/5 rounded-xl p-3 hover:bg-blue-500/10 transition"
                  >
                    <div className="text-3xl">
                      {skill.icon}
                    </div>

                    <span className="text-lg">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;