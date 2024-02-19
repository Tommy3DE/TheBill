import { useState } from "react";

const Articles = () => {
  const [category, setCategory] = useState<string>("Wszystkie");
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
      <h1></h1>
    </section>
  );
};

export default Articles;
