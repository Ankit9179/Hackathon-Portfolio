import React from "react";
import homepng from "../images/home.png";
import { Link } from "react-router-dom";
import Resume from "../images/resume.pdf";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="block md:flex  p-12 w-full justify-center">
        <div className="w-[100%] md:w-[50%] text-white text-start  flex-col my-auto ">
          <h1 className="text-4xl text-white font-bold mb-4">This is My</h1>
          <h1 className="text-2xl text-red-500 font-bold mb-4">
            <Typewriter
              options={{
                strings: ["hackathon portfolio website !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-4  tracking-wide">
            Hello everyone, i'm ankit today i built a website. in this website i
            used react js and tailwind css.
          </p>
          <div className="flex gap-5">
            <button className="bg-yellow-400 p-2 text-1xl rounded-2xl px-5 cursor-pointer text-black font-bold">
              <Link to={"https://www.linkedin.com/in/ankit-rahi-563752258/"}>
                linkedin
              </Link>
            </button>
            <a
              className="cursor-pointer"
              href={Resume}
              download={"Ankit resume.pdf"}
            >
              Download cv
            </a>
          </div>
        </div>
        <div className="right  w-[50">
          <img className="w-[500px]" src={homepng} alt="png" />
        </div>
      </div>
    </>
  );
};

export default Home;
