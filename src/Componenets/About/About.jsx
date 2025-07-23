import React, { useEffect } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBootstrap, faCss3, faHtml5, faJsSquare, faReact, faJava} from "@fortawesome/free-brands-svg-icons";


function About() {
  const aboutVarient = {
    initial: {
      y: 500,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        when: "beforeChildren",
        duration: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const headingVarient = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const paraVarient = {
    initial: {
      x: 500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 2,
      },
    },
  };

  const cubeAnimation = {
    initial: {
      opacity: 1,
      y: 100,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="about"
      initial="initial"
      whileInView="animate"
      variants={aboutVarient}
      viewport={{once: true, amount: 0.2}}
    >
      <motion.div
        className="text-zone"
        variants={aboutVarient}
        initial="initial"
        whileInView="animate"
      >
        <motion.h1 variants={headingVarient}>About Me</motion.h1>

        <div>
          <motion.p variants={paraVarient}>
            My name is Karthik, and I'm from Kodungaiyur, Chennai. I graduated
            with a Bachelor's in Computer Applications from Thiruthangal Nadar
            College in 2021. After completing my graduation, I joined a BPO,
            where I worked for 1.6 years. However, during this time, I realized
            my passion lies in software development. As a result, I proactively
            decided to upskill myself by taking software courses related to my
            skills.
          </motion.p>
          <motion.p variants={paraVarient}>
            My greatest strength is my adaptability. I thrive in dynamic work
            environments and I enjoy collaborating with my team. I am always
            eager to learn new things, and I try to implement them ASAP.
          </motion.p>
          <motion.p variants={paraVarient}>
            I'm now eager to start my career as a Ful Stack Java Developer, where I
            can apply my skills to build user-friendly applications. I’m
            particularly excited about the opportunity to work at your
            Organization because of your commitment to innovation, and I believe
            I can bring a fresh perspective to the team, contributing to the
            development of scalable and efficient software solutions.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="stage-cubic-container"
        initial="initial"
        whileInView="animate"
        variants={cubeAnimation}
      >
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="red" />
          </div>

          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>

          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>

          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>

          <div className="face5">
            <FontAwesomeIcon icon={faBootstrap} color="purple" />
          </div>

          <div className="face6">
            <FontAwesomeIcon icon={faJava} color="#007396" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
