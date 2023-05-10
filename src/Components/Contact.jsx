import React from "react";
import "./Contact.css"
import Logo from "./img/fdsd.png"

import telegram from "./img/telegram.png"
import doge from "./img/doge.png"
import twtttt from "./img/twtttt.png"

const Contact = () => {
  return (
    <React.Fragment>
      <div className="maincontainer-contact" id="contact">
        <div className="container-contact">
        </div>
        <div className="inner-container-contact">
          <div className="CONTACT">
            CONTACT
          </div>
          <div className="contact-logo">
            <img src={Logo} alt="RED PEPE" />
          </div>
          <div className="contact-links">
            <a href="https://t.me/redpepeclub" >

              <img src={telegram} alt="RED PEPE" />
            </a>
            <a href="https://twitter.com/redpepeclub" >

              <img src={twtttt} alt="RED PEPE" />
            </a>

            <a href="https://discord.gg/M4RvBCXtZc" >

              <img src={doge} alt="RED PEPE" />
            </a>

          </div>
          <div className="contact-details">
            <span className="dataa">

              Red Pepe is a cutting-edge web 3.0 platform that offers a thrilling
              casino and sports betting experience to its users. The platform is designed
              to provide a secure, transparent, and decentralized environment for online
              gambling and sports betting, utilizing the latest blockchain technology.

            </span>
            <span className="dataa">
              Red Pepe's casino offers a wide range of games, including classic
              favorites such as blackjack, poker, and roulette, as well as modern video slots
              and live dealer games. The platform ensures fair play through its use of provably fair
              algorithms, which allow players to verify the fairness of each game they play.
            </span>
          </div>
        </div>

      </div>

    </React.Fragment>
  )
};

export default Contact;
