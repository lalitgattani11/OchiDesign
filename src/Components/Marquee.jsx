import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-10 md:py-15 lg:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] font-founders overflow-hidden relative">
      <div className="border-t-2 border-b-2 border-zinc-400 whitespace-nowrap flex">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          <span className="text-[30vw] sm:text-[25vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] text-white font-bold uppercase leading-none">
            we are ochi&nbsp; we are ochi&nbsp; we are ochi&nbsp; we are ochi&nbsp;
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
