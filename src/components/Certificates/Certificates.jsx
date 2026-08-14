import { motion } from "framer-motion";
import { FaCertificate, FaEye } from "react-icons/fa";

function Certificates() {

  const certificates = [
    {
      title: "Data Structures & Algorithms with C",
      issuer: "Certificate",
      description:
        "Completed certification focused on Data Structures, Algorithms and problem solving using C programming.",
      image: null,
    },

    {
      title: "Python Programming",
      issuer: "Certificate",
      description:
        "Completed Python certification covering programming fundamentals and practical implementation.",
      image: null,
    },
  ];


  return (
    <section
      id="certificates"
      className="py-28 sm:py-32 lg:py-36 px-4 sm:px-6 md:px-12 bg-[#0b1120]"
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

          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
        >

          Certificates

        </motion.h2>



        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-10">


          {
            certificates.map((certificate,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.6,
                  delay:index*0.2
                }}

                whileHover={{
                  y:-10
                }}

                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-5
                sm:p-6
                lg:p-8
                "
              >


                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                  "
                >
                  <FaCertificate />
                </div>



                <h3 className="text-xl sm:text-2xl font-bold break-words">
                  {certificate.title}
                </h3>



                <p className="text-blue-400 mt-2">
                  {certificate.issuer}
                </p>



                <p className="text-gray-400 mt-4 leading-6 sm:leading-7 text-sm sm:text-base">
                  {certificate.description}
                </p>



                <button
                  className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  "
                >

                  <FaEye />

                  View Certificate

                </button>


              </motion.div>


            ))
          }


        </div>


      </div>


    </section>
  );
}


export default Certificates;