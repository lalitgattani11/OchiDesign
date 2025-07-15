import { motion, useAnimation } from "framer-motion";
import React from "react";

function Features() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 font-neue bg-[#ebebeb]">
      <div className="w-full px-5 md:px-24 border-b border-zinc-500 pb-10 md:pb-20">
        <h1 className="text-4xl md:text-7xl tracking-tight pb-6 md:pb-10">
          Featured projects
        </h1>
      </div>

      <div className="wholecard">
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-9 rounded-2xl mt-16 md:mt-24 px-5 md:px-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1
              className="absolute flex flex-col items-center text-center overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
              z-[9] uppercase text-[#CDEA68] 
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
              leading-none font-black tracking-tight px-2 max-w-[90%] break-words"
            >
              <div className="flex overflow-hidden">
                {"Salience".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <div className="flex overflow-hidden">
                {"Labs".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: (index + "Salience".length) * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </h1>

            <div className="card w-full h-full rounded-xl">
              <motion.img
                whileHover={{ scale: 0.9 }}
                transition={{ ease: "circInOut", duration: 0.4 }}
                className="w-full h-full object-cover rounded-xl"
                src="/images/Image1.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1
              className="absolute flex flex-col items-center text-center overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
              z-[9] uppercase text-[#CDEA68] 
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
              leading-none font-black tracking-tight px-2 max-w-[90%] break-words"
            >
              <div className="flex overflow-hidden">
                {"Cardboard".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <div className="flex overflow-hidden">
                {"Spaceship".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: (index + "Cardboard".length) * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                whileHover={{ scale: 0.9 }}
                transition={{ ease: "circInOut", duration: 0.4 }}
                className="w-full h-full object-cover rounded-xl"
                src="/images/Image2.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="wholecard">
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-9 rounded-2xl mt-16 md:mt-24 px-5 md:px-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1
              className="absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
              z-[9] uppercase text-[#CDEA68] 
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
              leading-none font-black tracking-tight px-2 max-w-[90%] break-words"
            >
              {"Fyde".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl">
              <motion.img
                whileHover={{ scale: 0.9 }}
                transition={{ ease: "circInOut", duration: 0.4 }}
                className="w-full h-full object-cover rounded-xl"
                src="/images/Fyde.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[70vh]"
          >
            <h1
              className="absolute flex overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
              z-[9] uppercase text-[#CDEA68] 
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
              leading-none font-black tracking-tight px-2 max-w-[90%] break-words"
            >
              {"Vise".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                whileHover={{ scale: 0.9 }}
                transition={{ ease: "circInOut", duration: 0.4 }}
                className="w-full h-full object-cover rounded-xl"
                src="/images/Vise.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
