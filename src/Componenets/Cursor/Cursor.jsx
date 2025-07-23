import React, { useEffect, useState } from "react";
import "./Cursor.scss";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const HandleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Outside the HandleMouseMove function!
    window.addEventListener("mousemove", HandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", HandleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 8, y: position.y + 8 }}
      transition={{ type: "spring", stiffness: 900, damping : 18 }}
    ></motion.div>
  );
}

export default Cursor;
