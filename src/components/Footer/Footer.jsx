import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__1">
          <Link to="/" className="footer__logo">
            <h4>AMIR</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sed.
          </p>
        </div>
        <div className="footer__2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__3">
          <h4>Privacy</h4>
          <ul className="permalinks">
            <li>
              <Link to="/#">Privacy policy</Link>
            </li>
            <li>
              <Link to="/#">Terms and conditions</Link>
            </li>
            <li>
              <Link to="/#">Refund policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__4">
          <h4>Contact Us</h4>
          <div>
            <p>03433868253</p>
            <p>amirmehsood644@gmail.com</p>
          </div>
          <ul className="footer__socials">
            <li>
              <Link to="/#">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <LinkedIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy; AMIR</small>
      </div>
    </div>
  );
}

export default Footer;
