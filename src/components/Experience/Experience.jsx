import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Experience() {

  const timeline = [
    {
      icon: <FaGraduationCap />,
      title: "B.Tech Artificial Intelligence & Machine Learning",
      company: "Currently Pursuing",
      year: "2026- Present",
      description:
        "Building strong foundations in Data Structures, Algorithms, Web Development, Database Management and Software Engineering."
    },

    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development Journey",
      company: "Self Learning",
      year: "2025 - Present",
      description:
        "Developing modern web applications using React, JavaScript, Tailwind CSS, Node.js and databases."
    },

    {
      icon: <FaRocket />,
      title: "Future Goal",
      company: "Software Engineer",
      year: "Upcoming",
      description:
        "Looking forward to internship opportunities and contributing to real-world software projects."
    }
  ];


  return (
    <section
      id="experience"
      className="py-28 px-8 md:px-12 bg-[#050816]"
    >

      <div className="max-w-5xl mx-auto">


        <motion.h2

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          className="text-5xl font-bold text-center mb-16"
        >

          Experience & Education

        </motion.h2>



        <div className="relative">


          {/* Line */}

          <div
            className="
            absolute
            left-6
            top-0
            h-full
            w-[2px]
            bg-blue-500/40
            "
          ></div>



          <div className="space-y-12">


          {
            timeline.map((item,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  x:-50
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                transition={{
                  duration:0.6,
                  delay:index*0.2
                }}

                className="
                relative
                flex
                gap-8
                "
              >


                {/* Icon */}

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  text-xl
                  z-10
                  "
                >
                  {item.icon}
                </div>



                {/* Content */}

                <div
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  flex-1
                  "
                >

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>


                  <p className="text-blue-400 mt-2">
                    {item.company}
                  </p>


                  <p className="text-gray-400 text-sm mt-1">
                    {item.year}
                  </p>


                  <p className="text-gray-400 mt-4 leading-7">
                    {item.description}
                  </p>


                </div>


              </motion.div>


            ))
          }


          </div>


        </div>


      </div>


    </section>
  );
}


export default Experience;