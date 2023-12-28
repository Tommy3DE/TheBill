import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import reviews from "../../../assets/reviews.png";

const Opinions = () => {
  return (
    <section className="mt-20 items-center mx-[8%] font-poppins border-y-4 py-10 border-[#51FFBF]">
      <h1 className="text-center text-4xl font-extrabold my-14">
        Zaufało nam już wielu klientów. Oto opinie niektórych z nich{" "}
      </h1>
      <div className="flex lg:flex-row flex-col">
        <div className="border-2 rounded-lg border-green-700 flex flex-col justify-between p-5 lg:w-1/2 lg:mr-24">
          <div className="flex justify-center flex-row text-3xl my-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <p className="text-justify tracking-wider">
            Prowadzenie małej kawiarni to mnóstwo pracy, a zarządzanie fakturami
            zawsze było dla mnie wyzwaniem. Od kiedy zaczęłam używać OneBill,
            cały proces stał się prostszy i bardziej przejrzysty. To
            niesamowite, jak jedna aplikacja może tak zmienić codzienne
            funkcjonowanie mojego biznesu.
          </p>
          <h3 className="text-xl text-green-600 font-extrabold text-start">
            Dagmara
          </h3>
        </div>
        <div className="border-2 rounded-lg border-green-700 flex flex-col justify-between p-5 lg:w-1/2 mt-5 lg:mt-0 mb-5 lg:mb-0">
          <div className="flex justify-center flex-row text-3xl my-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <p className="text-justify tracking-wider">
            Jako właścicielka jednoosobowej działalności, każda minuta mojego
            czasu jest cenna. OneBill dał mi możliwość zautomatyzowania procesu
            zarządzania fakturami. Teraz mogę skupić się na rozwoju mojego
            butiku, wiedząc, że moje faktury są bezpieczne i dobrze zarządzane.
            To idealne rozwiązanie dla każdego JDG!
          </p>
          <h3 className="text-xl text-green-600  font-extrabold text-start">
            Jowita
          </h3>
        </div>
      </div>
      <img src={reviews} alt="review-pic" className="w-full my-14 lg:block hidden" />
      <div className="flex lg:flex-row flex-col justify-around">
        <div className="border-2 rounded-lg border-green-700 flex flex-col justify-between p-5 lg:w-1/2 lg:mr-24">
          <div className="flex justify-center flex-row text-3xl my-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <p className="text-justify tracking-wider">
            Jako mikroprzedsiębiorca w branży kreatywnej, zawsze szukałem
            sposobów, aby ułatwić sobie życie. OneBill to spełnienie moich
            oczekiwań - prostota, wygoda i pełna kontrola nad moimi finansami.
            To narzędzie, które naprawdę rozumie potrzeby małych biznesów.
          </p>
          <h3 className="text-xl text-green-600  font-extrabold text-start">
            Zbigniew
          </h3>
        </div>
        <div className="border-2 rounded-lg border-green-700 flex flex-col justify-between p-5 lg:w-1/2 mt-5 lg:mt-0">
          <div className="flex justify-center flex-row text-3xl my-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStarHalf className="text-yellow-300" />
          </div>
          <p className="text-justify tracking-wider">
            W mojej agencji marketingowej każdy dzień przynosi nowe wyzwania.
            Dzięki OneBill, zarządzanie fakturami już nie jest jednym z nich.
            Efektywność i prostota tej aplikacji pozwalają mi skupić się na tym,
            co naprawdę ważne - na moich klientach i rozwoju firmy.
          </p>
          <h3 className="text-xl text-green-600  font-extrabold text-start">
            Bogdan
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
