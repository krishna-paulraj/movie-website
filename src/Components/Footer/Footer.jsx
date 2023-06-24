import React from "react";
import "./Footer.css";
import twiter from "./images/twitter.png";
import linkdin from "./images/linkedin.png";
import github from "./images/github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="info">
        <h1>- Get in Touch -</h1>
      </div>

      <div class="socials">
        <a href="https://twitter.com/KrishnaPaulraj4">
          <img class="social" src={twiter} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/krishna-paulraj-a81190238/">
          <img class="social" src={linkdin} alt="" />
        </a>
        <a href="https://github.com/krishna-paulraj">
          <img class="social" src={github} alt="" />
        </a>
      </div>
      <p class="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
    </div>
  );
};

export default Footer;
