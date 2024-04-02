import { FormEvent, useState } from "react";
import sync from "../../assets/iconsLogged/sync.png";
import accountant from "../../assets/accountant.png";
import calendar from "../../assets/calendar.png";
import { toast } from "react-toastify";

const NewUserHome = () => {
  const [step, setStep] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlereturn = () => setStep((prev) => prev - 1);
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
            Witaj! Zacznimy od połączenia Twojej skrzynki mailowej z kontem{" "}
            <span className="text-[#1A9367]">OneBill</span>
          </p>
          <p className="my-8 text-xl text-gray-500">
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
        <form className="flex flex-col justify-center items-center">
          <img src={calendar} alt="calendar" className="mb-10 h-32" />
          <p className="text-3xl font-bold tracking-wider font-poppins">
            Wybierz miesiąc który chcesz przeskanować{" "}
          </p>
          <p className="my-8 text-xl text-gray-500 font-poppins">
            Zalecamy wybór bieżącego miesiąca rozliczeniowego.{" "}
          </p>
          <div className="flex flex-row just items-center text-2xl  font-poppins">
            <label htmlFor="month" className="mr-5">Wybierz miesiąc:</label>
            <select name="months" id="month" className="bg-gray-300 p-2 rounded-xl">
              <option value="1" selected>Styczeń</option>
              <option value="2">Luty</option>
              <option value="3">Marzec</option>
              <option value="4">Kwiecień</option>
              <option value="5">Maj</option>
              <option value="6">Czerwiec</option>
              <option value="7">Lipiec</option>
              <option value="8">Sierpień</option>
              <option value="9">Wrzesień</option>
              <option value="10">Październik</option>
              <option value="11">Listopad</option>
              <option value="12">Grudzień</option>
            </select>
          </div>
          <button
            className="bg-[#1A9367] text-white py-3 px-3 font-bold font-playFair rounded-xl text-xl"
            onClick={handleAddAcc}
            type="submit"
          >
            Skanuj
          </button>{" "}
        </form>
      )}
      <button onClick={handlereturn}>wróc</button>
      <button onClick={handleNextStep}>force next</button>
    </div>
  );
};

export default NewUserHome;
