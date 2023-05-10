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
                <div>
                  <span className="Bullshit">
                    No Taxes, No Bullshit. It’s that simple.
                  </span>
                  <span className="renounced">
                    93.1% of the tokens were sent to the liquidity pool,
                    LP tokens were burnt, and contract is renounced. The remaining 6.9% of the
                    supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings,
                    bridges, and liquidity pools. This wallet is easily trackable with the ENS name “pepecexwallet.eth”


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
