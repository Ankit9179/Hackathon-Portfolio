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
            <p className="mb-4 leading-normal">
              lorem5 lorem3 Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio lorem5 , delectus? ipsum dolor sit amet
              consectetur adipisicing lorem3 Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Optio lorem5 , delectus? ipsum dolor
              sit amet consectetur adipisicing lorem3 Lorem Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Optio lorem5 , delectus?
              ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat
              maiores nisi quod similique. Nulla. consectetur adipisicing lorem3
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio lorem5 , delectus? ipsum dolor sit amet consectetur
              adipisicing lorem3 Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio lorem5 , delectus? ipsum dolor sit amet
              consectetur adipisicing elit. Dicta quaerat maiores nisi quod
              similique. Nulla.
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
