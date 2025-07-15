import LandingPage from "./LandingPage";
import Marquee from "./Marquee";
import About from "./About";
import AnimateEye from "./AnimateEye";
import Features from "./Features";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Brands from "./Brands";

function Home() {
  return (
    <div>
      <LandingPage />
      <Marquee />
      <About />
      <Features />
      <Brands />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
