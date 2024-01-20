import React from "react";

import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        J.S.M.G
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/joselyn-moreta-8a5654265/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/JoselynnM" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=0046704676674&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024 J.S.M.G. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
