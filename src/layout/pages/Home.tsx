import React from "react";
import Hero from "./Hero";
import Information from "./Information";
import Footer from "../Footer";
import Navbar from "../Navbar";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <Footer />
    </>
  );
};

export default Home;
