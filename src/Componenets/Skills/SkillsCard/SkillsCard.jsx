import React from "react";
import "./SkillsCard.scss";

function SkillsCard({ title, iconUrl, isActive, onClick }) {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>

      <span>{title}</span>
    </div>
  );
}

export default SkillsCard;
