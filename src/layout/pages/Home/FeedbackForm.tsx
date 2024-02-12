import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const FeedbackForm = () => {
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
    <section className="flex flex-col justify-center items-center mx-[8%] font font-poppins">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-xl justify-center lg:w-2/5 my-5 mr-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Imię i nazwisko"
          className="border-2 border-gray-700 rounded-lg text-2xl p-3 h-[15%]"
        />
        <input
          type="email"
          name="user_mail"
          placeholder="Twój e-mail"
          className="border-2 border-gray-700 rounded-lg text-2xl my-5 p-3 h-[15%]"
        />
        <div className="relative border-2 border-gray-700 rounded-lg h-72">
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

        <div className="flex flex-row items-start">
          
          <p>
          <input type="checkbox" name="check" id="1" className="mr-5 mt-3" />
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez KVX
            Digital Solutions sp. z o.o. z siedzibą w Łodzi (dalej „KVXDS”) w
            celach marketingowych poprzez otrzymywanie od KVXDS informacji
            handlowych za pomocą środków komunikacji elektronicznej na podany
            przeze mnie adres e-mail, a także na kierowanie informacji
            marketingowych przez KVXDS poprzez SMS/MMS na podany przeze mnie nr
            telefonu.*
          </p>
        </div>

        <button className="text-3xl bg-[#199466] my-3 p-5 w-[60%] rounded-full hover:font-bold hover:scale-105 text-white ">
          Wyślij wiadomość
        </button>
        <p className=" text-xs">*pole wymagane</p>
      </form>
    </section>
  );
};

export default FeedbackForm;
