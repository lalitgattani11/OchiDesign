import LandingPage from "./LandingPage";
import Marquee from "./Marquee";
import About from "./About";
import AnimateEye from "./AnimateEye";
import Features from "./Features";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <LandingPage />
      <Marquee />
      <About />
      <AnimateEye />
      <Features />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default Home;
