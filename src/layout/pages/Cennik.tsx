import Navbar from "../Navbar";
import PricingIntro from "./Cennik/PricingIntro";
import { useState } from "react";
import PricingOptions from "./Cennik/PricingOptions";
import Footer from "../Footer";
import FreeTrial from "./Cennik/FreeTrial";
import CennikFAQ from "./Cennik/CennikFAQ";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";

const Cennik = () => {
  const [yearly, setYearly] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <FadeInWhenVisible>
        <PricingIntro setYearly={setYearly} yearly={yearly} />
        <PricingOptions yearly={yearly} />
        <FreeTrial/>
        <CennikFAQ/>
        <Footer />
        </FadeInWhenVisible>
      </div>
    </>
  );
};

export default Cennik;
