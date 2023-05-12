import React from "react";
import "./Roadmap.css"
import SecondImg from './img/04.png'
import Susus from './img/susus.png'


const Roadmap = () => {
  return (
    <React.Fragment>
      <div className="mainconatiner" id="roadmap">
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
                <sapn> Phase 1: Community Establishment</sapn>
                <sapn>Phase 2: Testnet Launch</sapn>
                <sapn>Phase 3: Betting Platform Live</sapn>
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
                  Creation of a REDPEPE ideology
                </li>
                <li>
                  website creation and launch
                </li>
                <li>
                  RedPepe release
                </li>
                <li>
                  Marketing capaign
                </li>
                <li>
                  Consulting and advisor
                </li>
                <li>
                  Army of REDPEPE
                </li>
                <li>
                  Betting platform Beta Release
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
                  Huge Marketing Campaign
                </li>
                <li>
                  DEX Launch
                </li>
                <li>
                  CoinGecko and CoinMarketCap Campaign
                </li>
                <li>
                  2000 holders
                </li>
                <li>
                  Partnerships with influencers
                </li>
                <li>
                  Billboard Advertisement in front of SpaceX office
                </li>
                <li>
                  Betting Platform Testnet Lounch
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
                  Available Betting and Gambling Platform
                </li>
                <li>
                  Merchandising for community
                </li>
                <li>
                  Tier 2 CEX Listings
                </li>
                <li>
                  Working on P2E game
                </li>
                <li>
                  10 Million MarketCap
                </li>
                <li>
                  Ads campaign with Crypto Ambassadors
                </li>
                <li>
                  NFT Marketplace release
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
