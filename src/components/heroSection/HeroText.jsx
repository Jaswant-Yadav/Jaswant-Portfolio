import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Jaswant  <br className="sm:hidden md:block" />
           Yadav
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Passionate web developer seeking opportunities  <br /> to build impactful applications. 
      </motion.p>
       <motion.a
        href="/images/Jaswant.pdf" 
        target="blank"
        download="Jaswant_Yadav_CV.pdf" 
        className="px-6 py-3 mt-4 rounded-lg bg-orange text-white font-semibold text-lg transition-all duration-300 ease-in-out transform hover:bg-darkOrange hover:scale-105"
         style={{ width: "170px" }}
      >
        Download CV
      </motion.a>
    </div>
  );
};

export default HeroText;
