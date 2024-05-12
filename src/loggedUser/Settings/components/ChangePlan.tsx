import SlimNav from "../../../layout/SlimNav";
import payment from "../../../assets/settings/payment-day 2.png";
import { useUserData } from "../../../context/UserDataContext";
import { pricing } from "../../../layout/pages/Cennik/PricingOptions";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import ReturnBtn from "../../../components/ReturnBtn";
import tick from '../../../assets/settings/check-box 1.png'
import { Link } from "react-router-dom";


const ChangePlan = () => {
  const { userData } = useUserData();
  const [selectedPackage, setSelectedPackage] = useState(userData?.package);
  const [changePlan, setChangePlan] = useState(false);
  const [nextStep, setNextStep] = useState(false)

  const handleSelectPlan = (packageName: string): void => {
    setSelectedPackage(packageName); 
    setChangePlan(false); 
  };

  const handleNextStep = () => {
    setNextStep(true)
  }

  const packageDetails = (packageName: string): JSX.Element | null => {
    const details = pricing.find((p) => p.title.includes(packageName));
    if (!details) return null;

    return (
      <div className="text-center p-4 border-2 rounded-lg max-w-md mx-auto my-8 bg-gray-100">
        <h3 className="text-2xl font-bold mb-2">{details.title}</h3>
        <ul className="list-disc text-left ml-5 mt-2">
          {Object.entries(details)
            .filter(([key]) => key.startsWith("point"))
            .map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      {!nextStep && <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins">
        <img src={payment} alt="payment" />
        <h1 className="text-4xl tracking-wider font-black my-5">
          Aby zmienić swój plan, wybierz z dostępnych poniżej:
        </h1>
        <h2 className="text-2xl mb-5">Aktualny plan:</h2>
        {selectedPackage ? packageDetails(selectedPackage) : null}
        <button
          onClick={() => setChangePlan(true)}
          className="uppercase font-playFair text-2xl px-10 py-2 text-white bg-[#1A9367] mb-12 rounded-xl"
        >
          {" "}
          Zmien plan
        </button>
        <div className="flex flex-row justify-center mt-10">
          <ReturnBtn route="/logged/subscription" />
          <button className="uppercase tracking-wider text-center font-playFair text-3xl font-black items-center text-white bg-[#1A9367] ml-5 px-10 py-4 rounded-2xl hover:bg-green-800" onClick={handleNextStep}>
            Zapisz
          </button>
        </div>
      </div>}
      {
        nextStep && <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins"> 
          <img src={tick} alt="tick" />
            <h1 className="text-4xl font-black mt-5">Twoje zlecenie zostało pomyślnie przyjęte.</h1>
            <h1 className="text-3xl mt-2 mb-5">Twoje konto OneBill od kolejnego okresu rozliczeniowego zostanie ulepszone do:</h1> 
            {selectedPackage ? packageDetails(selectedPackage) : null}
            <p>Przy kolejnym rozliczeniu pobierzemy z Twojego konta zaktualizowaną kwotę.</p>
          <div className="flex flex-row justify-evenly mt-10">
          <Link to={'/logged/subscription'} className=" font-playFair text-3xl font-black text-center items-center text-white bg-gray-400 px-10 py-4 rounded-2xl hover:bg-gray-500">
        <button className="uppercase tracking-wider text-center">
            powrót do ustawień
        </button>
    </Link>
        </div>
        </div>
      }
      {changePlan && (
        <div className="h-screen w-full bg-gray-300 bg-opacity-80 fixed top-0 left-0 flex flex-row justify-center">
          {pricing.map((tile) => (
            <div
              key={tile.id}
              className="border-4 rounded-xl lg:w-1/4 lg:mx-4 my-5 lg:my-0 border-green-700 flex flex-col justify-evenly py-10 px-5 bg-white hover:bg-green-200 cursor-pointer"
              onClick={() => handleSelectPlan(tile.title)}
            >
              <div className="flex flex-col items-center h-1/2">
                <h1
                  className={`text-4xl text-center font-extrabold ${
                    tile.id === 0
                      ? "text-[#61E9B7]"
                      : tile.id === 1
                      ? "text-[#35D299]"
                      : tile.id === 2
                      ? "text-[#1A9367]"
                      : tile.id === 3
                      ? "text-[#C19F46]"
                      : ""
                  }`}
                >
                  {tile.title}
                </h1>
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="mt-10 rounded-lg h-72"
                />
                <div className="h-1 bg-green-700 w-full my-5" />
                <h1 className=" text-[#1A9367]">
                  {tile.priceMth === 0
                    ? "Plan darmowy"
                    : `${tile.priceMth} miesięcznie lub ${tile.priceYrl} rocznie`}
                </h1>
              </div>
              <div className="flex flex-col mt-5 justify-start h-1/2">
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point1}</p>
                </div>
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point2}</p>
                </div>
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point3}</p>
                </div>
                {tile.point4 !== "" && (
                  <div className="flex flex-row items-center w-full mb-3">
                    <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                    <p className="font-bold text-lg w-5/6">{tile.point4}</p>
                  </div>
                )}
                {tile.point5 && (
                  <div className="flex flex-row items-center w-full mb-3">
                    <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                    <p className="font-bold text-lg w-5/6">{tile.point5}</p>
                  </div>
                )}
                {tile.point6 && (
                  <div className="flex flex-row items-center w-full mb-3">
                    <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                    <p className="font-bold text-lg w-5/6">{tile.point6}</p>
                  </div>
                )}
                {tile.point7 && (
                  <div className="flex flex-row items-center w-full mb-3">
                    <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                    <p className="font-bold text-lg w-5/6">{tile.point7}</p>
                  </div>
                )}
                {tile.point8 && (
                  <div className="flex flex-row items-center w-full mb-3">
                    <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                    <p className="font-bold text-lg w-5/6">{tile.point8}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
    </section>
  );
};

export default ChangePlan;
