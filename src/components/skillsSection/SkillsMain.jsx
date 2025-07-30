import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaTools,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "ExpressJS", icon: SiExpress },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NextJS", icon: RiNextjsFill },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Postman", icon: FaTools },
];


const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-6 transition-all duration-500 custom-skill">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 flex-wrap max-w-[1200px] mx-auto">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={index}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 small-grid">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
      <p className="text-lg text-center text-white">
        I not only work with these technologies but excel in using them with best
        practices to deliver high-quality results. I have been working with all
        these skills to build my portfolio projects.
      </p>
    </div>
  );
};


const SkillsMain = () => {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .custom-skill {
            transform: scale(0.9);
          }
          .small-grid {
            gap: 8px;
            grid-template-columns: repeat(2, 1fr);
            padding: 0 10px;
          }
        }
      `}</style>

      <div id="skills">
        <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <SkillsText />
          </motion.div>

          {/* Desktop view */}
          <div className="bottom-[50px] absolute left-[42%] -translate-x-[40%] hidden lg:block">
            <AllSkills />
          </div>

          {/* Mobile / Tablet view */}
          <div className="block lg:hidden">
            <AllSkillsSM />
          </div>
        </div>

       
      </div>
    </>
  );
};

export default SkillsMain;
