import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Certificate from "./components/Certificate";


const PageRouter = () => {
  useEffect(() => {
    Aos.init();
    return () => Aos.refresh(); // Clean up AOS on unmount
  }, []);

  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div>Sorry, this page does not exist! <a href=""></a> </div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default PageRouter;
