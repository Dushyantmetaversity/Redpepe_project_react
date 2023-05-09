import React, { useState } from "react";
import "./Header.css";
import Logo from "./img/fdsd.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Turn as Hamburger } from 'hamburger-react'
import { Turn as Hamburger } from 'hamburger-react';
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  return (
    <div className="overlay">
      {isOpen ? <header className="headercsss">
        <div className="_burgermenu">
          <img className="logogogog" src={Logo} alt="logo" />

          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
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

        : <header className="headercsss">
          <div className="_burgermenu">
            <img className="logogogog" src={Logo} alt="logo" />

            <div>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
            </div>
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

      }
    </div>
  );
};

export default Header;
