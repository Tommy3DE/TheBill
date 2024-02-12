import { FormEvent, useRef } from "react";
import Navbar from "../Navbar";
import airplane from "../../assets/icons/airplane.png";
import help from "../../assets/help.jpg";
import FAQ from "./Pomoc/FAQ";
import Footer from "../Footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Pomoc = () => {
  const form = useRef<HTMLFormElement | null>(null);


  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_j47lvzl",
          "template_iuscwh9",
          form.current,
          "jMHcnYi7CJyBcblPz"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Wiadomość pomyślnie wysłana", {
              position: "top-right",
              autoClose: 7000,
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("Błąd wysyłania wiadomości", {
              position: "top-right",
              autoClose: 7000,
            });
          }
        );
    }
  };
  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const previousElement = e.target
      .previousElementSibling as HTMLElement | null;
    if (previousElement) {
      previousElement.style.display = "none";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const previousElement = e.target
      .previousElementSibling as HTMLElement | null;
    if (e.target.value === "" && previousElement) {
      previousElement.style.display = "block";
    }
  };

  return (
    <>
      <Navbar />
      <section className="mt-8 font-poppins flex flex-col mx-auto max-w-[1980px] ">
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
              <div className="flex items-center lg:ml-[8%] mb-10 lg:mb-0">
                <img src={airplane} alt="airplane" />
                <h2 className="font-poppins text-4xl font-extrabold ml-5">
                  Formularz kontaktowy
                </h2>
              </div>
              <div className="flex lg:flex-row w-full flex-col justify-evenly">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col text-xl justify-center lg:w-2/5 my-5 mr-5"
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Imię i nazwisko"
                    className="border border-gray-500 rounded-lg text-2xl p-3 h-[15%]"
                  />
                  <input
                    type="email"
                    name="user_mail"
                    placeholder="Twój e-mail"
                    className="border border-gray-500 rounded-lg text-2xl my-5 p-3 h-[15%]"
                  />
                  <div className="relative border border-gray-500 rounded-lg h-36">
                    <label
                      htmlFor="user_message"
                      className="text-2xl pl-3 pt-2 absolute text-gray-400"
                    >
                      Treść wiadomości
                    </label>
                    <textarea
                      name="user_message"
                      id="user_message"
                      rows={1}
                      className="text-2xl w-full h-full pt-3 pl-3 rounded-lg focus:outline-none resize-none overflow-hidden"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={{ lineHeight: "1.5rem" }}
                    ></textarea>
                  </div>

                  <button className="text-2xl bg-[#5ffa9d] h-[15%] my-3 rounded-lg hover:font-bold hover:scale-105 hover:text-white ">
                    Wyślij
                  </button>
                </form>
                <img src={help} alt="help" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DDFFED] w-full py-3 mb-8 font-black text-3xl border-y-2 border-green-2 font-playFair ">
          <p className="text-center">Często zadawane pytania | FAQ</p>
        </div>
        <FAQ />
        <Footer />
      </section>
    </>
  );
};

export default Pomoc;
