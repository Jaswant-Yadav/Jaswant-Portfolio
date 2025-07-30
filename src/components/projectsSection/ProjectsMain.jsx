import { motion } from "framer-motion";

import { fadeIn } from "../../framerMotion/variants";

import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
const ProjectsMain = () => {
  const projects = [
    {
      name: "Mini Venue Booking Dashboard",
      year: "A full-stack web application that allows venue owners to manage their venues and users to browse and book available venues.",
      align: "right",
      image: "images/library.webp",
      link: "https://front-end-seven-gilt.vercel.app/",
      github:"https://github.com/Jaswant-Yadav/Mini-Venue-Booking-Dashboard"
    },
    {
      name: "Finicial Statement Tracker",
      year: "The Financial Statements Tracker is a web-based application designed to help individuals track and manage their financial data.",
      align: "left",
      image: "images/website.jpg",
      link: "https://front-expense.vercel.app/",
      github:"https://github.com/Jaswant-Yadav/Financial-Tracker.git"
    },
    {
      name: "E‑Dashboard",
      year: "A lightweight E-Dashboard with full CRUD functionality to manage manual product list. Built with a clean, responsive UI for easy interaction and real-time updates.",
      align: "right",
      image: "images/website-img-1.jpg",
      link: "https://github.com/Jaswant-Yadav/E-Dashboard.git",
      github:"https://github.com/Jaswant-Yadav/E-Dashboard.git"
    },
  ];

  const smallProjects = [
    {
      name: "Todo-App",
      link: "https://todo-app-two-sigma-60.vercel.app/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Jaswant-Yadav/Todo-App.git"
    },
    {
      name: "Stone Paper Scissiors Game",
      link: "https://stonepaperscissiorsgame.vercel.app/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Jaswant-Yadav/Stone-Paper-Scissiors-Game.git"
    },
    {
      name: " Simple F1-inspired e-com",
      link: "https://f1-inspired-task.vercel.app/",
      technology: "HTML, CSS, JS, REACT",
      github:"https://github.com/Jaswant-Yadav/F1-inspired-Task.git"
    },
    {
      name: "Currency Convertor",
      link: "https://currency-convertor-beta-topaz.vercel.app/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Jaswant-Yadav/Currency-Convertor.git"
    },
    {
      name: "Image Search Engine",
      link: "https://imagesearchengine-orcin.vercel.app/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Jaswant-Yadav/Image-Search-Engine.git"
    },
    {
      name: "User Location",
      link: "https://user-location-sooty.vercel.app/",
      technology: "HTML, CSS , JS",
      github:"https://github.com/Jaswant-Yadav/User-Location.git"
    },
    {
      name: "Multiple Project",
      link : "https://github.com/Jaswant-Yadav",
      github : "https://github.com/Jaswant-Yadav",
    }
  ];
  const SmallProjectsSection = () => {
    return (
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-24"
      >
        <h2 className="text-4xl text-cyan mb-6 text-center">Small Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-cyan rounded-2xl p-5 bg-darkGrey hover:bg-cyan text-white hover:text-darkGrey shadow-lg hover:shadow-cyan transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-bold">{proj.name}</h3>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                    className="text-xl hover:text-black transition-colors"
                  >
                    <BsGithub />
                  </a>
                )}
              </div>
              <p className="text-sm opacity-80">{proj.technology}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-2 inline-block underline hover:text-orange"
              >
                <img src="https://img.icons8.com/?size=100&id=y90AvUi7gdGS&format=png&color=000000" alt="Live Server" 
                style={{height:'20px', width: '20px'}} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  const ProjectsText = () => {
    return (
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Projects</h2>
        <p className="text-lg text-center">
          I have worked on a variety of web development projects, ranging from
          responsive websites for small businesses to full-stack applications
          and complex front-end interfaces.
        </p>
      </div>
    );
  };



  const SingleProject = ({ name, year, align, image, link, github }) => {
    return (
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
          align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end sm:flex-col`}
      >
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
          <h2
            className={`text-xl font-thin text-white font-special sm:text-center ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            {year}
          </h2>
  
          <div
            className={`flex items-center gap-4 mt-2 text-cyan hover:text-orange transition-all duration-500 sm:justify-center ${
              align === "left" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              View <BsFillArrowUpRightCircleFill />
            </a>
  
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
                title="GitHub Repository"
              >
                <BsGithub />
              </a>
            )}
          </div>
        </div>
  
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
          <img src={image} alt="website image" className="w-full h-full" />
        </div>
      </motion.div>
    );
  };
  

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
      <SmallProjectsSection />

    </div>
  );
};

export default ProjectsMain;
