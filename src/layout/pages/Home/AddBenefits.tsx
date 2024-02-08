import { ReactNode } from "react";
import doc from "../../../assets/addBenefits/Documents-bro 1.png";
import contact from "../../../assets/addBenefits/Contact us-bro 1.png";
import conversion from "../../../assets/addBenefits/Conversion rate optimization-rafiki 1.png";
import men from "../../../assets/addBenefits/Contact us-bro 1.png";

interface BenefitTile {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  text: ReactNode;
}

const AddBenefits = () => {
  const tiles: BenefitTile[] = [
    {
      id: 1,
      title: "OneBill ułatwia identyfikację i dostęp do dokumentów",
      subtitle: "Organizuj dokumenty",
      img: doc,
      text: (
        <>
          <span className="font-black">OneBill</span> podczas skanowania Twojej
          skrzynki e-mail, organizuje dokumenty kosztowe zgodnie z datą
          sprzedaży i umieszcza w odpowiednich folderach.
        </>
      ),
    },
    {
      id: 2,
      title: "Usprawnia komunikację z biurem księgowym",
      subtitle: "Usprawnij komunikację",
      img: contact,
      text: (
        <>
          OneBill podczas skanowania przygotowuje paczki dokumentów, które w 2
          krokach mogą być wysłane jednym mailem do księgowego (w ZIP lub PDF)
        </>
      ),
    },
    {
      id: 3,
      title: "Koniec z brakującymi fakturami!",
      subtitle: "Uszczelnij koszty",
      img: conversion,
      text: (
        <>
          Dzięki zaawansowanemu algorytmowi skanowania, będziesz miał pewność
          ile faktur trafiło do księgowego. Będziesz miał również wgląd do
          historii skanowania swojej skrzynki.
        </>
      ),
    },
    {
      id: 4,
      title: "Optymalizuj swoje podatki",
      subtitle: "Kontroluj wydatki",
      img: men,
      text: (
        <>
          Z nami będziesz miał pod kontrolą wszystkie faktury kosztowe, co
          przełoży się na większe odliczenia kosztów - mniej niezaliczonych
          faktur.
        </>
      ),
    },
  ];
  return (
    <div className=" my-8 w-full font-poppins">
      <h1 className="my-8 text-5xl font-playFair bg-[#83F9CE] bg-opacity-40 py-6 font-bold text-center rounded-md backdrop-blur-md">
        Dodatkowe korzyści jakie oferuje OneBill
      </h1>
      <div className="bg-gray-100 py-10 font-poppins">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`flex mx-40 justify-center items-center ${
              tile.id === 1 || tile.id === 3 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex items-center flex-col justify-center">
              <img src={tile.img} alt="pic" />
              <h3 className="font-playFair -my-2 font-black text-xl">{tile.subtitle}</h3>
            </div>
            <div className=" w-5/12">
              <h4 className="text-2xl text-[#1A9367]">{tile.title}</h4>
              <h3>{tile.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBenefits;
