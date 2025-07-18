import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative w-full bg-[#F1F1F1] pt-2 text-[#212121]">
      <div className="textstructure mt-32 sm:mt-40 md:mt-44 lg:mt-52 px-5 sm:px-10 md:px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                    className="w-[8vw] h-[5.2vw] sm:w-[8vw] sm:h-[5.2vw] md:w-[8vw] md:h-[5.2vw] rounded-md flex items-center justify-center overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src="/images/OchiBG.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase font-founders text-[12vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] xl:text-[6vw] leading-[12vw] sm:leading-[10vw] md:leading-[7.5vw] lg:leading-[6.5vw] xl:leading-[6vw] tracking-wide font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-24 flex flex-col lg:flex-row justify-between items-center gap-4 py-5 px-5 sm:px-10 md:px-20 pb-20">
        <div className="flex flex-col sm:flex-col md:flex-row items-center gap-4 text-center lg:text-left">
          <p className="text-base sm:text-lg font-medium leading-snug flex items-center">
            For public and private companies
            <span className="hidden md:inline">&nbsp; &nbsp;||</span>
          </p>
          <p className="text-base sm:text-lg font-medium leading-snug">
            From the first pitch to IPO
          </p>
        </div>
        <div className="flex justify-center w-full md:w-full lg:w-auto">
          <Link
            to="/contact"
            className="px-5 py-2 border-[1px] flex items-center justify-center gap-3 border-zinc-400 text-base sm:text-lg font-medium uppercase rounded-full hover:bg-zinc-900 hover:text-white transition-all duration-300"
          >
            start the project
            <GoArrowUpRight className="text-xl sm:text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
