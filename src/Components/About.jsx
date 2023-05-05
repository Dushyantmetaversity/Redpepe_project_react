import React from "react";
import "./About.css";
import Borderimg from "./img/download.svg"
import Makememecoins from "./img/makememecoins.webp"

const About = () => {
  return (

    <React.Fragment>

      <div className="_About">
        <div className="boarderimg">

        </div>

        <div className="Aboutcontainer">
          <div className="_aboutright" style={{
            width: "56%"
          }}>
            <img src={Makememecoins} alt="Make merecoins...." />
          </div>
          <div className="_aboutleft">
            <span className="aboutheading">
              ABOUT
            </span>
            <span className="aboutdetailsone">
              RedPepe is tired of watching everyone play hot potato with the endless derivative
              ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day.
              It’s time for the most recognizable meme in the world to take his
              reign as king of the memes.
            </span>
            <span className="aboutdetailstwo">
              RedPepe is here to make memecoins great again. Launched stealth with no presale, zero taxes,
              LP burnt and contract renounced, $RPEPE is a coin for the people,
              forever.
              Fueled by pure memetic power, let $RPEPE show you the way.
            </span>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default About;
