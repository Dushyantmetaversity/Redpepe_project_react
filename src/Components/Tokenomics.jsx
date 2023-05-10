import React from "react";
import "./Tokenomics.css"
import Giiff from "./img/gif.gif"
import CEXListingssss from "./img/CEXListingssss.gif"
import ModalsGraph from './img/modalsandgraph.gif'

const Tokenomics = () => {


  // 
  return (
    <React.Fragment>
      <div className="_parent_tokenomics" id="tokenomics">
        <div className="boarderimgtokenomics">

        </div>


        <div className="container_tokenomics">
          <div className="TOKENOMICS">

            TOKENOMICS
          </div>
          <div className="maintokenomaics">
            <div className="_rightTokenSupply">
              <div className="TokenSupply">
                <span>
                  Token Supply:
                </span>
                <span>

                  10,000,000,000
                </span>
              </div>
              <div className="NoTaxesNoBullshit">
                <div >
                  <span className="Bullshit">
                    No Taxes, No Bullshit. It’s that simple.
                  </span>
                  <span className="renounced">
                    Redpepe is a meme coin tailored for betting platforms, providing
                    users with a straightforward payment option. With 93.1% of tokens
                    in the liquidity pool and LP tokens burnt, Redpepe ensures stability. The remaining 6.9% of
                    the supply is being held in a multi-sig wallet for future centralized exchange listings and liquidity pools.
                    Additionally, users who choose to pay with Redpepe may receive exclusive benefits, such as discounts or access
                    to special promotions, enhancing their betting experience.


                  </span>
                </div>

              </div>
            </div>
            <div className="_leftTokenSupply">
              <div className="uperCEXListings">

              </div>
              <div className="CEXListings">
                <img className="dmodal" src={ModalsGraph} alt="3dimg" width="700px" />

              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
};

export default Tokenomics;
