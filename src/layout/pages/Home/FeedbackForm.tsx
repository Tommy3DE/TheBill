import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const FeedbackForm = () => {
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
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="flex flex-col justify-center items-center mx-[8%] font font-poppins">
      <h1 className="text-3xl font-bold my-5">
        Pomóż nam dalej ulepszać aplikacje
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-xl justify-center w-full lg:w-1/3 my-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Imię i nazwisko"
          className="border border-gray-500 rounded-lg text-3xl p-2 "
        />
        <input
          type="email"
          name="user_mail"
          placeholder="Twój e-mail"
          className="border border-gray-500 rounded-lg text-3xl mt-5 p-2"
        />
        <select
          name="user_topic"
          className="border border-gray-500 rounded-lg text-3xl mt-5 p-2 "
        >
          <option value="" disabled selected hidden className="">
            Wybierz temat
          </option>
          <option value="Błędy wyszukiwania faktur">Błędy wyszukiwania faktur</option>
          <option value="Problemy z integracją z kontem mailowym">Problemy z integracją z kontem mailowym</option>
          <option value="Bezpieczeństwo i prywatność">Bezpieczeństwo i prywatność</option>
          <option value="Interface użytkownika">Interface użytkownika</option>
          <option value="Wydajność">Wydajność </option>
          <option value="Błędy graficzne">Błędy graficzne</option>
          <option value="Aplikacja mobilna">Aplikacja mobilna</option>
          <option value="Inny">Inny</option>

        </select>
        <input
          type="text"
          name="user_message"
          placeholder="Treść wiadomości"
          className="border border-gray-500 rounded-lg text-3xl placeholder:align-text-top p-2 mt-5"
        />

        <button className="text-2xl bg-[#5ffa9d] my-3 rounded-lg hover:font-bold hover:scale-105 hover:text-white py-3">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
