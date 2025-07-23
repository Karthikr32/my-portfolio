import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links() {
  const items = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => {
        return (
          <motion.a
            href={`#${item}`}
            key={index}
            variants={itemVariants}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
}

export default Links;
