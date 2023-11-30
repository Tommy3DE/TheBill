import Navbar from "../Navbar";
import PricingIntro from "./Cennik/PricingIntro";
import { useState } from "react";
import PricingOptions from "./Cennik/PricingOptions";
import PresentationMovie from "./Cennik/PresentationMovie";
import Footer from "../Footer";

const Cennik = () => {
  const [yearly, setYearly] = useState<boolean>(false)

  return (
    <>
      <Navbar />
      <PricingIntro setYearly={setYearly} yearly={yearly}/>
      <PricingOptions yearly={yearly}/>
      <PresentationMovie />
      <Footer />
    </>
  );
};

export default Cennik;
