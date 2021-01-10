import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="scroll">
      <Router>
        <Navbar />
      </Router>
      <Main />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
