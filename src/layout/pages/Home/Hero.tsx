import { Link } from "react-router-dom";
import finger from "../../../assets/icons/finger.png";
import main from "../../../assets/main.png";

const Hero = () => {
  return (
    <section className="mt-8 items-center mx-[8%] font-poppins">
      <div className="flex lg:flex-row flex-col-reverse lg:h-[700px]">
        {" "}
        <div className="flex flex-col lg:w-[60%] justify-center">
          <h1 className="lg:text-6xl text-5xl  mb-8 tracking-widest leading-10 font-black font-playFair lg:text-start text-center">
            Aplikacja do obsługi faktur w{" "}
            <span className="text-green-600">Twojej firmie.</span>
          </h1>
          <div className="flex lg:flex-row flex-col my-14 justify-between mx-1">
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
      <div className="text-2xl 2xl:-mt-24 text-justify font-poppins">
        W OneBill rozumiemy wyzwania, przed jakimi stoją mikroprzedsiębiorcy.
        Nasza innowacyjna aplikacja została tak zaprojektowana, aby uprościć i
        zautomatyzować proces zarządzania dokumentacją kosztową w Twojej firmie,
        oszczędzając Ci czas i eliminując stres związany z papierkową robotą.
      </div>
    </section>
  );
};

export default Hero;
