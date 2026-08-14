import { motion } from "framer-motion";
import profile from "../../assets/profile/profile1.jpg";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-28 sm:py-32 lg:py-36 px-4 sm:px-6 md:px-12 bg-[#0b1120]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[260px]">

              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/40 max-h-[332px] sm:max-h-[372px] lg:max-h-[312px]">
                <img
                  src={profile}
                  alt="Akash Sharma"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6">
              Hi, I'm Akash Sharma 👋
            </h3>

            <p className="text-gray-400 leading-7 sm:leading-8 text-base sm:text-lg">
              I am a passionate Computer Science Engineering student who enjoys
              building beautiful and scalable web applications. I love solving
              real-world problems using React, JavaScript, Java, SQL, and modern
              web technologies.
            </p>

            <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">

              <div className="flex items-start gap-3 sm:gap-4">
                <FaGraduationCap className="text-blue-400 text-xl sm:text-2xl mt-1" />
                <span className="break-words">B.Tech - Artificial Intelligence and Machine Learning</span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaLaptopCode className="text-purple-400 text-xl sm:text-2xl mt-1" />
                <span>Full Stack Web Developer</span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaMapMarkerAlt className="text-red-400 text-xl sm:text-2xl mt-1" />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </div>

            </div>

          </motion.div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-12 sm:mt-16 lg:mt-20 max-w-5xl mx-auto">

      {[
        { number: "5+", label: "Technologies" },
        { number: "2+", label: "Projects" },
        { number: "50+", label: "DSA Problems" },
        { number: "2+", label: "Certificates" },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-3 sm:p-4 text-center border border-white/10 hover:border-blue-500 transition min-h-[110px] flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 leading-none">
            {item.number}
          </h3>

          <p className="text-gray-400 mt-2 text-xs sm:text-sm lg:text-base">
            {item.label}
          </p>
        </div>
      ))}

    </div>


      </div>
    </section>
  );
}

export default About;