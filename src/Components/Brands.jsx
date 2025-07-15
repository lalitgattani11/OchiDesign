export default function Brands() {
  return (
    <div className="w-full bg-zinc-200 py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className="text-center text-2xl md:text-4xl font-bold font-neue text-[black]"
        >
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-x-10 gap-y-12 sm:max-w-2xl sm:grid-cols-3 sm:gap-x-12 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {[
            { src: "/images/logo1.webp", alt: "Yahoo" },
            { src: "/images/logo2.png", alt: "Lexus" },
            { src: "/images/logo3.svg", alt: "Nestle" },
            { src: "/images/logo4.png", alt: "Workleap" },
            { src: "/images/logo5.png", alt: "TOYOTO" },
          ].map((logo, idx) => (
            <div
              key={idx}
              className="flex h-20 w-36 items-center justify-center"
            >
              <img
                alt={logo.alt}
                src={logo.src}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
