import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../../assets/profile/profile1.jpg";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#050816]">
      <div className="max-w-7xl mx-auto mt-8 grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-blue-400 text-base sm:text-lg mb-3 tracking-[0.12em] uppercase">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight break-words">Akash Sharma</h1>

          <div className="mt-4 min-h-[52px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "SQL Learner",
                2000,
                "Java Programmer",
                2000,
                "AI & ML Student",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-blue-400"
            />
          </div>

          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto md:mx-0">
            Full Stack Developer passionate about building modern web applications using React, Java, JavaScript and exploring AI technologies.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 mt-8">
            <a href="#" className="flex items-center justify-center gap-3 px-5 sm:px-7 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300 w-full sm:w-auto">
              <FaDownload />
              Download Resume
            </a>

            <a href="#contact" className="px-5 sm:px-7 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300 w-full sm:w-auto text-center">
              Contact Me
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 sm:gap-6 mt-8">
            <a href="https://github.com/coder-akash-sharma" target="_blank" rel="noreferrer" className="text-2xl sm:text-3xl text-gray-300 hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/akash-sharma-1088a030b" target="_blank" rel="noreferrer" className="text-2xl sm:text-3xl text-gray-300 hover:text-blue-400 transition">
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
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-pulse blur-xl opacity-40" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050816]">
                <img
                  src={profile}
                  alt="Akash Sharma"
                  className="w-full h-full object-cover object-top transition-all duration-600 hover:scale-110"
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
