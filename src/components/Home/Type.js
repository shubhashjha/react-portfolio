import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",          
          "Open Source Contributor",
          "Web Application Development",
          "Window Application",
          "PWA Development",
          "Front End Developer",
          "Backend Developer",
          "Database Developer",
          "Cloud Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
