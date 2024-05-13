import SlimNav from "../../../layout/SlimNav";
import debit from "../../../assets/settings/debit-card 1.png";
import ReturnBtn from "../../../components/ReturnBtn";
import { ChangeEvent, useState } from "react";

const ChangePayment = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(value);
  };
  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins">
        <p className=" text-3xl font-black">Zmień dane płatnicze</p>
        <img src={debit} alt="card" />
        <div className="w-1/3 bg-gray-100 rounded-xl flex flex-col justify-evenly px-5 text-xl">
          <label htmlFor="numer">Numer karty</label>
          <input
            type="text"
            id="numer"
            className="p-1 rounded-xl"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19}
          />
          <label htmlFor="imie">Imię i nazwisko</label>
          <input type="text" id="imie" className="p-1 rounded-xl" />
          <label htmlFor="adres">Ulica/numer mieszkania</label>
          <input type="text" id="adres" className="p-1 rounded-xl" />
          <div className="flex flex-row justify-between py-5 px-2">
            <div className="flex flex-col w-[49%]">
              <label htmlFor="city">Miasto</label>
              <input type="text" id="city" className="p-1 rounded-xl" />
              <label htmlFor="country">Kraj</label>
              <input type="text" id="country" className="p-1 rounded-xl" />
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" className="p-1 rounded-xl" />
            </div>
            <div className="flex flex-col w-[49%]">
              <label htmlFor="woj">Województwo</label>
              <input type="text" id="woj" className="p-1 rounded-xl" />
              <label htmlFor="code">Kod pocztowy</label>
              <input type="text" id="code" className="p-1 rounded-xl" />
              <label htmlFor="exp">Data ważności</label>
              <input type="text" id="exp" className="p-1 rounded-xl" />
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
