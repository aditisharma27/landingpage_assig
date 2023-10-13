import React from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">


          <div className="footerLogo">
            <a href="#" className="logo">
              <h4 className="flex">
                <SiYourtraveldottv className="icon" /> TECH
              </h4>
            </a>
          </div>
          <div className="socials flex">
          <ImFacebook className="icon" />
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
        </div>
        </div>
           <div className="footerLinks ">
          <span className="linkTitle">Information</span>
          <li><a href="/courses"> Home</a></li>
          <li><a href="/support"> Explore</a></li>
          <li><a href="/privacy"> Product</a></li>
          <li><a href="/about"> About</a></li>
          <span className="phone">+442210921</span>
          <span className="email">aditisharmaas2701@gmail.com</span>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li><a href="/courses"> Courses</a></li>
          <li><a href="/support"> Support</a></li>
          <li><a href="/privacy"> Privacy</a></li>
          <li><a href="/about"> About</a></li>
        </div>

      </div>
    </div>
  );
};

export default Footer;
