import React, { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  //handle inputs
  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  //save user in database
  const handleSignUp = (e) => {
    alert("successfully submited");
  };
  return (
    <>
      <div className=" h-screen w-full flex justify-center pt-14">
        <div className=" w-[100%] md:w-[50%] h-[50vh] rounded-md ">
          <form
            onSubmit={handleSignUp}
            className="flex flex-col align-middle justify-center text-center gap-6 p-4 drop-shadow-2xl"
          >
            <h1 className="font-serif text-white text-4xl mb-10">Contact Us</h1>
            <input
              className="block p-3 rounded-full px-3 "
              onChange={handleInputs}
              required
              type="text"
              name="name"
              value={inputs.name}
              placeholder="Enter your name"
            />
            <input
              className="block p-3 rounded-full px-3"
              onChange={handleInputs}
              required
              type="email"
              name="email"
              value={inputs.email}
              placeholder="Enter your email"
            />
            <input
              className="block p-3 rounded-full px-3"
              onChange={handleInputs}
              required
              type="password"
              name="password"
              value={inputs.password}
              placeholder="Enter your password"
            />
            <button className="bg-yellow-400 rounded-md  uppercase text-clack w-[15%] mx-auto hover:border-2 p-4">
              Sin up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
