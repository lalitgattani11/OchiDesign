import Testimonials from "../Components/Testimonials";

function ServicesPage() {
  return (
    <div className="w-full bg-[#F1F1F1]">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-founders tracking-normal leading-tight font-semibold px-6 sm:px-10 md:px-20 uppercase pt-32">
        Services
      </h1>
      <div className="mt-10 md:mt-16 border-zinc-300 border-t-[1px]" />

      <div>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-neue px-6 sm:px-10 md:px-20 py-6 md:py-10 leading-tight">
          We create
          <span className="border-b-[2px] border-black">eye-catching</span> and
          <span className="border-b-[2px] border-black">eye-opening</span>
          <br className="hidden md:block" /> presentations that educate, inspire
          and influence <br className="hidden md:block" />
          action.
        </p>
      </div>

      <div className="mt-10 md:mt-16 border-zinc-300 border-t-[1px]" />

      <div className="font-neue w-full flex flex-col md:flex-row justify-center gap-10 md:gap-[20vw] mt-10 pb-20 px-6 md:px-10">
        <div className="w-full md:w-[40%]">
          <h1 className="text-xl md:text-2xl underline">
            Audience is the hero
          </h1>
          <br />
          <p className="text-base md:text-xl leading-relaxed">
            Who is it for? What do they want? Why does it matter to them? We
            need to know your audience well enough to deliver a personalized
            presentation that they truly care about.
          </p>
        </div>
        <div className="w-full md:w-[40%]">
          <h1 className="text-xl md:text-2xl underline">
            Context makes a difference
          </h1>
          <br />
          <p className="text-base md:text-xl leading-relaxed">
            When do you present? Online or live? At a sales meeting, at a
            conference, or just sending a cold email? We knit the context
            together to decide the style of the presentation.
          </p>
        </div>
      </div>
      <div className="mt-10 md:mt-16 border-zinc-300 border-t-[1px]" />

      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-6 md:px-20 mt-10 pb-20 font-neue">
        <div className="w-full md:w-[45%] border border-zinc-300 p-6 rounded-2xl bg-white hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-bold mb-4 underline">
            Strategic, Goal-Oriented Process
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Our method includes discovery (defining project goals, audience, and
            context), storytelling (clear narrative and tone), visual design
            (emotional and engaging slides), feedback rounds, and final delivery
            of polished decks.
          </p>
        </div>

        <div className="w-full md:w-[45%] border border-zinc-300 p-6 rounded-2xl bg-white hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-bold mb-4 underline">
            Versatile Presentation Types
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            We create decks for fundraising, sales, company overviews, internal
            communications (templates, onboarding, policies), and special
            updates — tailored for every presentation scenario.
          </p>
        </div>

        <div className="w-full md:w-[45%] border border-zinc-300 p-6 rounded-2xl bg-white hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-bold mb-4 underline">
            Additional Services
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            We also provide ongoing agency support, branding and visual
            identity, corporate training materials, and expert deck redesign or
            review services to strengthen your presentation strategy.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default ServicesPage;
