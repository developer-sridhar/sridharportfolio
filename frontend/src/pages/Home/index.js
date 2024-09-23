import React, { useRef } from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
import Email from "./Email.js";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  // Use ref to reference the About section
  const aboutRef = useRef(null);

  // Function to scroll to the About section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary">
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          {/* Pass scrollToAbout function as prop to Intro */}
          <Intro scrollToAbout={scrollToAbout} />
          
          {/* Attach the aboutRef to the About component */}
          <div ref={aboutRef}>
            <About />
          </div>
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Email />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
};

export default Home;
