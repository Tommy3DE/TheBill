import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "../Navbar";
import airplane from "../../assets/icons/airplane.jpg";
import catHelp from "../../assets/catHelp.jpg";
import FAQ from "./Pomoc/FAQ";
import Address from "./Pomoc/Address";
import Footer from "../Footer";

const Pomoc = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const itemId = searchParams.get('item');
    if (itemId) {
      const element = document.getElementById(`accordion-item-${itemId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <section className="mt-8 font-poppins flex flex-col">
        <div className="mt-24 text-center w-full bg-[#DDFFED]">
          <h1 className="text-6xl tracking-wider font-playFair font-bold my-10">
            Jak możemy Cię wesprzeć w prowadzeniu biznesu?{" "}
          </h1>
          <h2 className="text-3xl tracking-wider font-playFair font-bold  text-[#787878] mt-10 mb-24">
            Chętnie odpowiemy na wszystkie zapytania. <br /> Zachęcamy również
            do skorzystania z bazy najczęściej zadawanych pytań.{" "}
          </h2>
        </div>
        <div className=" h-auto w-full">
          <div className="mx-[12%]">
            <div className="flex flex-col mt-14">
              <div className="flex items-center ml-[10%]">
                <img src={airplane} alt="airplane" />
                <h2 className="font-poppins text-4xl font-extrabold ml-5">
                  Formularz kontaktowy
                </h2>
              </div>
              <div className="flex flex-row w-full justify-evenly">
                <div className="flex flex-col text-xl justify-center w-1/3">
                  <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    className="border border-gray-500 rounded-lg text-4xl p-3"
                  />
                  <input
                    type="email"
                    placeholder="Twój e-mail"
                    className="border border-gray-500 rounded-lg text-4xl my-10 p-3"
                  />
                  <input
                    type="text"
                    placeholder="Treść wiadomości"
                    className="border border-gray-500 rounded-lg text-4xl h-2/5 placeholder:align-text-top p-3"
                  />
                </div>
                <img src={catHelp} alt="catimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DDFFED] w-full p-2 mb-8 font-extrabold text-3xl">
          <p className="text-center">Często zadawane pytania | FAQ</p>
        </div>
        <FAQ/>
        <Address />
        <Footer />
      </section>
    </>
  );
};

export default Pomoc;
