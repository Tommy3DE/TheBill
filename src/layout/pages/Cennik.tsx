import Navbar from "../Navbar";
import PricingIntro from "./Cennik/PricingIntro";
import PricingOptions from "./Cennik/PricingOptions";
import Footer from "../Footer";
import FreeTrial from "./Cennik/FreeTrial";
import CennikFAQ from "./Cennik/CennikFAQ";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";

const Cennik = () => {

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <FadeInWhenVisible>
        <PricingIntro/>
        <PricingOptions />
        <FreeTrial/>
        <CennikFAQ/>
        <Footer />
        </FadeInWhenVisible>
      </div>
    </>
  );
};

export default Cennik;
