import SlimNav from "../../../layout/SlimNav";
import debit from "../../../assets/settings/debit-card 1.png";
import ReturnBtn from "../../../components/ReturnBtn";
import { ChangeEvent, useState } from "react";
import JSEncrypt from "jsencrypt";
import { toast } from "react-toastify";

const ChangePayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const pubkey = `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBB+jeV/CthQcGFltHV2lueSNcW30zxbI9hjkpwIgEyfY3e63+0ISIBts8/k3U7Qg+HHmqy+6fciicM2pxt9hvGvPy/lssbd2pYksGh8yzB8JJj8HaQQ/RzYEZ72FAn1Z6R7C9hgZORl7JV+W47GEUNixpPuzozDsBeq9PcZMaEQIDAQAB-----END PUBLIC KEY-----`;

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value =
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") || "";
    setCardNumber(value);
  };

  const changePayment = async () => {
    const cardNumberClean = cardNumber.replace(/\s/g, "");
    const cd = `${cardNumberClean}|${expiry}|${cvv}|https://onebill.com.pl/newUser/paymentPage`;

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(pubkey);
    const encrypted = encrypt.encrypt(cd);

    try {
      const response = await fetch("/api/payment/change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payer: {
            name: name,
            email: email,
          },
          card: encrypted,
        }),
      });
      if(response.ok){
        toast.success("Dane zmienione pomyślnie", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (error) {
      console.error("Failed to update payment information:", error);
      alert("Failed to update payment information. Please try again.");
    }
  };

  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins">
        <p className="text-3xl font-black">Zmień dane płatnicze</p>
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
          <input
            type="text"
            id="imie"
            className="p-1 rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="mt-4 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-300 p-2 rounded mb-10"
          />
          <div className="flex flex-row justify-between py-5 px-2">
            <div className="flex flex-col w-[49%]">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id="cvv"
                className="p-1 rounded-xl"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label htmlFor="exp">Data ważności (miesiąc/rok)</label>
              <input
                type="text"
                id="exp"
                className="p-1 rounded-xl"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly mt-10">
          <ReturnBtn route="/logged/subscription" />
          <button
            className="uppercase tracking-wider text-center font-playFair text-3xl font-black items-center text-white bg-[#1A9367] ml-5 px-10 py-4 rounded-2xl hover:bg-green-800"
            onClick={changePayment}
          >
            Zapisz
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangePayment;
