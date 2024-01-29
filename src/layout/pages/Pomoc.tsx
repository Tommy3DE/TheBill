import { useLocation } from 'react-router-dom';
import { FormEvent, useEffect, useRef } from 'react';
import Navbar from "../Navbar";
import airplane from "../../assets/icons/airplane.jpg";
import catHelp from "../../assets/catHelp.jpg";
import FAQ from "./Pomoc/FAQ";
import Address from "./Pomoc/Address";
import Footer from "../Footer";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Pomoc = () => {
  const location = useLocation();
  const form = useRef<HTMLFormElement | null>(null);

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

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) { 
      emailjs.sendForm('service_j47lvzl', 'template_iuscwh9', form.current, 'jMHcnYi7CJyBcblPz')
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Wiadomość pomyślnie wysłana", {
            position: "top-right",
            autoClose: 7000
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Błąd wysyłania wiadomości", {
            position: "top-right",
            autoClose: 7000
          });
        }
      );
    }
  };


  return (
    <>
      <Navbar />
      <section className="mt-8 font-poppins flex flex-col">
        <div className="lg:mt-24 text-center w-full bg-[#DDFFED]">
          <h1 className="text-6xl tracking-wider font-playFair font-bold my-10">
            Jak możemy Cię wesprzeć w prowadzeniu biznesu?{" "}
          </h1>
          <h2 className="text-3xl tracking-wider font-playFair font-bold  text-[#787878] mt-10 mb-24">
            Chętnie odpowiemy na wszystkie zapytania. <br /> Zachęcamy również
            do skorzystania z bazy najczęściej zadawanych pytań.{" "}
          </h2>
        </div>
        <div className=" h-auto w-full">
          <div className="lg:mx-[12%]">
            <div className="flex flex-col mt-14">
              <div className="flex items-center lg:ml-[10%] mb-10 lg:mb-0">
                <img src={airplane} alt="airplane" />
                <h2 className="font-poppins text-4xl font-extrabold ml-5">
                  Formularz kontaktowy
                </h2>
              </div>
              <div className="flex lg:flex-row w-full flex-col justify-evenly">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col text-xl justify-center lg:w-1/3 my-5">
                  <input
                    type="text"
                    name='user_name'
                    placeholder="Imię i nazwisko"
                    className="border border-gray-500 rounded-lg text-4xl p-3 h-[15%]"
                  />
                  <input
                    type="email"
                    name='user_mail'
                    placeholder="Twój e-mail"
                    className="border border-gray-500 rounded-lg text-4xl my-5 p-3 h-[15%]"
                  />
                  <input
                    type="text"
                    name="user_message"
                    placeholder="Treść wiadomości"
                    className="border border-gray-500 rounded-lg text-4xl h-[55%] placeholder:align-text-top p-3"
                  />
                  <button className='text-2xl bg-[#5ffa9d] h-[15%] my-3 rounded-lg hover:font-bold hover:scale-105 hover:text-white '>
                    Wyślij
                  </button>
                </form>
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