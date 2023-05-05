import React from "react";
import "./Header.css";
import Logo from "./img/fdsd.png";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Header = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  return (
    <header className="headercsss">
      <div>
        <img className="logogogog" src={Logo} alt="logo" />
      </div>
      <div className="listttt">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>how to buy</li>
          <li>tokenomic</li>
          <li>roadap</li>
        </ul>
      </div>
      <div className="buttonnn">
        <button className="buybutton"> buy now</button>
      </div>
    </header>
  );
};

export default Header;
