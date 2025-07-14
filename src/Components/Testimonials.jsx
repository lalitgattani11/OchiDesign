import React from "react";

function Testimonials() {
  const testimonials = [
    {
      quote: "They transformed our pitch deck into a powerful story that helped us close investors faster than ever.",
      author: "John Doe",
      role: "Startup Founder",
      image: "/images/Profile1.avif",
    },
    {
      quote: "Working with them was seamless. Our presentation is now our strongest asset.",
      author: "Jane Smith",
      role: "Marketing Director",
      image: "/images/Profile3.avif",
    },
    {
      quote: "Their creative approach made our brand stand out in a crowded market.",
      author: "Alex Lee",
      role: "Brand Manager",
      image: "/images/Profile2.avif",
    },
    {
      quote: "We loved the clarity and impact they brought to our complex data presentation.",
      author: "Sarah Kim",
      role: "Data Scientist",
      image: "/images/Profile4.avif",
    },
  ];

  return (
    <section className="bg-[#004D43] text-[#F1F1F1] py-24 px-20 font-neue">
      <h2 className="text-[3.5vw] leading-tight font-bold mb-16 text-center">Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#0F3E36] rounded-2xl p-6 flex flex-col items-start text-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 w-[340px] h-[340px] mb-10"
          >
            {/* Accent border layer */}
            <div className="absolute inset-0 border border-[#CDEA68] opacity-20 rounded-2xl pointer-events-none"></div>

            <img
              src={item.image}
              alt={item.author}
              className="w-24 h-24 rounded-full object-cover mb-7 border-2 border-[#CDEA68]"
            />
            <p className="text-base mb-4 leading-relaxed line-clamp-4">
              "{item.quote}"
            </p>
            <div className="mt-auto">
              <p className="text-[#CDEA68] font-semibold">{item.author}</p>
              <p className="text-sm text-[#c5d6bd]">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
