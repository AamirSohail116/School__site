import React from "react";
import aboutAchievements from "../../../images/about achievements.svg";

import achievementsData from "../../../Data/achievementsData";
import "./achievement.css";

function Achievement() {
  return (
    <div className="about__achievements">
      <div className="container about__achievements-container">
        <div className="about__achievements-left">
          <img src={aboutAchievements} alt="" />
        </div>
        <div className="about__achievements-right">
          <h1>Achievements</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsa
            culpa dolorum ea magni veritatis numquam quidem! Doloremque eaque maiores
            eveniet unde facere ut voluptatibus tempore totam, ipsam atque cum!
          </p>

          <div className="achievements__cards">
            {achievementsData.map((achievement, i) => {
              return (
                <div className="achievement__card" key={i}>
                  <span className="achievement__icon">{achievement.icon}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
