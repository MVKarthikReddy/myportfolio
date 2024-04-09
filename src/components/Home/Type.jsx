import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Creative Full Stack Developer",
              "Passionate Mobile App Developer",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 70,
          }} 
        ></Typewriter>  
        
      )
}

export default Type