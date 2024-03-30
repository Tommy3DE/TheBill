import { useState } from "react";
import sync from "../../assets/iconsLogged/sync.png";
import accountant from '../../assets/accountant.png'

const NewUserHome = () => {
  const [step, setStep] = useState<number>(0);
  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlereturn = () => setStep((prev) => prev - 1);
  return (
    <div className="lg:h-[80%] w-screen flex flex-col justify-center items-center">
      {step === 0 && (
        <>
          <img src={sync} alt="sync" className="mb-10 h-32" />
          <p className="text-3xl font-bold tracking-wider font-poppins">
            Witaj! Zacznimy od połączenia Twojej skrzynki mailowej z kontem{" "}
            <span className="text-[#1A9367]">OneBill</span>
          </p>
          <p className="my-8">
            Dzięki temu będziesz mógł skanować swoją skrzynkę w poszukiwaniu
            faktur.
          </p>
          <button
            className="bg-[#1A9367] text-white py-3 px-3 font-bold font-playFair rounded-xl"
            onClick={handleNextStep}
          >
            + DODAJ SKRZYNKĘ
          </button>{" "}
        </>
      )}
      {step === 1 && (
        <>
          <img src={accountant} alt="accountant" className="mb-10 h-32" />
          <p className="text-3xl font-bold tracking-wider font-poppins">
          Dodaj adres biura księgowego 
          </p>
          <p className="my-8">
          Dzięki temu będziemy wiedzieć do kogo przesyłać Twoje faktury.
          </p>
          <input type="text" className="bg-gray-100 mb-8 w-[25%] border border-gray-500 rounded-lg text-3xl" />
          <button
            className="bg-[#1A9367] text-white py-3 px-3 font-bold font-playFair rounded-xl"
            onClick={handleNextStep}
          >
            + DODAJ SKRZYNKĘ
          </button>{" "}
        </>
      )}
      <button onClick={handlereturn}>wróc</button>
    </div>
  );
};

export default NewUserHome;
