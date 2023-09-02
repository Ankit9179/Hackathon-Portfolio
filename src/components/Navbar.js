import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className=" min-h-screen bg-center bg-cover p-4 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30436.jpg?w=900&t=st=1693628859~exp=1693629459~hmac=89a5efd11b54d54de48a747da22a75871f748571615af8ba46ef15e1973baf1f')] ">
        <nav className="flex justify-between items-center border-2 p-3 ">
          <h1 className="text-3xl text-white font-bold">Portfolio</h1>
          {
            toggle ?
              < AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
              :
              < AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
          }
          <ul id="menus" className=" hidden md:flex gap-7 text-white cursor-pointer">
            <li className="menu">home</li>
            <li className="menu">about</li>
            <li className="menu">phone</li>
            <li className="menu">contact</li>
          </ul>
          {/* responsiv nav */}
          <ul className={`duration-500 md:hidden w-full h-screen text-white fixed bg-black top-[90px] 
           ${toggle ? `right-[-100%]` : `right-[0]`} `}>
            <li className="p-5">home</li>
            <li className="p-5">about</li>
            <li className="p-5">phone</li>
            <li className="p-5">contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
