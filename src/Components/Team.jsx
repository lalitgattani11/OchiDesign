import React from "react";

const Team = () => {
  return (
    <section className="w-full bg-[#CDEA68] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#212121] mb-4 font-neue ">
            Our Awesome Team
          </h2>
          <p className="text-lg text-[#212121]/70 max-w-2xl mx-auto">
            We’re a close-knit team of creative minds and strategy experts who bring bold ideas to life.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <TeamCard
            name="Coriss Ambady"
            profession="Founder & CEO"
            imageSrc="/images/Founder.png"
          />
          <TeamCard
            name="Dany Bailey"
            profession="Lead Designer"
            imageSrc="/images/LeadDesigner.png"
          />
          <TeamCard
            name="Alena"
            profession="Presentation Designer"
            imageSrc="/images/PreDesigner.png"
          />
          <TeamCard
            name="Lexi"
            profession="Communication Consultant"
            imageSrc="/images/Team4 .png"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="group relative w-[260px] rounded-2xl overflow-hidden shadow-xl bg-[#004D43] transition-transform duration-500 hover:scale-105">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-80 object-cover transition duration-500"
      />
      <div className="absolute bottom-0 w-full bg-[#212121] bg-opacity-95 text-center py-4">
        <h3 className="text-lg font-bold text-[#F1F1F1]">{name}</h3>
        <p className="text-sm text-[#CDEA68]">{profession}</p>
      </div>
    </div>
  );
};
