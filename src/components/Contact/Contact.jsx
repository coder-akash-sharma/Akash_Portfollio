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
      className="py-28 px-8 md:px-12 bg-[#0b1120]"
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
          Contact Me
        </motion.h2>



        <div className="grid lg:grid-cols-2 gap-12">



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
            p-8
            "

          >

            <h3 className="text-3xl font-bold mb-8">
              Let's Connect 🚀
            </h3>


            <div className="space-y-6">


              <div className="flex items-center gap-5">

                <FaEnvelope className="text-blue-400 text-2xl"/>

                <span>
                  Your Email Here
                </span>

              </div>



              <div className="flex items-center gap-5">

                <FaMapMarkerAlt className="text-red-400 text-2xl"/>

                <span>
                  Uttar Pradesh, India
                </span>

              </div>


              <a
                href="https://github.com/akash-sh53"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 hover:text-blue-400 transition"
              >

                <FaGithub className="text-2xl"/>

                GitHub

              </a>



              <a
                href="https://www.linkedin.com/in/akash-sharma-1088a030b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 hover:text-blue-400 transition"
              >

                <FaLinkedin className="text-2xl"/>

                LinkedIn

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
            p-8
            space-y-5
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