import React from "react";
import { myProjects } from "../constants";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex)=>{
      if (direction === "prev") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      }
      else{
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    })
  };
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
                  className="w-10 h-10 rounded-md p-2 bg-neutral-800 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer text-slate-400"
            >
              <p>Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="h-3 w-3"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("prev")}
            >
              <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
            </button>
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("next")}
            >
              <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// 3:15:0
export default Projects;
