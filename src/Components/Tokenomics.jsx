import React from "react";
import "./Tokenomics.css"
import Giiff from "./img/gif.gif"
import CEXListingssss from "./img/CEXListingssss.gif"

const Tokenomics = () => {


  // 
  return (
    <React.Fragment>
      <div className="_parent_tokenomics">
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
                <span className="Bullshit">
                  No Taxes, No Bullshit. It’s that simple.
                </span>
                <span className="renounced">


                  93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt
                </span>
              </div>
            </div>
            <div className="_leftTokenSupply">
              <div className="uperCEXListings">

              </div>
              <div className="CEXListings">
                <img className="dmodal" src={Giiff} alt="3dimg" width="100%" />
                <div className="graphfortokenomics">
                  <img src={CEXListingssss} alt="Graph for TOKENOMICS" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
};

export default Tokenomics;
