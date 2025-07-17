import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div className="w-full py-16 px-5 sm:px-10 md:px-16 lg:px-20 bg-[#CDEA68] text-[#212121] font-neue">
      <h1 className="text-[7vw] sm:text-[5vw] md:text-[3.5vw] leading-tight font-neue tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{" "}
        <span className="underline">raise funds, sell products, explain complex ideas</span>
        , and &nbsp;
        <span className="underline">hire great people</span>.
      </h1>

      <div className="flex flex-col lg:flex-row border-t border-[#6e7f31] pt-10 mt-16 gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl">Our approach:</h1>

          <Link
            to="/about"
            className="group flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5 uppercase bg-zinc-800 mt-6 text-white rounded-full w-fit hover:bg-black hover:font-semibold transition-colors duration-500 ease-in-out"
          >
            Read More
            <div className="flex justify-center items-center relative w-8 h-8 flex-shrink-0">
              <div
                className="rounded-full bg-zinc-100 flex items-center justify-center transition-all duration-500 ease-in-out 
                w-2.5 h-2.5 group-hover:w-8 group-hover:h-8"
              >
                <GoArrowUpRight className="text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/images/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
