import { FormEvent, useState } from "react";
import sync from "../../assets/iconsLogged/sync.png";
import accountant from "../../assets/accountant.png";
import calendar from "../../assets/calendar.png";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";


const NewUserHome = () => {
  const [step, setStep] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const { logout } = useAuth();


  const handleNextStep = () => setStep((prev) => prev + 1);
  // const handlereturn = () => setStep((prev) => prev - 1);
  const handleAddAcc = async (e: FormEvent) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const requestBody = {
      name: name,
      email: mail,
    };

    fetch("https://api.onebill.com.pl/api/bookkeeper", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Biuro księgowe dodane poprawnie", {
            position: "top-right",
            autoClose: 7000,
          });
          handleNextStep();
        } else {
          toast.error("Błąd dodawania biura księgowego", {
            position: "top-right",
            autoClose: 7000,
          });
        }

        return response.json();
      })
      .catch((error) => console.error("Error:", error));
  };

  
  return (
    <div className="lg:h-[80%] w-screen flex flex-col justify-center items-center">
      {step === 0 && (
        <>
          <img src={sync} alt="sync" className="mb-10 h-32" />
          <p className="text-3xl font-bold tracking-wider font-poppins">
            Witaj! Dziekujemy że wybrałeś{" "}
            <span className="text-[#1A9367]">OneBill</span>
          </p>
          <p className="my-8 text-xl text-gray-500">
          Skonfiguruj swoje konto aby automatycznie pobierać faktury ze swojej skrzynki mailowej.
          </p>
          <button
            className="bg-[#1A9367] text-white py-3 px-3 font-bold font-playFair rounded-xl hover:scale-105"
            onClick={handleNextStep}
          >
            Dalej
          </button>{" "}
          <button className="mt-16 bg-red-400 text-white rounded-xl p-3 font-playFair text-lg hover:scale-105 uppercase font-bold" onClick={logout}>
            Wyloguj
          </button>
        </>
      )}
      {step === 1 && (
        <form className="flex flex-col justify-center items-center">
          <img src={accountant} alt="accountant" className="mb-10 h-32" />
          <p className="text-3xl font-bold tracking-wider font-poppins">
            Dodaj dane biura księgowego
          </p>
          <p className="my-8 text-xl text-gray-500">
            Dzięki temu będziemy wiedzieć do kogo przesyłać Twoje faktury.
          </p>
          <input
            type="text"
            className="bg-gray-100 mb-8 px-1 py-1  w-[90%] border border-gray-500 rounded-lg text-3xl"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nazwa"
          />
          <input
            type="text"
            className="bg-gray-100 mb-8 px-1 py-1 w-[90%] border border-gray-500 rounded-lg text-3xl"
            onChange={(e) => setMail(e.target.value)}
            placeholder="E-mail"
          />
          <button
            className="bg-[#1A9367] text-white py-3 px-3 font-bold font-playFair rounded-xl text-xl"
            onClick={handleAddAcc}
            type="submit"
          >
            + DODAJ KSIĘGOWEGO
          </button>{" "}
        </form>
      )}
      {step === 2 && (
        <div className="flex flex-col justify-center items-center">
          <img src={calendar} alt="calendar" className="mb-10 h-32" />
          <p className="text-3xl font-bold tracking-wider font-poppins">
          Przejdź do panelu “skanuj e-mail” {" "}
          </p>
          <Link to='/logged/scanMail'>
            <button className="p-4 rounded-full bg-green-500 mt-8 hover:scale-105 text-white text-3xl">
            <FaArrowRight />
            </button>
          </Link>
          
        </div>
      )}
      {/* <button onClick={handleNextStep}>force next</button> */}
    </div>
  );
};

export default NewUserHome;
