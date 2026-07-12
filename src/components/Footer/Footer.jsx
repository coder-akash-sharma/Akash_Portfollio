import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


function Footer() {

  const links = [
    {
      name:"Home",
      id:"home"
    },
    {
      name:"About",
      id:"about"
    },
    {
      name:"Projects",
      id:"projects"
    },
    {
      name:"Contact",
      id:"contact"
    },
  ];


  return (

    <footer
      className="
      py-12
      px-8
      bg-[#050816]
      border-t
      border-white/10
      "
    >

      <div className="max-w-7xl mx-auto">


        <div className="grid md:grid-cols-3 gap-10">


          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              Akash.
            </h2>

            <p className="text-gray-400 mt-4">
              Computer Science Engineering Student
              building modern web applications.
            </p>

          </div>



          {/* Navigation */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>


            <div className="space-y-3">


            {
              links.map((link)=>(

                <a

                  key={link.id}

                  href={`#${link.id}`}

                  className="
                  block
                  text-gray-400
                  hover:text-blue-400
                  transition
                  "

                >

                  {link.name}

                </a>

              ))
            }


            </div>

          </div>





          {/* Social */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Follow Me
            </h3>


            <div className="flex gap-5">


              <a

                href="https://github.com/akash-sh53"

                target="_blank"

                rel="noreferrer"

                className="
                text-3xl
                hover:text-blue-400
                transition
                "

              >

                <FaGithub />

              </a>




              <a

                href="https://www.linkedin.com/in/akash-sharma-1088a030b"

                target="_blank"

                rel="noreferrer"

                className="
                text-3xl
                hover:text-blue-400
                transition
                "

              >

                <FaLinkedin />

              </a>


            </div>


          </div>


        </div>




        <div
          className="
          text-center
          text-gray-500
          mt-12
          pt-6
          border-t
          border-white/10
          "
        >

          © {new Date().getFullYear()} Akash Sharma.
          All Rights Reserved.

        </div>


      </div>


    </footer>

  );
}


export default Footer;