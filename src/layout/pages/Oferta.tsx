import FadeInWhenVisible from "../../components/FadeInWhenVisible";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BiuroRachOffer from "./Oferta/BiuroRachOffer";
import EasyBanner from "./Oferta/EasyBanner";
import JobsExamples from "./Oferta/JobsExamples";
import Movie from "./Oferta/Movie";
import OfferBenefits from "./Oferta/OfferBenefits";
import SSLImage from "./Oferta/SSLImage";
import TestMac from "./Oferta/TestMac";
import Usage from "./Oferta/Usage";

const Oferta = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <FadeInWhenVisible>
        <TestMac />
        <Usage />
        <EasyBanner />
        <OfferBenefits/>
        <SSLImage/>
        <JobsExamples />
        <Movie/>
        <BiuroRachOffer/>
        <Footer />
        </FadeInWhenVisible>
      </div>
    </>
  );
};

export default Oferta;
