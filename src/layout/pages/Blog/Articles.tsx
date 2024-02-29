import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import pic1 from "../../../assets/articlesThumbnail/austin-distel-rxpThOwuVgE-unsplash 1.png";
import pic2 from "../../../assets/articlesThumbnail/simon-kadula-8gr6bObQLOI-unsplash 1.png";
import pic3 from "../../../assets/articlesThumbnail/towfiqu-barbhuiya-bwOAixLG0uc-unsplash 1.png";
import pic4 from "../../../assets/articlesThumbnail/sajad-nori-oPRU2Cne0Pw-unsplash 1.png";
import pic5 from "../../../assets/articlesThumbnail/image 1.png";

export interface ArticleTile {
  id: number;
  category: "Zarządzanie" | "Procesy biznesowe" | "Technologia" | "Finanse";
  date: string;
  title: string;
  img: string;
  shortV: string;
}

const Articles = () => {
  const [category, setCategory] = useState<string>("Wszystkie");

  const articles: ArticleTile[] = [
    {
      id: 1,
      category: "Zarządzanie",
      date: "12.01.2024",
      title: "Najczęstsze błędy w zarządzaniu finansami małych firm",
      img: pic1,
      shortV:
        "Zarządzanie finansami to kluczowy aspekt prowadzenia każdej małej firmy. Jednak wiele mikroprzedsiębiorstw napotyka na drodze typowe błędy, które mogą poważnie zaburzyć ich stabilność finansową. Poznaj najczęstsze pułapki i dowiedz się, jak ich unikać.",
    },
    {
      id: 2,
      category: "Procesy biznesowe",
      date: "21.01.2024",
      title: "Automatyzacja procesów biznesowych w firmach",
      img: pic2,
      shortV:
        "W erze cyfryzacji, automatyzacja procesów finansowych stała się kluczowym elementem efektywnego zarządzania małą firmą. Nie tylko oszczędza czas, ale także minimalizuje ryzyko błędów i zwiększa efektywność. W tym artykule omówimy, jak automatyzacja może przyczynić się do poprawy Twoich finansów i w jaki sposób aplikacja OneBill może w tym pomóc.",
    },
    {
      id: 3,
      category: "Zarządzanie",
      date: "29.01.2024",
      title: "Najważniejsze daty w roku rozliczeniowym - o czym pamiętać?",
      img: pic3,
      shortV:
        "Każdy przedsiębiorca w Polsce musi pamiętać o kluczowych datach w roku podatkowym, aby uniknąć kar i opóźnień. Poniżej znajdziesz przewodnik po najważniejszych terminach, które powinny znaleźć się w Twoim kalendarzu biznesowym.",
    },
    {
      id: 4,
      category: "Technologia",
      date: "2.02.2024",
      title:
        "Cyfryzacja Twojej firmy - od papierkowej dokumentacji do zarządzania online",
      img: pic4,
      shortV:
        "W dzisiejszym szybko rozwijającym się świecie biznesu, cyfryzacja stała się kluczowa dla efektywności i wzrostu. Przejście od tradycyjnych, papierowych metod zarządzania do cyfryzacji procesów biznesowych może wydawać się wyzwaniem, ale jest niezbędne dla nowoczesnego przedsiębiorstwa. W tym artykule dowiesz się, jak skutecznie dokonać tej transformacji.",
    },
    {
      id: 5,
      category: "Zarządzanie",
      date: "7.02.2024",
      title:
        "Analiza przypadków użycia OneBill - jak klienci korzystają z naszego narzędzia?",
      img: pic5,
      shortV:
        "W dzisiejszym dynamicznym świecie biznesu, mikroprzedsiębiorcy szukają rozwiązań, które ułatwią im codzienne zarządzanie finansami. Aplikacja OneBill, z jej innowacyjnym podejściem do zarządzania dokumentacją kosztową, pomogła wielu przedsiębiorcom usprawnić ich działania. Oto kilka studiów przypadków, które pokazują, jak OneBill zmienił sposób, w jaki prowadzą oni swoje firmy.",
    },
  ];

  const filteredArticles = category === "Wszystkie" ? articles : articles.filter(article => article.category === category);


  return (
    <section className="mt-5">
      <div className="h-24 bg-gray-200 flex flex-row justify-center items-center font-bold font-poppins flex-wrap">
        <h1
          onClick={() => setCategory("Wszystkie")}
          className={`mx-8 cursor-pointer ${
            category === "Wszystkie"
              ? "bg-green-200 rounded-full px-3 py-2 scale-110"
              : ""
          }`}
        >
          Wszystkie
        </h1>
        <h1
          onClick={() => setCategory("Zarządzanie")}
          className={`mx-8 cursor-pointer ${
            category === "Zarządzanie"
              ? "bg-green-200 rounded-full px-3 py-2 scale-110"
              : ""
          }`}
        >
          Zarządzanie
        </h1>
        <h1
          onClick={() => setCategory("Procesy biznesowe")}
          className={`mx-8 cursor-pointer ${
            category === "Procesy biznesowe"
              ? "bg-green-200 rounded-full px-3 py-2 scale-110"
              : ""
          }`}
        >
          Procesy biznesowe
        </h1>
        <h1
          onClick={() => setCategory("Technologia")}
          className={`mx-8 cursor-pointer ${
            category === "Technologia"
              ? "bg-green-200 rounded-full px-3 py-2 scale-110"
              : ""
          }`}
        >
          {" "}
          Technologia
        </h1>
        <h1
          onClick={() => setCategory("Finanse")}
          className={`mx-8 cursor-pointer ${
            category === "Finanse"
              ? "bg-green-200  rounded-full px-3 py-2 scale-110"
              : ""
          }`}
        >
          Finanse
        </h1>
      </div>
      <div className={`flex flex-row ${filteredArticles.length > 0 ? 'justify-start' : 'justify-center'} mx-[5%] font-poppins flex-wrap`}>
        {filteredArticles.length > 0 ? filteredArticles.map((x) => (
          <div className="lg:w-1/4 mx-10 flex-col flex my-20" key={x.id}>
            <div className="flex flex-row justify-between items-center">
              <div className="rounded-full bg-[#D3F3E7] font-black px-4 py-2">
                {x.category}
              </div>
              <div className="text-sm text-gray-400 font-bold">{x.date}</div>
            </div>
            <h1 className="text-xl font-black mt-10 border-b-2 pb-3 ">
              {x.title}
            </h1>
            <img src={x.img} alt="article thumbnail" className="my-5" />
            <p className=" text-justify">{x.shortV}</p>
            <p>
              <Link
                to={`/blog/${x.id}`}
                className="flex flex-row items-center font-bold mt-5 hover:text-green-700"
              >
                Czytaj dalej <FaArrowRight className="ml-1" />
              </Link>
            </p>
          </div>
        )) : <h1 className="text-center text-3xl mt-10 text-gray-500">Brak artykułów</h1>}
      </div>
    </section>
  );
};

export default Articles;
