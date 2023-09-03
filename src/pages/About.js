import React from "react";
import aboutpng from "../images/about.png";

const About = () => {
  return (
    <div>
      <>
        <div className="block md:flex  p-12 w-full justify-center">
          <div className="right  w-[50">
            <img className="w-[500px]" src={aboutpng} alt="png" />
          </div>
          <div className="w-[100%] md: text-white text-center  flex-col my-auto">
            <h1 className="text-5xl font-bold mb-4">About me</h1>
            <p className="mb-4 leading-loose tracking-wide">
              Hello everyone, my name is ankit i don't have any type of
              technical degree because i have done my bachelor's in B.sc
              (Mathematics). but i know very well about web development.nowadays
              i'm learning MERN stack from youtube.if i talk about my skills, so
              i have knowledge about these fields html , css , Javascript React
              js library , Bootstrap framework for frontend , i use Node js and
              MongoDB database for creating server .
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
