import React from "react";
import "./Contact.css"
import Logo from "./img/fdsd.png"

import telegram from "./img/telegram.png"
import doge from "./img/doge.png"
import twtttt from "./img/twtttt.png"

const Contact = () => {
  return (
    <React.Fragment>
      <div className="maincontainer-contact"  id="contact">
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

              Redpepe coin has no association with Matt Furie or his
              creation Pepe the Frog. This token is simply paying homage to a
              meme we all love and recognize.
            </span>
            <span className="dataa">Redpepe is a meme coin with no
              intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely
              useless and for entertainment purposes only.
            </span>
          </div>
        </div>

      </div>

    </React.Fragment>
  )
};

export default Contact;
