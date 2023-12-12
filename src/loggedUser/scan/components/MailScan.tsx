import { Link } from "react-router-dom";
import scan from "../../../assets/iconsLogged/scan.png";

const MailScan = () => {
  return (
    <section className="w-full lg:h-[80%] mt-24 flex flex-col justify-start start mx-[10%] font-poppins">
      <div className="flex flex-row justify-start items-center font-black">
        <h1 className="text-4xl">Skanuj dokumenty papierowe </h1>
        <img src={scan} alt="scan" className="h-14 w-14 ml-5" />
      </div>

      <div className="w-[80%] bg-[#CFFFF1] rounded-lg mt-10 p-4 text-lg flex flex-col justify-start items-start">
      Opis to be provided [PLACEHOLDER]
      </div>
      <Link to={"/logged"} className="lg:mx-0 mx-5">
        <button className="px-4 py-2 hover:scale-105 font-extrabold text-xl rounded bg-red-400 text-white lg:w-auto w-[90%] lg:mt-[600px]">
          Wstecz
        </button>
      </Link>
    </section>
  );
};

export default MailScan;
