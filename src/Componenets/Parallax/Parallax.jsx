import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax(props) {
  const { type } = props;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "135%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yMountains = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132,rgb(90, 90, 116))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "What I Do?" : "What I Did?"}
      </motion.h1>

      <motion.div className="stars" style={{ x: yStars }}></motion.div>

      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage: `url(${
            type === "about" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>

      <motion.div className="mountains" style={{ y: yMountains }}></motion.div>
    </div>
  );
}

export default Parallax;
