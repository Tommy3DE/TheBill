import arrow from "../assets/icons/Arrow 1.svg";
import cat from "../assets/bill_cat_hero.png";

const Hero = () => {
  return (
    <section className="mt-8 items-center mx-[8%] font-poppins">
      <div className="flex flex-row h-[700px]">
        {" "}
        <div className="flex flex-col w-[50%] justify-center">
          <h1 className="text-6xl mb-8 tracking-wider">
            Aplikacja do obsługi faktur w Twojej firmie.
          </h1>
          <h3 className="text-2xl font-poppins tracking-widest leading-loose text-justify">
            Nie marnuj więcej czasu i pieniędzy. Aplikacja TheBill pozwoli na
            efektywne kolekcjonowanie faktur kosztowych na koniec miesiąca i
            przesłanie ich dalej do biura rachunkowego.
          </h3>
          <div className="flex flex-row my-8 justify-between mx-5">
            <button className="bg-[#2FD453] text-black font-bold text-4xl py-4 px-2 rounded-lg">
              Darmowy okres próbny
            </button>
            <div className="py-4 px-2 flex flex-row text-3xl">
              <button className="mr-2">Prezentacja systemu</button>
              <img src={arrow} alt="arrow"></img>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img
            src={cat}
            alt="cat img"
            className="h-[90%] max-w-full object-contain"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Hero;
