import Hero from "./Home/Hero";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UseCases from "./Home/UseCases";
import Opinions from "./Home/Opinions";
import FAQ from "./Home/FAQ";
import BasicInfo from "./Home/BasicInfo";
import ShortPricing from "./Home/ShortPricing";
import FeedbackForm from "./Home/FeedbackForm";
import GmailIntegration from "./Home/GmailIntegration";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-[1980px] ">
        <Hero />
        <BasicInfo />
        <GmailIntegration />
        <Opinions />
        <ShortPricing />

        <FeedbackForm />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Home;
