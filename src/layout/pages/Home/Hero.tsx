import arrow from "../../../assets/icons/Arrow 1.svg";
import cat from "../../../assets/bill_cat_hero.png";
import bg from "../../../assets/icons/Group 1.svg";

const Hero = () => {
  return (
    <section className="mt-8 items-center mx-[8%] font-poppins">
      <div className="flex lg:flex-row flex-col-reverse lg:h-[700px]">
        {" "}
        <div className="flex flex-col lg:w-[60%] justify-center">
          <h1 className="lg:text-6xl text-5xl leading-relaxed mb-8 tracking-wider font-playFair lg:text-start text-center">
            Aplikacja do obsługi faktur w Twojej firmie.
          </h1>
          <h3 className="text-xl font-poppins tracking-widest leading-loose text-justify">
            Nie marnuj więcej czasu i pieniędzy. Aplikacja TheBill pozwoli na
            efektywne kolekcjonowanie faktur kosztowych na koniec miesiąca i
            przesłanie ich dalej do biura rachunkowego.
          </h3>
          <div className="flex lg:flex-row flex-col mt-14 justify-between mx-1">
            <button className="bg-[#2fd453] text-black font-bold lg:text-3xl text-2xl py-4 px-2 rounded-lg hover:text-white hover:scale-105">
              Darmowy okres próbny
            </button>
            <div className="py-4 px-2 flex flex-row lg:text-3xl text-2xl mt-5 lg:mt-0 group">
              <button className="mr-2">Prezentacja systemu</button>
              <img
                src={arrow}
                alt="arrow"
                className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-7"
              ></img>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center items-center">
          <img
            src={cat}
            alt="cat img"
            className="h-full max-w-full object-contain"
          />
        </div>
      </div>
      <div className="border border-black text-center text-lg font-poppins rounded-md lg:block hidden">
        <div className="flex flex-row justify-center py-3 px-7 ">
          <div className="relative pr-5">
            <img src={bg} alt="bg" />
            <p className="z-10 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-black font-bold">
              50K
            </p>
          </div>
          <div className="flex flex-col justify-center h-full ">
            {" "}
            <p className="text-lg tracking-wider text-justify mt-2">
            Czy zarządzanie fakturami pochłania Twój cenny czas? Czy organizacja dokumentacji księgowej wydaje się niekończącym się wyzwaniem? Oto TheBill - Twoje nowe, niezawodne narzędzie do zarządzania fakturami, które przyniesie rewolucję w Twoim biznesie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
