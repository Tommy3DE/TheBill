import img1 from "../../../assets/delfina-pan-wJoB8D3hnzc-unsplash 1.png";
import img2 from "../../../assets/jonathan-borba-hl6uG9cHW5A-unsplash 1.png";
import img3 from "../../../assets/kristian-angelo-xyJZvUL4_TY-unsplash 1.png";
const PolishEnt = () => {
  return (
    <div className="mx-[8%] my-12">
      <p className="font-black lg:text-end text-center font-playFair text-3xl">
        Nasza oferta kierowana jest do  <br/>
        <span className="text-[#34D399] underline">
        Was - Polskich Przedsiębiorców
        </span>
      </p>
      <div className="flex lg:flex-row flex-col justify-around lg:-mt-14 mt-5">
        <img src={img1} alt="pic1" className="lg:h-[580px] lg:block hidden" />
        <img src={img2} alt="pic2" className="lg:mt-[10%] lg:h-[600px] lg:mx-14" />
        <img src={img3} alt="pic3" className="lg:mt-[20%] lg:h-[640px] lg:block hidden"/>
      </div>
      <div className="font-playFair lg:-mt-20 ">
        <h1 className="lg:text-3xl text-4xl font-black my-5">To Wy tworzycie polską gospodarkę.</h1>
        <h3 className="text-xl">Wiedząc ile obowiązków spoczywa na waszych barkach, <br/> chcemy was wspomóc w organizacji waszej działalności. </h3>
      </div>
    </div>
  );
};

export default PolishEnt;
