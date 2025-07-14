function AboutPage() {
  return (
    <div className="w-full bg-[#F1F1F1]">
      {/* Top Heading */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-founders tracking-normal leading-tight font-semibold px-6 sm:px-10 md:px-20 uppercase pt-32 sm:pt-36 md:pt-40">
        <h1>We are</h1>
        <h1>OCHI design</h1>
      </div>

      <div className="border-b-[1px] border-zinc-300 mt-16 md:mt-20 lg:mt-24"></div>

      {/* Big tagline */}
      <div className="px-6 sm:px-10 md:px-20 py-8 sm:py-12 md:py-14 flex justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-neue leading-tight tracking-tight max-w-5xl text-center">
          We save businesses from ugly and <br /> ineffective presentations.
        </p>
      </div>

      {/* About text */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 lg:gap-20 mt-10 sm:mt-16 md:mt-20 font-neue px-6 sm:px-10 md:px-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          We are OCHI design:
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          The team of designers, storytellers, and passionate collaborators who
          work together to create industry-shifting presentations that win
          people's hearts and minds.
          <br />
          <br />
          We strive to become one of the most recognizable & influential
          presentation agencies of our time.
        </p>
      </div>

      <div className="border-b-[1px] border-zinc-300 mt-16 md:mt-20 lg:mt-24"></div>

      {/* Team image */}
      <div className="pb-20 px-6 sm:px-10 md:px-20">
        <p className="font-neue text-3xl sm:text-4xl md:text-5xl py-5">
          Our Team:
        </p>
        <img
          className="object-cover w-full max-w-7xl mx-auto rounded-2xl mt-6 sm:mt-10 shadow-xl"
          src="/images/TeamImg.jpg"
          alt="Team"
        />
      </div>
    </div>
  );
}

export default AboutPage;
