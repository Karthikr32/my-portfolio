import React from "react";
import "./App.scss";
import Navbar from "./Componenets/Navbar/Navbar";
import Hero from "./Componenets/Hero/Hero";
import Parallax from "./Componenets/Parallax/Parallax";
import Portfolio from "./Componenets/Portfolio/Portfolio";
import Contact from "./Componenets/Contact/Contact";
import Cursor from "./Componenets/Cursor/Cursor";
import About from "./Componenets/About/About";
import Skills from "./Componenets/Skills/Skills";


function App() {
  return (
    <div>
       <Cursor />
       
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

       <section>
        <Parallax type="about" />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">
        <Parallax type="projects" />
      </section>

     <Portfolio />

      <section id="Contact">
        <Contact />
      </section> 
    </div>
  );
}

export default App;
