import { FormEvent, useRef } from "react";
import Navbar from "../Navbar";
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
          "template_gtdgcze",
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
              <div className="items-center  mb-10 lg:mb-0">
                <h2 className="font-playFair text-5xl font-extrabold ml-5 text-center mb-10">
                Pomóż nam rozwijać <span className="text-[#1A9367]">OneBill</span>
                </h2>
              </div>
              <div className="flex lg:flex-row w-full flex-col justify-evenly">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col text-xl justify-center w-full lg:w-1/3 my-5 "
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Imię i nazwisko"
                    className="border border-gray-500 rounded-lg text-2xl p-2 "
                  />
                  <input
                    type="email"
                    name="user_mail"
                    placeholder="Twój e-mail"
                    className="border border-gray-500 rounded-lg text-2xl mt-5 p-2"
                  />
                  <select
                    name="user_topic"
                    className="border border-gray-500 rounded-lg text-2xl mt-5 p-2 "
                  >
                    <option value="" disabled selected hidden className="">
                      Wybierz temat
                    </option>
                    <option value="Błędy wyszukiwania faktur">
                      Błędy wyszukiwania faktur
                    </option>
                    <option value="Problemy z integracją z kontem mailowym">
                      Problemy z integracją z kontem mailowym
                    </option>
                    <option value="Bezpieczeństwo i prywatność">
                      Bezpieczeństwo i prywatność
                    </option>
                    <option value="Interface użytkownika">
                      Interface użytkownika
                    </option>
                    <option value="Wydajność">Wydajność </option>
                    <option value="Błędy graficzne">Błędy graficzne</option>
                    <option value="Aplikacja mobilna">Aplikacja mobilna</option>
                    <option value="Inny">Inny</option>
                  </select>
                  <div className="relative border-2 border-gray-500 rounded-lg h-72 mt-5">
                    <textarea
                      name="user_message"
                      id="user_message"
                      rows={1}
                      className="text-2xl w-full h-full pt-3 pl-3 rounded-lg focus:outline-none resize-none overflow-hidden"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Treść widomości"
                      style={{ lineHeight: "1.5rem" }}
                    ></textarea>
                  </div>

                  <button className="text-2xl bg-[#1A9367] my-3 rounded-full font-bold hover:scale-105 text-white py-3 font-playFair">
                  Wyślij wiadomość
                  </button>
                </form>
                <img src={help} alt="help" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DDFFED] w-full py-3 mb-8 font-black text-3xl border-y-2 border-green-2 font-playFair ">
          <p className="text-start mx-[9%]">Często zadawane pytania | FAQ</p>
        </div>
        <FAQ />
        <Footer />
      </section>
    </>
  );
};

export default Pomoc;
