import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="">
        <nav className="flex justify-between items-center border-2 p-3 ">
          <h1 className="text-3xl text-white font-bold">
            <Link to={"https://github.com/Ankit9179"}>Portfolio</Link>
          </h1>
          {toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineCloseCircle
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}
          <ul
            id="menus"
            className=" hidden md:flex gap-7 text-white cursor-pointer"
          >
            <li className="menu uppercase" onClick={() => navigate("/")}>
              home
            </li>
            <li className="menu uppercase" onClick={() => navigate("/about")}>
              about
            </li>
            <li className="menu uppercase" onClick={() => navigate("/skills")}>
              skills
            </li>
            <li className="menu uppercase" onClick={() => navigate("/contact")}>
              contact
            </li>
          </ul>
          {/* responsiv nav */}
          <ul
            className={`duration-500 md:hidden w-full z-10 h-screen text-white fixed bg-black top-[90px] 
           ${toggle ? `right-[-100%]` : `right-[0]`} `}
          >
            <li className="p-5">home</li>
            <li className="p-5">about</li>
            <li className="p-5">skills</li>
            <li className="p-5">contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
