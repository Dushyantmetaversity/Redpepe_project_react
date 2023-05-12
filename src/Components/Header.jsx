import React, { useState } from "react";
import "./Header.css";
import Logo from "./img/fdsd.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Turn as Hamburger } from 'hamburger-react'
import { Spin as Hamburger } from 'hamburger-react'
const Header = ({ isOpen, setOpen }) => {

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  console.log(isOpen, "isOpen")
  const handlemenuclose = (vl) => {
    if (vl === "about") {

      const elem = document.getElementById("about");
      elem.scrollIntoView({
        behaviour: "smooth"
      })
    } else if (vl === "dollar") {
      const elem = document.getElementById("dollar");
      elem.scrollIntoView({
        behaviour: "smooth"
      })
    } else if (vl === "HowToBuy") {
      const elem = document.getElementById("HowToBuy");
      elem.scrollIntoView({
        behaviour: "smooth"
      })
    }
    else if (vl === "tokenomics") {
      const elem = document.getElementById("tokenomics");
      elem.scrollIntoView({
        behaviour: "smooth"
      })
    }
    else if (vl === "roadmap") {
      const elem = document.getElementById("roadmap");
      elem.scrollIntoView({
        behaviour: "smooth"
      })
    }

    // if (isOpen === true) {
    //   setOpen(false)

    // } else {
    //   setOpen(true)

    // }
  }
  const handlemenuMobole = (vl) => {
    if (vl === "about") {

      const elem = document.getElementById("about");
      elem.scrollIntoView()
      setOpen(false)

    } else if (vl === "dollar") {
      const elem = document.getElementById("dollar");
      elem.scrollIntoView()
      setOpen(false)

    } else if (vl === "HowToBuy") {
      const elem = document.getElementById("HowToBuy");
      elem.scrollIntoView()
      setOpen(false)

    }
    else if (vl === "tokenomics") {
      const elem = document.getElementById("tokenomics");
      elem.scrollIntoView()
      setOpen(false)

    }
    else if (vl === "roadmap") {
      const elem = document.getElementById("roadmap");
      elem.scrollIntoView()
      setOpen(false)

    }


  }


  return (
    <header className="headercsss">
      <div className="_burgermenu">
        <div>
          <img className="logogogog" src={Logo} alt="logo" />
        </div>
        <div>
          <div className="burger-button">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          </div>
        </div>
      </div>
      {
        isOpen ?
          <div className="overlay">
            <div className="mobile-menu">
              <ul>
                <li onClick={() => handlemenuMobole("dollar")} >Home</li>
                <li onClick={() => handlemenuMobole("about")} >About</li>
                <li onClick={() => handlemenuMobole("HowToBuy")} >How to buy</li>
                <li onClick={() => handlemenuMobole("tokenomics")} >Tokenomic</li>
                <li onClick={() => handlemenuMobole("roadmap")} >Roadmap</li>
              </ul>
            </div>
          </div>
          : ""
      }

      <div className="listttt">
        <ul>
          <li onClick={() => handlemenuclose("dollar")} >Home</li>
          <li onClick={() => handlemenuclose("about")} >About</li>
          <li onClick={() => handlemenuclose("HowToBuy")} >How to buy</li>
          <li onClick={() => handlemenuclose("tokenomics")} >Tokenomic</li>
          <li onClick={() => handlemenuclose("roadmap")} >Roadmap</li>


        </ul>
      </div>
      <div className="buttonnn">
        <a style={{ padding: "12px" }} fref="https://www.redpepe.live/" className="buybutton"> Buy now</a>
      </div>
    </header>



  );
};

export default Header;
