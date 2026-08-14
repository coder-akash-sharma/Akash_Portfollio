import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/data";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 sm:py-32 lg:py-36 px-4 sm:px-6 md:px-12 bg-[#0b1120]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
        >
          My Projects
        </motion.h2>


        {/* Project Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}

              whileHover={{
                y: -10
              }}

              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              p-4 sm:p-5 lg:p-6
              hover:border-blue-500
              transition
              h-full
              "
            >

              {/* Project Image */}

              <div
                className="
                h-36
                sm:h-40
                lg:h-44
                rounded-2xl
                bg-gradient-to-r
                from-blue-500
                to-purple-600
                flex
                items-center
                justify-center
                mb-6
                "
              >

                <span className="text-5xl">
                  💻
                </span>

              </div>


              {/* Title */}

              <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words leading-tight">
                {project.title}
              </h3>


              {/* Description */}

              <p className="text-gray-400 leading-6 sm:leading-7 mb-5 text-sm sm:text-base">
                {project.description}
              </p>


              {/* Technologies */}

              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                    px-3
                    py-1
                    text-sm
                    rounded-full
                    bg-blue-500/20
                    text-blue-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  bg-white/10
                  hover:bg-blue-600
                  transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>


                <button
                  className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-white/20
                  hover:bg-purple-600
                  transition
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </button>

              </div>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;