import { Link } from "react-router-dom";
import SlimNav from "../../layout/SlimNav";
import ReturnBtn from "../../components/ReturnBtn";
import mail from "../../assets/iconsLogged/email.png";

const ScanEmail = () => {
  return (
    <section>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className="mt-36 lg:mx-[10%] mx-[2%] font-poppins text-center">
          <h1 className="text-4xl font-black">
            W tym panelu możesz rozpocząć skanowanie swojej skrzynki e-mail
          </h1>
          <h2 className="text-2xl mt-5">
            Skanowanie rozpocznie się od momentu, w którym zakończyło się
            ostatnie skanowanie.{" "}
          </h2>
          <div className="bg-gray-300 p-4 lg:w-1/3 mx-auto rounded-3xl my-12">
            <div className="bg-white flex flex-row justify-center items-center rounded-3xl px-4 py-2">
              <img src={mail} alt="mail" />
              <h1 className="text-2xl font-black ml-2">Cezary1998@gmail.com</h1>
            </div>
            <div className="bg-white flex flex-col justify-between items-center rounded-3xl px-4 py-2 mt-5 text-small">
              <div>
                <span>Ostatnie skanowanie:</span>
                <span></span>
              </div>
              <div>Liczba ostatnio pobranych faktur:</div>
            </div>
            <Link to={"/logged/scanMail/scanPeriod"}>
              <button className=" text-bold mt-5 rounded-3xl w-full bg-[#1A9367] uppercase font-playFair text-2xl text-white font-bold tracking-wider py-4  hover:bg-green-800">
                Rozpocznij Skanowanie
              </button>
            </Link>
          </div>

          <div className="">
            <ReturnBtn route="/logged" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanEmail;
