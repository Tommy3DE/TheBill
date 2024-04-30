import ReturnBtn from "../components/ReturnBtn";
import SlimNav from "../layout/SlimNav";
import gruop from "../assets/icons/Group.png";

const AutoScan = () => {
  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] mx-auto">
        <h1 className="text-4xl text-center font-bold tracking-wider mt-[7%]">
          Ustaw automatyczne skanowanie skrzynki na swoim koncie
        </h1>
        <img src={gruop} alt="auto" className="mx-auto my-7" />
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          W tym panelu możesz ustawić automatyczne skanowanie swojej skrzynki.
          <br />
          Wybierz dzień, w którym ma odbyć się skanowanie.
        </h2>
        <h1 className="text-4xl text-center my-10 font-bold">
          Skanowanie ma się odbywać każdego{" "}
          <span>
            <select className="bg-gray-200 rounded">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </span>{" "}
          dnia miesiąca.
        </h1>
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          Po zakończonym skanowaniu, prześlemy do Ciebie maila, że gotowy skan
          czeka na zatwierdzenie.
        </h2>
        <div className="flex justify-center mt-12">
          <ReturnBtn route="/logged" />
          <button className="font-playFair text-3xl font-black text-center items-center text-white bg-green-500 px-10 py-4 rounded-2xl hover:bg-green-600 ml-5 uppercase">
            Zaakeceptuj
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutoScan;
