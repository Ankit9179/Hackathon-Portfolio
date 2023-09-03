import React from "react";
import TechSkillsList from "../skillsData";

const Skills = () => {
  console.log(TechSkillsList);
  return (
    <>
      <div className="text-white  mt-9 p-4 mb-9">
        <h1 className="text-center text-3xl font-bold font-mono mb-10">
          Tech Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
          {TechSkillsList.map((item) => {
            return (
              <div className="">
                <div className="border-2 text-center p-5 rounded-full cursor-pointer">
                  <span className="mr-5 inline-block text-4xl">
                    {<item.icon />}
                  </span>
                  <span className="ml-5 inline-block text-3xl">
                    {item.Name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
