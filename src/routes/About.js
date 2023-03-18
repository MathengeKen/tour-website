import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import AboutUs from "../components/AboutUs.js";

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
