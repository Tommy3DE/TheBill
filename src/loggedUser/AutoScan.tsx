import ReturnBtn from "../components/ReturnBtn";
import SlimNav from "../layout/SlimNav";
import gruop from "../assets/icons/Group.png";

const AutoScan = () => {
  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] mx-auto">
        <h1 className="lg:text-4xl text-2xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Ustaw automatyczne skanowanie skrzynki na swoim koncie
        </h1>
        <img src={gruop} alt="auto" className="mx-auto my-7" />
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          W tym panelu możesz ustawić automatyczne skanowanie swojej skrzynki.
          <br />
          Wybierz częstotliwość, z którą ma odbywać się skanowanie.
        </h2>
        <h1 className="lg:text-4xl text-3xl text-center my-10 font-bold">
          Skanowanie ma się odbywać:
          <span>
            <select className="bg-gray-200 rounded">
              <option value="1">codziennie</option>
              <option value="2">co tygodzień</option>
              <option value="3">co 2 tygodnie</option>
              <option value="4">na koniec miesiąca</option>
              
            </select>
          </span>{" "}
        </h1>
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          Po zakończonym skanowaniu, prześlemy do Ciebie maila, że gotowy skan
          czeka na zatwierdzenie.
        </h2>
        <div className="flex lg:flex-row flex-col-reverse justify-center mt-12">
          <ReturnBtn route="/logged" />
          <button className="font-playFair text-3xl font-black text-center items-center text-white bg-green-500 px-10 py-4 rounded-2xl hover:bg-green-600 lg:ml-5 mb-5 lg:mb-0 uppercase">
            Zaakeceptuj
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutoScan;
