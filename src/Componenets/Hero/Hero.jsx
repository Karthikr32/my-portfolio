import React, { Suspense, lazy, useEffect, useState } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { Atom } from "react-loading-indicators";

// Lazy load the component
const ComputerModelContainer = lazy(() => import("../Computer3D/ComputerModelContainer"));


const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 25,
    transition: {
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const sliderVarient = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-750%",
    transition: {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

function Hero() {
  const [inView, setInView] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const Observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if(entry.isIntersecting) {
        setInView(true);
        Observer.disconnect();
      }
    }, {threshold : 0.1});

    const HeroImg = document.querySelector('.hero-img');
    if (HeroImg) {
      Observer.observe(HeroImg);
    } 

    return () => Observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && !modelLoaded) {
      const timer = setTimeout(() => {
        setModelLoaded(true); // Set a delay before triggering model load
      }, 900); // Adjust delay as needed
      return () => clearTimeout(timer);
    }
  }, [inView, modelLoaded]);


  return (
    <div className="hero-section">
      <div className="wrapper">
        <motion.div
          className="hero-text"
          initial="initial"
          animate="animate"
          variants={textVarient}
        >
          <motion.h2 variants={textVarient}>
            Karthik
          </motion.h2>
          <motion.h1 variants={textVarient}>
            Web Developer & UI designer
          </motion.h1>

          <motion.div variants={textVarient}> 
            <motion.button variants={textVarient}>
              <a href="#Projects">See the Latest Works</a>
            </motion.button>
            
            <motion.button id="contact-btn" variants={textVarient}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>

          <motion.img
            src="/scroll.png"
            alt=""
            animate="scrollButton"  
            variants={textVarient}
          />
        </motion.div>
      </div>

      {/* Sliding text behind */}
      <motion.div
        className="bg-sliding-text"
        initial="initial"
        animate="animate"
        variants={sliderVarient}
      >
        Developer Designer Creater Motivator
      </motion.div>

      <div className="hero-img">
        { inView && modelLoaded && (
          <Suspense fallback={<div className='loader-div'><Atom size="large" color={["#cd32cd", "#cd8032"]} /></div>}>
             <ComputerModelContainer />
          </Suspense>       
        ) }
      </div>
    </div>
  );
}

export default Hero;
