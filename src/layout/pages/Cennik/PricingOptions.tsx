import { FaCheckCircle } from "react-icons/fa";
import fab from "../../../assets/pricing/fab.png";
import prem from "../../../assets/pricing/prem.png";
import standard from "../../../assets/pricing/standard.png";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export type PricingTile = {
  id: number;
  priceMth: number;
  priceYrl: number;
  title: string;
  text: string;
  opis: ReactNode;
  img: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5?: string;
  point6?: string;
  point7?: string;
  point8?: string;
};

export const pricing: PricingTile[] = [
  {
    id: 1,
    priceMth: 29.99,
    priceYrl: 299.99,
    title: "Pakiet Standard",
    text: "Początkujący przedsiębiorca",
    opis: (
      <>
        <span className="font-black">Pakiet Standard</span> jest idealnym
        rozwiązaniem dla osób zaczynających prowadzić działalność. Pomaga w
        organizacji i chorni przed błędami. Pomaga wyrobić dobre praktyki
        rozliczeniowe w firmie.
      </>
    ),
    img: standard,
    point1: "Skanowanie do 15 dokumentów miesięcznie",
    point2: "5 skanowań na miesiąc",
    point3: "Integracja z 1 kontem mailowym",
    point4: "Historia w chmurze do 6 miesięcy wstecz"
  },
  {
    id: 2,
    priceMth: 69.99,
    priceYrl: 699.99,
    title: "Pakiet Premium",
    text: "Biegły przedsiębiorca",
    opis: (
      <>
        <span className="font-black">Pakiet Premium,</span> kierowany jest do
        osób, które zwiększają skalę swojej działalności i potrzebują
        automatyzować niektóre procesy w swojej firmie.
      </>
    ),
    img: prem,
    point1: "Skanowanie do 35 dokumentów miesięcznie",
    point2: "10 skanowań na miesiąc",
    point3: "Integracja z 1 kontem mailowym",
    point4: "Historia w chmurze do 24 miesięcy wstecz",
    point5: "Priorytetowa obsługa zgłoszeń",
    point6: "Dostęp do narzędzi automatyzacyjnych",
  },
  {
    id: 3,
    priceMth: 99.99,
    priceYrl: 999.99,
    title: "Pakiet Biznes",
    text: "Wymagający przedsiębiorca",
    opis: (
      <>
        <span className="font-black">Pakiet Biznes,</span> stworzony jest z
        myślą o osobach, które prowadzą kilka projektów na raz i nie mogą
        pozwolić sobie na pomyłki przy tak fundamentalnych rzeczach jak
        rozliczenia.
      </>
    ),
    img: fab,
    point1: "Nielimitowana liczba dokumentów",
    point2: "Nielimitowana liczba skanowań",
    point3: "Integracja z 1 kontem mailowym",
    point4: "Historia w chmurze do 60 miesięcy wstecz",
    point5: "Priorytetowa obsługa zgłoszeń",
    point6: "Dostęp do narzędzi automatyzacyjnych",
    point7: "Wcześniejszy dostęp do nowych funkcjonalności"
  },
];

const PricingOptions = () => {
  return (
    <section className=" items-center lg:mx-[8%] font-poppins mt-10">
      <div className="flex flex-col lg:flex-row justify-evenly">
        {pricing.map((tile) => (
          <div
            key={tile.id}
            className="border-4 rounded-xl lg:w-1/4 lg:mx-4 my-5 lg:my-0 border-green-700 flex flex-col justify-evenly py-5 px-5 bg-white"
          >
            <div className="flex flex-col items-center h-[55%]">
              <h1
                className={`text-4xl text-center font-playFair font-black ${
                  tile.id === 1
                    ? "text-[#35D299]"
                    : tile.id === 2
                    ? "text-[#1A9367]"
                    : tile.id === 3
                    ? "text-[#C19F46]"
                    : ""
                }`}
              >
                {tile.title}
              </h1>
              <img
                src={tile.img}
                alt={tile.title}
                className="mt-10 rounded-lg h-32"
              />
              <div
                className="h-1 bg-green-700 w-full my-10"
                style={{ height: "4px" }}
              />
              <h1
                className={`text-5xl text-[#1A9367] font-black ${
                  tile.id === 1
                    ? "text-[#35D299]"
                    : tile.id === 2
                    ? "text-[#1A9367]"
                    : tile.id === 3
                    ? "text-[#C19F46]"
                    : ""
                }`}
              >
                {tile.priceMth}
              </h1>
              <h3 className="mt-5 font-black text-2xl text-center ">
                {tile.text}
              </h3>
              <h1 className="text-xl my-5 text-gray-500 text-justify">
                {tile.opis}
              </h1>
            </div>
            <div className="flex flex-col mt-5 justify-start items-start h-[45%]">
              <div className="flex flex-row items-start w-full mb-5">
                <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                <p className="font-bold text-lg w-5/6">{tile.point1}</p>
              </div>
              <div className="flex flex-row items-start w-full mb-5">
                <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                <p className="font-bold text-lg w-5/6">{tile.point2}</p>
              </div>
              <div className="flex flex-row items-start w-full mb-5">
                <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                <p className="font-bold text-lg w-5/6">{tile.point3}</p>
              </div>
              {tile.point4 !== undefined && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point4}</p>
                </div>
              )}
              {tile.point5 !== undefined && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point5}</p>
                </div>
              )}
              {tile.point6 !== undefined && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point6}</p>
                </div>
              )}
              {tile.point7 !== undefined && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point7}</p>
                </div>
              )}
              {tile.point8 !== undefined && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point8}</p>
                </div>
              )}
            </div>
            <Link to={"/newUser"}>
              <button className="my-5 text-2xl bg-green-700 text-white hover:scale-95 w-full p-2 rounded ">
                Wybierz
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingOptions;
