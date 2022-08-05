import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, LinkedIn } from "@mui/icons-material";

import teamData from "../../../Data/teamData";
import "./Team.css";

function Team() {
  return (
    <div className="team">
      <h2>Meet our team</h2>
      <div className="container team__container">
        {teamData.map((tMember, i) => {
          return (
            <div className="team__member" key={i}>
              <div className="team__member-img">
                <img src={tMember.image} alt="" />
              </div>
              <div className="team__member-info">
                <h4>{tMember.name}</h4>
                <p>{tMember.title}</p>
              </div>
              <div className="team__member-socials">
                <Link to="https://instagram.com" target="_blank">
                  <Instagram />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <Twitter />
                </Link>
                <Link to="https://linkedin.com" target="_blank">
                  <LinkedIn />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
