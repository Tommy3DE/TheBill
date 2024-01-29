import { FaCheckCircle } from "react-icons/fa";
import bida from "../../../assets/pricing/bida.png";
import fab from "../../../assets/pricing/fab.png";
import prem from "../../../assets/pricing/prem.png";
import standard from "../../../assets/pricing/standard.png";

export type PricingTile = {
  id: number;
  priceMth: number;
  priceYrl: number;
  title: string;
  text: string;
  img: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5: string;
  point6: string;
  point7: string;
  point8: string;
};

interface PricingOptionsProps {
  yearly: boolean;
}
// eslint-disable-next-line react-refresh/only-export-components
export const pricing: PricingTile[] = [
  {
    id: 0,
    priceMth: 0,
    priceYrl: 0,
    title: "Darmowy",
    text: "Idelny do wypróbowania podstawowych funkcjonalności",
    img: bida,
    point1: "Skanowanie do 7 dokumentów miesięcznie",
    point2: "integracja z 1 kontem mailowym",
    point3: "podstawowy podgląd dokumentów",
    point4: "",
    point5: "",
    point6: "",
    point7: "",
    point8: "",
  },
  {
    id: 1,
    priceMth: 29.99,
    priceYrl: 299.99,
    title: "Standard",
    text: "Idealny dla małego JDG - świetne narzędzie dla początkujących",
    img: standard,
    point1: "Skanowanie do 15 dokumentów miesięcznie",
    point2: "integracja z 1 kontem mailowym",
    point3: "informacje o nowych fakturach w ujęciu miesięcznym",
    point4: "dostęp do aplikacji mobilnej",
    point5: "historia w chmurze do 6 miesięcy wstecz",
    point6: "",
    point7: "",
    point8: "",
  },
  {
    id: 2,
    priceMth: 69.99,
    priceYrl: 699.99,
    title: "Premium",
    text: "Pakiet dla bardziej wymagających przedsiębiorców",
    img: prem,
    point1: "Skanowanie do 35 dokumentów miesięcznie",
    point2: "integracja z 2 kontami mailowym",
    point3: "informacje o nowych fakturach w ujęciu miesięcznym.",
    point4: "dostęp do aplikacji mobilnej",
    point5: "historia w chmurze do 2 lat wstecz",
    point6: "priorytetowe naprawianie błędów/ obsługa",
    point7: "",
    point8: "",
  },
  {
    id: 3,
    priceMth: 99.99,
    priceYrl: 999.99,
    title: "Biznes",
    text: "Pakiet dla najbardziej wymagających osób, chcących rozwijać działalność",
    img: fab,
    point1: "Skanowanie nieograniczonej liczby dokumentów",
    point2: "integracja z 2 kontami mailowym",
    point3: "informacje o nowych fakturach w ujęciu miesięcznym.",
    point4: "dostęp do aplikacji mobilnej",
    point5: "historia w chmurze do 5 lat wstecz",
    point6: "priorytetowe naprawianie błędów/ obsługa",
    point7: "raporty i analityka konta",
    point8: "alerty dot. ważnych terminów i nowych faktur",
  },
];

const PricingOptions = ({ yearly }: PricingOptionsProps) => {
  
  return (
    <section className="mt-[-70px] items-center lg:mx-[8%] font-poppins mb-32">
      <div className="flex flex-col lg:flex-row justify-evenly">
        {pricing.map((tile) => (
          <div
            key={tile.id}
            className="border-4 rounded-xl lg:w-1/4 lg:mx-4 my-5 lg:my-0 border-green-700 flex flex-col justify-evenly py-10 px-5 bg-white"
          >
            <div className="flex flex-col items-center h-1/2">
              <h1
                className={`text-4xl text-center font-extrabold ${
                  tile.id === 0
                    ? "text-[#61E9B7]"
                    : tile.id === 1
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
                className="mt-10 rounded-lg h-72"
              />
              <div className="h-1 bg-green-700 w-full my-5" />
              <h1 className="text-5xl text-[#1A9367]">
                {yearly !== true ? tile.priceMth : tile.priceYrl} zł
              </h1>
              <h3 className="mt-5 text-gray-400 text-2xl text-center">
                {tile.text}
              </h3>
            </div>
            <div className="flex flex-col mt-10 justify-start h-1/2">
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
              {tile.point4 !== "" && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point4}</p>
                </div>
              )}
              {tile.point5 !== "" && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point5}</p>
                </div>
              )}
              {tile.point6 !== "" && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point6}</p>
                </div>
              )}
              {tile.point7 !== "" && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point7}</p>
                </div>
              )}
              {tile.point8 !== "" && (
                <div className="flex flex-row items-start w-full mb-5">
                  <FaCheckCircle className="text-3xl mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point8}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingOptions;
