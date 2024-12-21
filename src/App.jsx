import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PageRouter from "./PageRouter";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  useEffect(() => {
    Aos.init();
    return () => Aos.refresh();
  }, []);

  return (
    <>
      <PageRouter />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
};

export default App;
