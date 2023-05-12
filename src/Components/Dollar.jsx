import React from "react";
import "./Dollar.css";
import uniswap from './img/Pancakeswap.png';
import iphone from './img/iphone.png'
import Redpepe from './img/Redpepe.png'
import Redwinepepe from './img/04.png'

import Btcex from './img/btcex-logo.png'
import Bingx from './img/Bingx-Logo.jpg'
import Coingenche from './img/coingenche.png'
import Coinmarketcap from './img/coinmarketcap.png'
import Dextools from './img/dextools.png'
import Gateio from './img/gate_io.png'
import Huobi from './img/huobi-token-ht-logo.png'
import Iback from './img/iback.png'
import Polonex from './img/polonex.png'
import Removebg from './img/removebg.png'
import Seeklogocom from './img/seeklogo_com.png'
import TWT from './img/TWT.png'
import Wixstatic from './img/wixstatic.png'

const Dollar = () => {
  // 


  // <a href="/" className="pill">
  //         <span>
  //           MEXC
  //         </span>

  //         <div className="_imgwrap">
  //           <img src={Wixstatic} alt="uniswap" />
  //         </div>

  //       </a>
  //        <a href="/" className="pill">
  //         <span>
  //           okx dex
  //         </span>

  //         <div className="_imgwrap">
  //           <img src={Removebg} alt="uniswap" />
  //         </div>

  //       </a>
  //        <a href="/" className="pill">
  //         <span>
  //           lbank
  //         </span>

  //         <div className="_imgwrap">
  //           <img src={Iback} alt="uniswap" />
  //         </div>

  //       </a>
  return (
    <React.Fragment>
      <div className="_dollar" id="dollar">
        <div className="container">
          <div className="container2">
            <div className="_parent">
              <div className="left">

                <div className="content">
                  <p className="heading">
                    <img style={{ width: "40%" }} src={Redpepe} alt="RED PEPE" />
                    <img className="redwineimg" src={Redwinepepe} alt="" />
                  </p>
                  <p className="text">
                    Join the next evolution of sports betting with our web3 platform,
                    where you can bet smarter, faster,
                    and more securely than ever before.
                  </p>
                  <ul className="sociallisting">
                    <li>
                      <a href="https://twitter.com/redpepeclub">
                        <img
                          src="https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twitter%20(2).png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/redpepeclub">
                        <img
                          src="https://static.wixstatic.com/media/1f3f2b_0078029a112449e5b8d712401bfbd5ac~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/telgrrgrgrgr.png"
                          alt=""
                        />
                      </a>
                    </li>
                    {/* 
                  <li>
                    <a href="/">
                      <img
                        src="https://static.wixstatic.com/media/1f3f2b_8dd371e91c534eba8bf5836ed468e899~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dextools%20(1).png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="https://static.wixstatic.com/media/1f3f2b_95d714edb8484668b50ec07fb8b4f394~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/etherscan.png"
                        alt=""
                      />
                    </a>
                  </li>*/}
                    <li>
                      <a href="https://bscscan.com/token/0xc9edaa7c41440f5446413b68983e6c0ac7af3cee">
                        <img style={{
                          backgroundColor: "white",
                          borderRadius: "44px"
                        }}
                          src="https://bscscan.com/images/brandassets/BscScan-logo-circle.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinksale.finance/launchpads?chain=BSC">
                        <img
                          src="https://www.pinkswap.finance/pinksale.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="_imgholder">
                  <img
                    className="Iphone"
                    src={iphone}
                    alt=""
                  />

                  <div className="Iframe_">

                    <iframe className="iphoneiframe" src="https://www.redpepe.live/" frameborder="1" >  </iframe>
                  </div>
                </div>

                <div className="buybtnnnnnnnnn">
                  <a style={{ textDecoration: "none" }} className="buybtnn" href="https://www.redpepe.live/">Click here for Red Pepe beta version</a>
                </div>
              </div>

            </div>
            <div className="_buttonholder">
              <a href="/" className="pill" data-title={
                "Soon"
              }>
                <span>
                  Pancakeswap
                </span>

                <div className="_imgwrap">
                  <img src={uniswap} alt="uniswap" />
                </div>

              </a>

              <a href="/" className="pill">
                <span>
                  gate.io
                </span>

                <div className="_imgwrap">
                  <img src={Gateio} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  huobi
                </span>

                <div className="_imgwrap">
                  <img src={Huobi} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  poloniex
                </span>

                <div className="_imgwrap">
                  <img src={Polonex} alt="uniswap" />
                </div>

              </a>


              <a href="/" className="pill">
                <span>
                  bingx
                </span>

                <div className="_imgwrap">
                  <img src={Bingx} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  trustwallet
                </span>

                <div className="_imgwrap">
                  <img src={TWT} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  digifinex
                </span>

                <div className="_imgwrap">
                  <img src={Seeklogocom} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  btcex
                </span>

                <div className="_imgwrap">
                  <img src={Btcex} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  lbank
                </span>

                <div className="_imgwrap">
                  <img src={Iback} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  dextools
                </span>

                <div className="_imgwrap">
                  <img src={Dextools} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  coinmarketcap
                </span>

                <div className="_imgwrap">
                  <img src={Coinmarketcap} alt="uniswap" />
                </div>

              </a>
              <a href="/" className="pill">
                <span>
                  coingecko
                </span>

                <div className="_imgwrap">
                  <img src={Coingenche} alt="uniswap" />
                </div>

              </a>
            </div>
          </div>
        </div>


      </div>
    </React.Fragment>
  );
};

export default Dollar;
