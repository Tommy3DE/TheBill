import SlimNav from "../../../layout/SlimNav";
import debit from "../../../assets/settings/debit-card 1.png";
import ReturnBtn from "../../../components/ReturnBtn";

const ChangePayment = () => {
  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins">
        <p className=" text-3xl font-black">Zmień dane płatnicze</p>
        <img src={debit} alt="card" />
        <div className="w-1/3 bg-gray-100 rounded-xl flex flex-col justify-evenly px-5 text-xl">
          <label htmlFor="numer">Numer karty</label>
          <input type="text" id="numer" className="p-1 rounded-xl" />
          <label htmlFor="imie">Imię i nazwisko</label>
          <input type="text" id="imie" className="p-1 rounded-xl" />
          <label htmlFor="adres">Ulica/numer mieszkania</label>
          <input type="text" id="adres" className="p-1 rounded-xl" />
          <div className="flex flex-row justify-between py-5 px-2">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="numer">Miasto</label>
              <input type="text" id="numer" className="p-1 rounded-xl" />
              <label htmlFor="imie">Kraj</label>
              <input type="text" id="imie" className="p-1 rounded-xl" />
              <label htmlFor="adres">CVV</label>
              <input type="text" id="adres" className="p-1 rounded-xl" />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="numer">Województwo</label>
              <input type="text" id="numer" className="p-1 rounded-xl" />
              <label htmlFor="imie">Kod pocztowy</label>
              <input type="text" id="imie" className="p-1 rounded-xl" />
              <label htmlFor="adres">Data ważności</label>
              <input type="text" id="adres" className="p-1 rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly mt-10">
          <ReturnBtn route="/logged/subscription" />
          <button className="uppercase tracking-wider text-center font-playFair text-3xl font-black items-center text-white bg-[#1A9367] ml-5 px-10 py-4 rounded-2xl hover:bg-green-800">
            Zapisz
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangePayment;
