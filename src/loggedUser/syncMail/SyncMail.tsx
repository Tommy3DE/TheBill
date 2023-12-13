import { Link } from "react-router-dom";
import SlimNav from "../../layout/SlimNav";
import loading from "../../assets/iconsLogged/loading.png";

const SyncMail = () => {
  return (
    <section>
      <SlimNav />
      <div className="mt-24 lg:mx-[10%] mx-[2%]">
        <div className="flex flex-row justify-start items-center font-black">
          <h1 className="text-4xl">Zsynchronizowane skrzynki</h1>
          <img src={loading} alt="scan" className="h-14 w-14 ml-5" />
        </div>
        <div className="px-4 py-2 my-6 bg-[#CFFFF1] rounded-lg">
          Poniżej możesz zarządzać skrzynkami e-mail jakie są połączone z Twoim
          kontem. Jeśli chcesz usunąć adres e-mail spiety z naszą aplikacją,
          kliknij “usuń”. Jeśli chcesz dodać skrzynkę, naciśnij “+dodaj
          skrzynkę”. Twój obecny pakiet to: [nazwa_pakietu]. Możesz połączyć
          jeszcze [ilość_skrzynek] z aplikacją.
        </div>
        <div className="w-full flex flex-col">
          <div className="lg:p-4 border-green-700 rounded-xl lg:h-72 w-full border-4 ">
            <ul className="flex justify-around lg:text-2xl font-bold flex-row list-none w-full border-b-4 border-green-700">
              <li className="text-center border-r-4 border-green-700 w-1/4">
                Konto
              </li>
              <li className="text-center border-r-4 border-green-700 w-1/4">
                Ostatnie Skanowanie
              </li>
              <li className="text-center border-r-4 border-green-700 w-1/4">
                Akcja
              </li>
              <li className="text-center w-1/4">Status</li>
            </ul>
            <div className="w-full flex flex-row lg:text-xl">
              <div className="w-1/4 lg:p-2 border-green-700 border-r-4 text-center">
                test@test.pl
              </div>
              <div className="w-1/4 p-2 border-green-700 border-r-4 text-center">
                2/12/2023
              </div>
              <div className="w-1/4 p-2 border-green-700 border-r-4 text-center">
                <button className="bg-green-400 text-bold rounded-lg py-1 lg:w-1/3">
                  Skanuj
                </button>
              </div>
              <div className="w-1/4 p-2 border-green-700 font-bold text-green-500 text-center">
                Aktywna
              </div>
            </div>
          </div>
        </div>
        <p className="my-4">
          *aby skrzynka została aktywowana, kliknij w link aktywacyjny który
          został wysłany w wiadomości e-mail na Twoją skrzynkę.
        </p>
      <button className="bg-[#1A9367] text-4xl text-white rounded-lg px-6 py-3">+ dodaj skrzynkę</button>

      </div>
      <Link to={"/logged"} className="lg:mx-10 mx-5">
        <button className="px-4 py-2 hover:scale-105 font-extrabold text-xl rounded bg-red-400 text-white lg:w-auto w-[90%] lg:mt-72">
          Wstecz
        </button>
      </Link>
    </section>
  );
};

export default SyncMail;
