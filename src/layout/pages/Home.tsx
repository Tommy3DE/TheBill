import Hero from "./Home/Hero";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BasicInfo from "./Home/BasicInfo";
import ShortPricing from "./Home/ShortPricing";
import FeedbackForm from "./Home/FeedbackForm";
import GmailIntegration from "./Home/GmailIntegration";
import ThreeRecInfo from "./Home/ThreeRecInfo";
import AddBenefits from "./Home/AddBenefits";
import PolishEnt from "./Home/PolishEnt";
import FiveSteps from "./Home/FiveSteps";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <Hero />
        <BasicInfo />
        <GmailIntegration />
        <ThreeRecInfo/>
        <AddBenefits/>
        <ShortPricing />
        <PolishEnt/>
        <FiveSteps />
        <FeedbackForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;
