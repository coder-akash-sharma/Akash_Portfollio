import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../../assets/profile/profile1.jpg";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-24 px-10 md:px-16 bg-[#050816]">
      <div className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-xl mb-4">Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Akash Sharma</h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "SQL Learner",
              2000,
              "Java Programmer",
              2000,
              "AI & Technology Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl mt-4 font-semibold text-blue-400"
          />

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
            Full Stack Developer passionate about building modern web applications using React, Java, JavaScript and exploring AI technologies.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">
            <a href="#" className="flex items-center gap-3 px-7 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">
              <FaDownload />
              Download Resume
            </a>

            <a href="#contact" className="px-7 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://github.com/coder-akash-sharma" target="_blank" rel="noreferrer" className="text-3xl text-gray-300 hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/coder-akash-sharma" target="_blank" rel="noreferrer" className="text-3xl text-gray-300 hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-pulse blur-xl opacity-40" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050816]">
                <img
                  src={profile}
                  alt="Akash Sharma"
                  className="w-half h-half object-cover object-top transition-all duration-600 hover:scale-130"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
