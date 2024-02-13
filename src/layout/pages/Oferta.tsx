import Footer from "../Footer";
import Navbar from "../Navbar";
import Cases from "./Oferta/Cases";
import EasyBanner from "./Oferta/EasyBanner";
import TestMac from "./Oferta/TestMac";
import Usage from "./Oferta/Usage";

const Oferta = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <TestMac />
        <Usage />
        <EasyBanner />
        <Cases />
        <Footer />
      </div>
    </>
  );
};

export default Oferta;
