import { ReactNode, useState } from "react";

interface ArticleTile {
    id: number,
    category: 'Zarządzanie' | 'Procesy biznesowe' | 'Technologia' | "Finanse",
    date: string,
    title: string,
    img: string,
    shortV: string,
    fullArt: ReactNode
}

const Articles = () => {
  const [category, setCategory] = useState<string>("Wszystkie");

  const articles: ArticleTile[] = [
    {
        id: 1,
        category: 'Zarządzanie',
        date: '12.01.2024',
        title: 'Najczęstsze błędy w zarządzaniu finansami małych firm',
        img: '',
        shortV: 'Zarządzanie finansami to kluczowy aspekt prowadzenia każdej małej firmy. Jednak wiele mikroprzedsiębiorstw napotyka na drodze typowe błędy, które mogą poważnie zaburzyć ich stabilność finansową. Poznaj najczęstsze pułapki i dowiedz się, jak ich unikać...',
        fullArt: ''
    }
  ]
  return (
    <section className="mt-5">
      <div className="h-24 bg-gray-200 flex flex-row justify-center items-center font-bold font-poppins">
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
      <h1>
        {articles.map((x)=><div>{x.id}</div>)}
      </h1>
    </section>
  );
};

export default Articles;
