import React, { useState } from "react";
import "./Skills.scss";
import { SKILLS } from "../../Utils/data";
import SkillsCard from "./SkillsCard/SkillsCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const titleVariants = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <motion.section
      className="skills-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h5 variants={titleVariants}>Technical Proficiency</motion.h5>

      <motion.div className="skills-content" variants={containerVariants}>
        <motion.div className="skills">
          {SKILLS.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectedSkill(item);
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-info"
          layout
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Skills;
