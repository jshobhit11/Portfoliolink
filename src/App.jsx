import React from "react";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="/projects" element={<Project />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
    </div>
  );
};

export default App;
