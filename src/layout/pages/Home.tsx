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
import SecurityInfo from "./Home/SecurityInfo";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px]">
        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
        <BasicInfo />
        </FadeInWhenVisible>
        <GmailIntegration />
        <SecurityInfo />
        <FadeInWhenVisible>
          <ThreeRecInfo />
        </FadeInWhenVisible>
        <AddBenefits />
        <ShortPricing />
        <PolishEnt />
        <FiveSteps />
        <FadeInWhenVisible>
          <FeedbackForm />
        </FadeInWhenVisible>
        <Footer />
      </div>
    </>
  );
};

export default Home;
