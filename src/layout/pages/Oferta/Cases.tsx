import { IoIosWarning } from "react-icons/io";
import cook from "../../../assets/casesImages/cook.png";
import programmer from "../../../assets/casesImages/programmer.png";
import hair from "../../../assets/casesImages/hair.png";
import lightbulb from "../../../assets/icons/lightbulb.png";

const Cases = () => {
  return (
    <section className="mt-8 font-poppins flex flex-col">
      <h1 className="text-4xl tracking-wider my-12 font-extrabold font-poppins  text-center">
        Jakie problemy rozwiązuje TheBill?
      </h1>
      <div className="flex justify-end w-full">
        <div className="w-[60%] h-[600px] border-2 black bg-blue-200 rounded-xl border-black flex flex-row justify-around ">
          <div className="flex flex-col justify-around">
            <img src={cook} alt="cook" className="h-auto w-auto" />
            <div>
              <h1 className="text-4xl font-extrabold ">Bogusław</h1>
              <h2 className="text-xl">Właściciel restauracji</h2>
            </div>
          </div>
          <div className="bg-white my-4 flex flex-col items-center w-1/4 border-2 border-black rounded-lg p-4">
            <h1 className="text-4xl font-extrabold h-[30%]">Problemy</h1>
            <div className="flex flex-col justify-around h-full">

            <div className="flex flex-row w-full">
              <IoIosWarning className="text-6xl text-yellow-500 w-1/5 my-auto" />
              <h3 className="text-2xl ml-4 w-full">
                {" "}
                Otrzymujemy wiele faktur od różnych dostawców.
              </h3>
            </div>
            <div className="flex flex-row w-full">
              <IoIosWarning className="text-6xl text-yellow-500 w-1/5 my-auto" />
              <h3 className="text-2xl ml-4 w-full">
                {" "}
                Trudności w monitorowaniu i analizowaniu kosztów zakupów do
                lokalu.
              </h3>
            </div>
            </div>
          </div>
          <div className="bg-green-100 my-4 flex flex-col items-center w-1/4 border-4 border-green-600 rounded-lg p-4">
            <h1 className="text-4xl font-extrabold h-[30%]">Rozwiązania</h1>
            <div className="flex flex-col justify-around h-full">
            <div className="flex flex-row items-center">
              <img
                src={lightbulb}
                alt="lightbulb"
                className="text-8xl text-yellow-500 w-1/3"
              />
              <h3 className="text-2xl ml-4">
                {" "}
                Dzięki TheBill zautomatyzowaliśmy proces zbierania i sortowania
                faktur.{" "}
              </h3>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={lightbulb}
                alt="lightbulb"
                className="text-8xl text-yellow-500 w-1/3"
              />
              <h3 className="text-2xl ml-4">
                {" "}
                Aplikacja TheBill pomaga właścicielom lepiej kontrolować firmowe
                wydatki.{" "}
              </h3>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full my-12">
        <div className="w-[60%] h-[600px] border-2 black bg-blue-200 rounded-xl border-black flex flex-row justify-around ">
          <div className="flex flex-col justify-around">
            <img src={hair} alt="cook" className="h-auto w-auto" />
            <div>
              <h1 className="text-4xl font-extrabold ">Grażyna</h1>
              <h2 className="text-xl">Właścicielka salonu kosmetycznego</h2>
            </div>
          </div>
          <div className="bg-white my-4 flex flex-col items-center w-1/4 border-2 border-black rounded-lg p-4">
            <h1 className="text-4xl font-extrabold h-[30%]">Problemy</h1>
            <div className="flex flex-col justify-around h-full">
            <div className="flex flex-row w-full">
              <IoIosWarning className="text-6xl text-yellow-500 w-1/5 my-auto" />
              <h3 className="text-2xl ml-4 w-full">
                {" "}
                Przez liczbe faktur, cieżko jest je na bieżąco zbierać.              </h3>
            </div>
            <div className="flex flex-row w-full">
              <IoIosWarning className="text-6xl text-yellow-500 w-1/5 my-auto" />
              <h3 className="text-2xl ml-4 w-full">
                {" "}
                Czasochłonne procesy księgowe, które odciągają uwagę od głównej działalności salonu.
              </h3>
            </div>
            </div>
          </div>
          <div className="bg-green-100 my-4 flex flex-col items-center w-1/4 border-4 border-green-600 rounded-lg p-4">
            <h1 className="text-4xl font-extrabold h-[30%]">Rozwiązania</h1>
            <div className="flex flex-col justify-around h-full">
            <div className="flex flex-row items-center">
              <img
                src={lightbulb}
                alt="lightbulb"
                className="text-8xl text-yellow-500 w-1/3 "
              />
              <h3 className="text-2xl ml-4">
                {" "}
                TheBill oferuje funkcje analizy wydatków, co pozwala na lepszą kontrolę kosztów.
              </h3>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={lightbulb}
                alt="lightbulb"
                className="text-[6rem] text-yellow-500 "
              />
              <h3 className="text-2xl ml-4">
                {" "}
                TheBill minimalizuje czas poświęcony na księgowość dzięki automatyzacji.
              </h3>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <div className="w-[60%] h-[600px] border-2 black bg-blue-200 rounded-xl border-black flex flex-row justify-around ">
          <div className="flex flex-col justify-around">
            <img src={programmer} alt="cook" className="h-auto w-auto" />
            <div>
              <h1 className="text-4xl font-extrabold ">Mirosław</h1>
              <h2 className="text-xl">Programista</h2>
            </div>
          </div>
          <div className="bg-white my-4 flex flex-col items-center w-1/4 border-2 border-black rounded-lg p-4">
            <h1 className="text-4xl font-extrabold h-[30%]">Problemy</h1>
            <div className="flex flex-col justify-around h-full">
            <div className="flex flex-row w-full">
              <IoIosWarning className="text-6xl text-yellow-500 w-1/5 my-auto" />
              <h3 className="text-2xl ml-4 w-full">
                {" "}
                Firmy IT często korzystają z wielu licencji i subskrypcji, co utrudnia ich śledzenie i zarządzanie.              </h3>
            </div>
            <div className="flex flex-row w-full">
              <IoIosWarning className="text-6xl text-yellow-500 w-1/5 my-auto" />
              <h3 className="text-2xl ml-4 w-full">
                {" "}
                Zarządzanie fakturami od podwykonawców i freelancerów może być skomplikowane i czasochłonne.
              </h3>
            </div>
            </div>
          </div>
          <div className="bg-green-100 my-4 flex flex-col items-center w-1/4 border-4 border-green-600 rounded-lg p-4">
            <h1 className="text-4xl font-extrabold h-[30%]">Rozwiązania</h1>
            <div className="flex flex-col justify-around h-full">
            <div className="flex flex-row items-center">
              <img
                src={lightbulb}
                alt="lightbulb"
                className="text-8xl text-yellow-500 w-1/3"
              />
              <h3 className="text-2xl ml-4">
                {" "}
                TheBill automatyzuje proces zarządzania licencjami i subskrypcjami.
              </h3>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={lightbulb}
                alt="lightbulb"
                className="text-8xl text-yellow-500 w-1/3"
              />
              <h3 className="text-2xl ml-4">
                {" "}
                TheBill ułatwia proces zarządzania i weryfikacji faktur od podwykonawców, upraszczając procesy księgowe.
              </h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
