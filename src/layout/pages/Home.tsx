import Hero from "./Home/Hero";
import Information from "./Home/Information";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UseCases from "./Home/UseCases";
import Opinions from "./Home/Opinions";
import FAQ from "./Home/FAQ";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <UseCases/>
      <Opinions/>
      <FAQ/>
      <Footer />  
    </>
  );
};

export default Home;
