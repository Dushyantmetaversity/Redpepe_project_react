import React from "react";
import "./Roadmap.css"
import SecondImg from './img/04.png'
import Susus from './img/susus.png'


const Roadmap = () => {
  return (
    <React.Fragment>
      <div className="mainconatiner">
        <div className="roadmapheaderline">

        </div>
        <div className="first_container">
          <div className="first_main_container">

            <div className="first_left">
              <img src={Susus} alt="character" />


            </div>
            <div className="first_mid">
              <div className="first-mid-upper">ROAD MAP</div>
              <div className="first-mid-lower">
                <sapn> Phase 1: Meme</sapn>
                <sapn>Phase 2: Vibe and HODL</sapn>
                <sapn>Phase 3: Meme Takeover</sapn>
              </div>
            </div>
            <div className="first-right">
              <img src={SecondImg} alt="character" />
            </div>
          </div>
        </div>


        <div className="second_container">
          <sapn className="alljokes">
            All jokes aside, here is a rough sketch of $RPEPE path ahead. We dont wan’t
            to give everything away on day 1, Expect surprises along the way ;)


          </sapn>
        </div>



        <div className="third_container">
          <div className="third-left">
            <div className="innercontainer">

              <sapn>
                Phase 1
              </sapn>
              <ul>
                <li>
                  Launch
                </li>
                <li>
                  CoinGecko/Coinmark etcap Listings
                </li>
                <li>
                  1,000+ Holders
                </li>
                <li>
                  Get $RPEPE Trending on twitter with our memetic power
                </li>
              </ul>
            </div>
          </div>


          <div className="third-left">
            <div className="innercontainer">

              <sapn>
                Phase 2
              </sapn>
              <ul>
                <li>
                  Community Partnerships Redpepe Times digital newsletter
                </li>
                <li>
                  Formation of token gated discord group, Redpepe Palace, for holders, more details tba
                </li>
                <li>
                  CEX Listings 10,000+holders
                </li>

              </ul>
            </div>
          </div>
          <div className="third-left">
            <div className="innercontainer">

              <sapn>
                Phase 3
              </sapn>
              <ul>
                <li>
                  Redpepe merch
                </li>
                <li>
                Redpepe Academy
                </li>
                <li>
                Redpepe Tools
                </li>
                <li>
                  T1 Exchange Listings 100,000+ holders
                </li>
                <li>
                  Meme Takeover
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  )
};

export default Roadmap;
