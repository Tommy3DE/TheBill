import { Link } from "react-router-dom";
import finger from "../../../assets/icons/finger.png";
import main from "../../../assets/main.png";

const Hero = () => {
  return (
    <section className="mt-8 items-center mx-[8%] font-poppins">
      <div className="flex lg:flex-row flex-col-reverse lg:h-[700px]">
        {" "}
        <div className="flex flex-col lg:w-[60%] justify-center">
          <h1 className="lg:text-6xl text-5xl  mb-8  tracking-wider leading-loose font-black font-playFair lg:text-start text-center">
          Znajduj <span className="text-[#02BC7D]">faktury</span> na swojej <br/> skrzynce mailowej
automatycznie
          </h1>
          <h2 className="text-3xl font-playFair">
          Skup się na biznesie, <span className="font-bold">faktury</span> zostaw nam.
          </h2>
          <div className="flex lg:flex-row flex-col my-10 justify-between mx-1">
            <button className="bg-[#B4FFDB] border-2 rounded-full font-playFair text-black font-bold lg:text-3xl text-2xl py-2 px-6 hover:text-white hover:scale-105 flex flex-row ">
              <Link to='/funkcje'> SPRAWDŹ ONEBILL! </Link>
              <img src={finger} alt="finger" className="ml-5" />
            </button>
          </div>
          <h3 className="text-4xl font-playFair text-[#00D0A7] tracking-widest leading-loose text-justify">
            Twoje faktury w jednym miejscu
          </h3>
          <p className="text-2xl mt-5 lg:block hidden ">
            Z Aplikacją <span className="font-extrabold">OneBill</span> ,
            organizacja dokumentów nigdy nie była prostsza!
          </p>
        </div>
        <div className="lg:w-[40%] flex justify-center items-center">
          <img
            src={main}
            alt="main"
            className="h-[80%] max-w-full object-contain"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
