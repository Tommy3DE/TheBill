import Hero from "./Home/Hero";
import Footer from "../Footer";
import Navbar from "../Navbar";
import FAQ from "./Home/FAQ";
import BasicInfo from "./Home/BasicInfo";
import ShortPricing from "./Home/ShortPricing";
import FeedbackForm from "./Home/FeedbackForm";
import GmailIntegration from "./Home/GmailIntegration";
import ThreeRecInfo from "./Home/ThreeRecInfo";
import AddBenefits from "./Home/AddBenefits";

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
        <FeedbackForm />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Home;
