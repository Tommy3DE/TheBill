import Navbar from "../Navbar";
import PricingIntro from "./Cennik/PricingIntro";
import { useState } from "react";
import PricingOptions from "./Cennik/PricingOptions";

const Cennik = () => {
  const [yearly, setYearly] = useState<boolean>(false)

  return (
    <>
      <Navbar />
      <PricingIntro setYearly={setYearly} yearly={yearly}/>
      <PricingOptions yearly={yearly}/>
    </>
  );
};

export default Cennik;
