import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ServicesPage from "./pages/ServicesPage";
import OurWorkPage from "./pages/OurWorkPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
