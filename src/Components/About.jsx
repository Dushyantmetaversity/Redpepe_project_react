import React from "react";
import "./About.css";
import Borderimg from "./img/download.svg"
import Makememecoins from "./img/pepememe.gif"

const About = () => {
  return (

    <React.Fragment>

      <div className="_About" id="about">
        <div className="boarderimg">

        </div>

        <div className="Aboutcontainer">
          <div className="_aboutright" >
            <img src={Makememecoins} alt="Make merecoins...." />
          </div>
          <div className="_aboutleft">
            <span className="aboutheading">
              ABOUT
            </span>
            <span className="aboutdetailsone">
              Red Pepe is a cutting-edge web 3.0 platform that
              offers a thrilling casino and sports betting experience to its users.
            </span>
            <span className="aboutdetailstwo">
              The platform is designed to provide a secure, transparent, and decentralized environment
              for online gambling and sports betting, utilizing the latest blockchain technology.
            </span>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default About;
