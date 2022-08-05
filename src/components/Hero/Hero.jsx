import React from "react";
import { Link } from "react-router-dom";

import headerImg from "../../images/header.svg";
import "./Her.css";

function Hero() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>Grow your skills to advance your career path</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non rem
            maxime quasi laudantium inventore aliquid minus nobis incidunt quibusdam.
          </p>
          <Link to="/courses" className="btn btn-primary">
            Get Started
          </Link>
        </div>
        <div className="header__right">
          <div className="header__right-image">
            <img src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
