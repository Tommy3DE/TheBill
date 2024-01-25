import Hero from "./Home/Hero";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UseCases from "./Home/UseCases";
import Opinions from "./Home/Opinions";
import FAQ from "./Home/FAQ";
import BasicInfo from "./Home/BasicInfo";
import ShortPricing from "./Home/ShortPricing";
import FeedbackForm from "./Home/FeedbackForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BasicInfo />
      <ShortPricing />
      <UseCases />
      <Opinions />
      <FeedbackForm />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
