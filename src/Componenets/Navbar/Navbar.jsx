import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Karthik's Portfolio
        </motion.span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/karthik2k" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="font5" icon={faLinkedin} />
          </a>
          <a href="https://github.com/Karthikr32" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon className="font5" icon={faGithub} />
          </a>
          <a href="/Karthik_resume.pdf" download="Karthik_Resume.pdf">
            <button>Resume <FontAwesomeIcon icon={faDownload} /></button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
