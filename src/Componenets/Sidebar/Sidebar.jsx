import React, { useState } from 'react'
import './Sidebar.scss';
import ToggleBtn from './ToggleButtons/ToggleBtn';
import Links from './Links/Links';
import {motion} from 'framer-motion'

const variants = {
  open : {
    clipPath : "circle(1200px at 50px 50px)",
    transition : {
      type : 'spring',
      stiffness : 15,
    },
  },
  closed : {
    clipPath : "circle(30px at 50px 50px)",
    transition : {
      delay : 1.1,
      type : "spring",
      stiffness : 250,
      damping : 40,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className="bg-layer" variants={variants}>
        <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar
