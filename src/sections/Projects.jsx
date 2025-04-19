import React from "react";
import { myProjects } from "../constants";

const Projects = () => {
  const currentProject = myProjects[0];
  return (
    <section className="sm:px-10 px-5 my-20" id="projects">
      <p className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
        My Work
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-zinc-950">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              className="w-10 h-10 shadow-sm"
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-5 text-slate-400 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
                {currentProject.tags.map((tag) => (
                    <div
                    key={tag.id}
                    className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900"
                    >
                    <img src={tag.path} alt={tag.name} className="w-5 h-5" />
                    <p className="text-sm text-slate-400">{tag.name}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
