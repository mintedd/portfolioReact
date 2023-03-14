
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a
          href="https://github.com/mintedd"
          target="_blank"
          rel="noopener noreferrer"
        >
          < AiFillGithub />
        </a>

        <a
          href="https://www.instagram.com/narakim.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/nara--kim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>

      </p>
    </footer>
  );
}

export default Footer;