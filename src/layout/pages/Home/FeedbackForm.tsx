import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import airplane from "../../../assets/icons/airplane.png";
import tick from "../../../assets/icons/tick.png";
import thing from "../../../assets/Rectangle 294.png";

interface QuestionTile {
  id: number;
  text: string;
}

const FeedbackForm = () => {
  const questions: QuestionTile[] = [
    {
      id: 1,
      text: "Masz pytania odnośnie naszego produktu,",
    },
    {
      id: 2,
      text: "Masz pytania związane z działaniem swojego konta,",
    },
    {
      id: 3,
      text: "Chciałbyś nawiązać współpracę,",
    },
    {
      id: 4,
      text: "Masz pytania odnośnie integracji konta,",
    },
    {
      id: 5,
      text: "Masz inne pytania...",
    },
  ];

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
    <section className="flex flex-col items-center lg:mx-[10%] font-poppin mt-10">
      <div className="flex flex-row items-center my-20">
        <img src={airplane} alt="plane" className="mr-5 h-24 mt-5" />
        <div className=" font-playFair font-black">
          <h1 className="text-5xl font-black my-5 text-[#1A9367]">
            Formularz kontaktowy
          </h1>
          <h2 className="text-3xl">
            Masz pytania?{" "}
            <span className="text-[#34D399] ">Napisz do nas!</span>
          </h2>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-center mt-16 relative">
        {" "}
        <div className="lg:w-2/5 shadow-2xl z-10 bg-white p-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col text-xl justify-center my-5 mr-5"
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
              <p className="text-xs">
                <input
                  type="checkbox"
                  name="check"
                  id="1"
                  className="mr-2 mt-3"
                />
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez KVX
                Digital Solutions sp. z o.o. z siedzibą w Łodzi (dalej „KVXDS”)
                w celach marketingowych poprzez otrzymywanie od KVXDS informacji
                handlowych za pomocą środków komunikacji elektronicznej na
                podany przeze mnie adres e-mail, a także na kierowanie
                informacji marketingowych przez KVXDS poprzez SMS/MMS na podany
                przeze mnie nr telefonu.*
              </p>
            </div>

            <button className="text-3xl bg-[#199466] ml-5 my-3 p-5 lg:w-[60%] rounded-full hover:font-bold hover:scale-105 text-white ">
              Wyślij wiadomość
            </button>
            <p className="ml-5 text-xs">*pole wymagane</p>
          </form>
          <p className="text-xs">
            {" "}
            Zgodę można wycofać w każdym czasie, kontaktując się z zespołem
            OneBill na adres e-mail pomoc@kvxdigitalsolutions.com. Wycofanie
            zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed
            jej wycofaniem. Administratorem Pani/Pana danych osobowych jest KVX
            Digital Solutions sp. z o.o. z siedzibą w Łodzi, ul. Adwentowicza
            13/12, KRS: 0001083222. Więcej informacji na temat przetwarzania
            danych osobowych i przysługujących Pani/Panu praw znajduje się w
            naszej Polityce Prywatności.
          </p>
        </div>
        <img src={thing} alt="thing" className="lg:absolute -mt-10 -ml-10 z-0 hidden" />
        <div className="lg:w-2/5 lg:pl-32">
          <p className=" font-playFair text-4xl font-bold mt-3 mb-16">
            Jeżeli:
          </p>
          {questions.map((question) => (
            <div key={question.id} className="flex flex-row items-center mb-5">
              <img src={tick} alt="tick" />
              <span className="text-2xl">{question.text}</span>
            </div>
          ))}
          <p className="text-4xl text-center ">
            <span className="text-[#34D399]">
              Wypełnij
              <br />{" "}
            </span>{" "}
            formularz i <br /> prześlij do nas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
