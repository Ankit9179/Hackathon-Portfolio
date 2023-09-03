import React from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 text-white">
        <div className="">
          <div className=" text-center p-5 rounded-full cursor-pointer">
            <div className="m-9 ">
              <div className="flex gap-8 text-2xl mb-2 justify-center">
                <Link to={"https://www.linkedin.com/in/ankit-rahi-563752258/"}>
                  <AiOutlineLinkedin />
                </Link>
                <Link to={"https://github.com/Ankit9179"}>
                  <AiFillGithub />
                </Link>
                <Link to={"https://www.instagram.com/ak_vampire12/?next=%2F"}>
                  <AiOutlineInstagram />
                </Link>
                <Link
                  to={
                    "https://www.youtube.com/channel/UCK9s88prVP4BQoPuhXzjs6A"
                  }
                >
                  <AiFillYoutube />
                </Link>
              </div>
              <p>&copy; Copyright All right reserved.</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" text-center p-5 rounded-full cursor-pointe">
            <h1 className="text-1xl font-bold font-serif">Email </h1>
            <p className="mt-5">officialankit10189@gmail.com</p>

          </div>
        </div>
        <div className="">
          <div className=" text-center p-5 rounded-full cursor-pointer">
            <p className="text-1xl font-bold font-serif">Phone</p>
            <h1 className="mt-5">123456789</h1>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
