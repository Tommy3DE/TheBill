import React from "react";
import img1 from "../../../assets/delfina-pan-wJoB8D3hnzc-unsplash 1.png";
import img2 from "../../../assets/jonathan-borba-hl6uG9cHW5A-unsplash 1.png";
import img3 from "../../../assets/kristian-angelo-xyJZvUL4_TY-unsplash 1.png";
const PolishEnt = () => {
  return (
    <div className="mx-[8%] my-12">
      <p className="font-black text-end font-playFair text-3xl">
        Nasza oferta kierowana jest do  <br/>
        <span className="text-[#34D399] underline">
        Was - Polskich Przedsiębiorców
        </span>
      </p>
      <div className="flex justify-around -mt-14">
        <img src={img1} alt="pic1" className="h-[580px]" />
        <img src={img2} alt="pic2" className="mt-[10%] h-[600px] mx-14" />
        <img src={img3} alt="pic3" className="mt-[20%] h-[640px]"/>
      </div>
      <div className="font-playFair -mt-20">
        <h1 className="text-3xl font-black">To Wy tworzycie polską gospodarkę.</h1>
        <h3 className="text-xl">Wiedząc ile obowiązków spoczywa na waszych barkach, <br/> chcemy was wspomóc w organizacji waszej działalności. </h3>
      </div>
    </div>
  );
};

export default PolishEnt;
