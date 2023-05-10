import React from 'react'
import "./Howtobut.css"
import CreateaWallet from "./img/CreateaWallet .png"
import Bnb from "./img/bnbn.png"
import Pancakeswap from "./img/Pancakeswap.png"
import SwitchBNBfor from "./img/SWITCH.png"
import SecondImg from './img/04.png'

const HowToBuy = () => {
  return (
    <React.Fragment>

      <div className="HowToBuy" id="HowToBuy">
        <div className='boarderimgHowtobuy'>


        </div>
        <div className='containerhowtoby'>
          <div className='_headcontainer'>
            How  To   Buy
          </div>

          <div className='_midcontainer'>
            <div className='_content' >
              <div className="imgcontain">
                <img className='' src={CreateaWallet} alt="Create a Wallet" />
              </div>
              <div className='_text'>
                <span className='heading_'>Create a Wallet</span>
                <span className='content_'>Download metamask or your wallet of
                  choice from the app store or google play store for free.
                  Desktop users, download the google chrome extension.
                </span>
              </div>
            </div>
            <div className='_content'>
              <div className="imgcontain">
                <img className='' src={Bnb} alt="Get Some BNB" />
              </div>
              <div className='_text'>
                <span className='heading_'>Get Some BNB</span>
                <span className='content_'>Have BNB in your wallet to switch to $RPEPE. If you don’t have any BNB,
                  you can buy directly on metamask,
                  transfer from another wallet, or buy on another exchange and send it to your wallet.

                </span>
              </div>
            </div>

            <div className='_content'>
              <div className='imgcontain'>
                <img className='' src={Pancakeswap} alt="Go to Pancakeswap" />
              </div>
              <div className='_text'>
                <span className='heading_'>Go to Pancakeswap

                </span>
                <span className='content_'>Connect to Pancakeswap. Go to Pancakeswap.finance in google chrome or on
                  the browser inside your Metamask app. Connect your wallet. Paste the $RPEPE token address into Pancakeswap,
                  select RedPepe, and confirm. When Metamask prompts you for a wallet signature, sign.

                </span>
              </div>
            </div>
            <div className='_content'>
              <div className='imgcontain'>
                <img className='' src={SwitchBNBfor} alt="Switch BNB for REDPEPE" />
              </div>
              <div className='_text'>
                <span className='heading_'>Switch BNB for REDPEPE</span>
                <span className='content_'>switch BNB for $RPEPE. We have ZERO taxes so you don’t need to
                  worry about buying with a specific slippage,
                  although you may need to use slippage during times of market volatility.

                </span>
              </div>
            </div>
          </div>

          <div className='_downcontainer'>

            <div className='iframcss'>



              <iframe title="Embedded Content" width="58%" frameBorder="0" height="400px" allow="fullscreen"
                src="https://pancakeswap.finance/swap">
              </iframe>
            </div>

            <div className='SecondImglogo'>
              <img
                className='SecondImggg'
                src={SecondImg}
                alt=""
              />
            </div>

          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default HowToBuy