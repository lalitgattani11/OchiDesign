import React, { useEffect, useState } from "react";

function AnimateEye() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section data-scroll-section className="eye w-full h-screen overflow-hidden relative">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className='z-[-1] absolute top-0 left-0 w-full h-full bg-cover bg-center bg-[url("/images/BGImage.jpg")]'
      ></div>

      <div className="flex flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2].map((eye) => (
          <div
            key={eye}
            className="flex justify-center items-center w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100 relative"
          >
            <div className="relative w-2/3 h-2/3 rounded-full bg-[#212121]">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
            <p className="text-white absolute uppercase font-semibold text-xs sm:text-sm md:text-lg lg:text-xl">
              Play
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnimateEye;
