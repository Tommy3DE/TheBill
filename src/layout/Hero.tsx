import arrow from "../assets/icons/Arrow 1.svg";
import cat from "../assets/bill_cat_hero.png";
import bg from "../assets/icons/Group 1.svg";

const Hero = () => {
  return (
    <section className="mt-8 items-center mx-[8%] font-poppins">
      <div className="flex flex-row h-[700px]">
        {" "}
        <div className="flex flex-col w-[40%] justify-center">
          <h1 className="text-7xl mb-8 tracking-wider font-playFair">
            Aplikacja do obsługi faktur w Twojej firmie.
          </h1>
          <h3 className="text-2xl font-poppins tracking-widest leading-loose text-justify">
            Nie marnuj więcej czasu i pieniędzy. Aplikacja TheBill pozwoli na
            efektywne kolekcjonowanie faktur kosztowych na koniec miesiąca i
            przesłanie ich dalej do biura rachunkowego.
          </h3>
          <div className="flex flex-row my-8 justify-between mx-1">
            <button className="bg-[#2FD453] text-black font-bold text-3xl py-4 px-2 rounded-lg">
              Darmowy okres próbny
            </button>
            <div className="py-4 px-2 flex flex-row text-3xl">
              <button className="mr-2">Prezentacja systemu</button>
              <img src={arrow} alt="arrow"></img>
            </div>
          </div>
        </div>
        <div className="w-[60%] flex justify-center items-center">
          <img
            src={cat}
            alt="cat img"
            className="h-full max-w-full object-contain"
          />
        </div>
      </div>
      <div className="border border-black text-center text-lg font-poppins rounded-md">
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
              TheBill is a modern and intuitive invoice management tool designed
              to streamline your business processes. With its user-centered
              approach, you can easily create, track, and manage your invoices
              with efficiency and simplicity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
