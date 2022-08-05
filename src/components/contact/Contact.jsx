import React from "react";
import {
  PhoneCallback,
  Email,
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  EditLocation,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import contactImg from "../../images/contact.svg";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container contact__container">
        <aside className="contact__aside">
          <div className="aside__img">
            <img src={contactImg} alt="" />
          </div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, autem
            in? Animi culpa asperiores voluptate laudantium voluptatum.
          </p>
          <ul className="contact__details">
            <li>
              <PhoneCallback />
              <h5>03433868253</h5>
            </li>
            <li>
              <Email />
              <h5>amirmehsood644@gmail.com</h5>
            </li>
            <li>
              <PhoneCallback />
              <h5>03433868253</h5>
            </li>
            <li>
              <EditLocation />
              <h5>Capital, Islamabad</h5>
            </li>
          </ul>
          <ul className="contact__socials">
            <li>
              <Link to="https://facebook.com">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to="https://instagram.com">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link to="https://linkedin.com">
                <LinkedIn />
              </Link>
            </li>
          </ul>
        </aside>
        <form className="contact__form">
          <div className="form__name">
            <input type="text" name="First Name" placeholder="First Name" required />
            <input type="text" name="Last Name" placeholder="Last Name" required />
          </div>
          <input
            type="email"
            name="Email Address"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="Message"
            rows="7"
            required
            placeholder="Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
