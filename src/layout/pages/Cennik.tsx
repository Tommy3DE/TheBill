import Navbar from "../Navbar";
import PricingIntro from "./Cennik/PricingIntro";
import { useState } from "react";
import PricingOptions from "./Cennik/PricingOptions";
import Footer from "../Footer";
import FreeTrial from "./Cennik/FreeTrial";
import CennikFAQ from "./Cennik/CennikFAQ";

const Cennik = () => {
  const [yearly, setYearly] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <PricingIntro setYearly={setYearly} yearly={yearly} />
        <PricingOptions yearly={yearly} />
        <FreeTrial/>
        <CennikFAQ/>
        <Footer />
      </div>
    </>
  );
};

export default Cennik;
