import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);


      const sections = document.querySelectorAll("section");


      sections.forEach((section)=>{

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");


        if(
          window.scrollY >= top &&
          window.scrollY < top + height
        ){
          setActive(id);
        }

      });

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };


  }, []);




  const handleClick = () => {
    setOpen(false);
  };



  return (

    <nav
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300
      ${
        scrolled
        ?
        "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10"
        :
        "bg-transparent"
      }
      `}
    >


      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-8
        py-5
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
          text-3xl
          font-bold
          text-blue-400
          "
        >
          Akash.
        </a>




        {/* Desktop Menu */}

        <ul
          className="
          hidden
          md:flex
          gap-8
          "
        >


        {
          navItems.map((item)=>(

            <li key={item.id}>

              <a

                href={`#${item.id}`}

                className={`
                relative
                transition
                duration-300

                ${
                  active === item.id
                  ?
                  "text-blue-400"
                  :
                  "text-gray-300 hover:text-white"
                }

                `}

              >

                {item.name}



                {
                  active === item.id && (

                    <span
                      className="
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-[2px]
                      bg-blue-400
                      rounded-full
                      "
                    >

                    </span>

                  )
                }


              </a>

            </li>

          ))
        }


        </ul>





        {/* Mobile Button */}


        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-2xl
          text-white
          "

        >

          {
            open
            ?
            <FaTimes />
            :
            <FaBars />
          }


        </button>



      </div>





      {/* Mobile Menu */}


      {
        open && (

          <div
            className="
            md:hidden
            bg-[#050816]
            border-t
            border-white/10
            "
          >


            <ul
              className="
              flex
              flex-col
              gap-6
              px-8
              py-8
              "
            >


            {
              navItems.map((item)=>(

                <li key={item.id}>


                  <a

                    href={`#${item.id}`}

                    onClick={handleClick}

                    className={`
                    text-lg
                    ${
                      active === item.id
                      ?
                      "text-blue-400"
                      :
                      "text-gray-300"
                    }
                    `}

                  >

                    {item.name}

                  </a>


                </li>

              ))
            }


            </ul>


          </div>

        )
      }



    </nav>

  );
}


export default Navbar;