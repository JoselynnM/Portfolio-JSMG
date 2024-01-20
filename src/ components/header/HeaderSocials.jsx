import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
