import React from "react";
import homepng from '../images/home.png'

const Home = () => {
    return <>
        <div className="flex border-2 p-12 w-full justify-center">
            <div className="border-2 text-white text-start  flex-col my-auto w-[50%]">
                <h1 className="text-5xl font-bold mb-4">This is <br /> my hackathon portfolio website </h1>
                <p className="mb-4">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, delectus? ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat maiores nisi quod similique. Nulla.</p>
                <div className="flex gap-5">
                    <button className="bg-yellow-400 p-2 text-1xl rounded-2xl px-5 cursor-pointer text-black font-bold">linkedin</button>
                    <p className="cursor-pointer">Download cv</p>
                </div>
            </div>
            <div className="right border-2 w-[50">
                <img className="w-[500px]" src={homepng} alt="png" />
            </div>
        </div>
    </>;
};

export default Home;
