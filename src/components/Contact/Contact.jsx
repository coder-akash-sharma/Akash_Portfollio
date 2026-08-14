import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Contact() {

  return (

    <section
      id="contact"
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

          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16"
        >
          Contact Me
        </motion.h2>



        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">



          {/* Contact Information */}


          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
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

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Let's Connect 🚀
            </h3>


            <div className="space-y-4 sm:space-y-6">


              <div className="flex items-center gap-3 sm:gap-5 min-w-0">

                <FaEnvelope className="text-blue-400 text-2xl flex-shrink-0"/>

                <span className="break-words min-w-0 text-sm sm:text-base">
                  Your Email Here
                </span>

              </div>



              <div className="flex items-center gap-5 min-w-0">

                <FaMapMarkerAlt className="text-red-400 text-2xl flex-shrink-0"/>

                <span className="break-words min-w-0 text-sm sm:text-base">
                  Uttar Pradesh, India
                </span>

              </div>


              <a
                href="https://github.com/coder-akash-sharma"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 hover:text-blue-400 transition min-w-0"
              >

                <FaGithub className="text-2xl flex-shrink-0"/>

                <span className="break-words min-w-0 text-sm sm:text-base">GitHub</span>

              </a>



              <a
                href="https://www.linkedin.com/in/akash-sharma-1088a030b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 hover:text-blue-400 transition min-w-0"
              >

                <FaLinkedin className="text-2xl flex-shrink-0"/>

                <span className="break-words min-w-0 text-sm sm:text-base">LinkedIn</span>

              </a>


            </div>


          </motion.div>





          {/* Contact Form */}



          <motion.form

            initial={{
              opacity:0,
              x:50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
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
            space-y-4
            sm:space-y-5
            "

          >


            <input

              type="text"

              placeholder="Your Name"

              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              outline-none
              "

            />


            <input

              type="email"

              placeholder="Your Email"

              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              outline-none
              "

            />



            <textarea

              rows="5"

              placeholder="Your Message"

              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              outline-none
              "

            />


            <button

              type="submit"

              className="
              px-8
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition
              "

            >

              Send Message

            </button>


          </motion.form>



        </div>


      </div>


    </section>

  );
}


export default Contact;