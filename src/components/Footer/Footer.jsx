import React from "react";
import "./Footer.scss";
import { FaFacebookF as Facebook, FaInstagram as Instagram, FaTwitter as Twitter, FaLinkedin as Linkedin} from "react-icons/fa";
import { BsGithub as GitHub } from "react-icons/bs";
import { FiMail as Mail } from "react-icons/fi";
import ContentWrapper from "../ContentWrapper/ContentWrapper";


export default function Footer(){
  return (
    <footer className="footer">
      <ContentWrapper className="contentWrapper">
        Hy There! <br/><br/>
        <div className="infoText">
          "I'm a web wizard crafting websites and diving into the world of DevOps. With a passion for building new things and transforming ideas into reality." <br/>
           <strong>"Let's connect and make internet cooler place together!"</strong>
        </div>
        <div className="socialIcons">
          <span className="icon" onClick={()=> window.open("")}>
            <Mail />
          </span>
          <span className="icon"onClick={()=> window.open("")}>
            <Linkedin />
          </span>
          <span className="icon" onClick={()=> window.open("")}>
            <GitHub />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

