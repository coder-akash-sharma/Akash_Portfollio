import { useEffect, useState } from "react";


function ScrollProgress() {

  const [scroll, setScroll] = useState(0);


  useEffect(()=>{

    const handleScroll = ()=>{

      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


      const progress =
        (scrollTop / height) * 100;


      setScroll(progress);

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


  },[]);



  return (

    <div
      className="
      fixed
      top-0
      left-0
      w-full
      h-1
      z-[1000]
      bg-transparent
      "
    >

      <div

        className="
        h-full
        bg-blue-500
        "

        style={{
          width:`${scroll}%`
        }}

      ></div>


    </div>

  );

}


export default ScrollProgress;