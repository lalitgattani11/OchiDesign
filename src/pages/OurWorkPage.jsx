import Features from "../Components/Features";

function OurWorkPage() {
  return (
    <div className="w-full bg-[#F1F1F1] pt-20">
      <div className="bg-[#CDEA68] w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-neue leading-tight">
          Purpose driven,
          <span className="block lg:inline">strategy-led presentations</span>
          <br className="hidden lg:block" />
          that people care about.
        </p>
      </div>

      <Features />
    </div>
  );
}

export default OurWorkPage;
