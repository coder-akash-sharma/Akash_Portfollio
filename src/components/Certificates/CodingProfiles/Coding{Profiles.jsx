import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";


function CodingProfiles() {

  const profiles = [
    {
      title: "GitHub",
      username: "akash-sh53",
      link: "https://github.com/akash-sh53",
      icon: <FaGithub />,
    },

    {
      title: "LinkedIn",
      username: "Akash Sharma",
      link: "https://www.linkedin.com/in/akash-sharma-1088a030b",
      icon: <FaLinkedin />,
    },

    {
      title: "LeetCode",
      username: "Coming Soon",
      link: "#",
      icon: <FaCode />,
    },
  ];


  return (

    <section
      id="profiles"
      className="py-24 px-8 bg-[#050816]"
    >

      <div className="max-w-7xl mx-auto">


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
          Coding Profiles
        </motion.h2>



        <div className="grid md:grid-cols-3 gap-8">


        {
          profiles.map((profile,index)=>(

            <motion.a

              key={index}

              href={profile.link}

              target="_blank"

              rel="noreferrer"

              whileHover={{
                y:-10
              }}

              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              hover:border-blue-500
              transition
              "

            >

              <div
                className="
                text-5xl
                text-blue-400
                flex
                justify-center
                mb-5
                "
              >
                {profile.icon}
              </div>


              <h3 className="text-2xl font-bold">
                {profile.title}
              </h3>


              <p className="text-gray-400 mt-3">
                {profile.username}
              </p>


            </motion.a>

          ))
        }


        </div>


      </div>


    </section>

  );
}


export default CodingProfiles;