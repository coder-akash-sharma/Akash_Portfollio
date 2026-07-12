import { motion } from "framer-motion";


function Loader() {

  return (

    <motion.div

      initial={{
        opacity:1
      }}

      animate={{
        opacity:0
      }}

      transition={{
        duration:1.5,
        delay:1
      }}

      className="
      fixed
      inset-0
      bg-[#050816]
      flex
      items-center
      justify-center
      z-[999]
      "

    >


      <motion.h1

        initial={{
          scale:0.5
        }}

        animate={{
          scale:1
        }}

        transition={{
          duration:0.8
        }}

        className="
        text-5xl
        font-bold
        text-blue-400
        "
      >

        Akash.

      </motion.h1>


    </motion.div>

  );

}


export default Loader;