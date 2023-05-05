import React from "react";
import About from "./About";
import Contact from "./Contact";
import Dollar from "./Dollar";
import HowToBuy from "./HowToBuy";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

const MainPage = () => {
  return (
    <React.Fragment>
      <Dollar />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Contact />
    </React.Fragment>
  );
};

export default MainPage;
