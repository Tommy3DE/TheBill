import { useState } from "react";
import { JSEncrypt } from "jsencrypt"; // Importing a library that supports RSA encryption
import SlimNav from "../layout/SlimNav";
import { toast } from "react-toastify";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryInput, setExpiryInput] = useState("");
  const [cvcInput, setCvcInput] = useState("");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);

  const pubkey = `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBB+jeV/CthQcGFltHV2lueSNcW30zxbI9hjkpwIgEyfY3e63+0ISIBts8/k3U7Qg+HHmqy+6fciicM2pxt9hvGvPy/lssbd2pYksGh8yzB8JJj8HaQQ/RzYEZ72FAn1Z6R7C9hgZORl7JV+W47GEUNixpPuzozDsBeq9PcZMaEQIDAQAB-----END PUBLIC KEY-----`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const cardNumberClean = cardNumber.replace(/\s/g, "");
    const cd = `${cardNumberClean}|${expiryInput}|${cvcInput}|${document.location.origin}`;

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(pubkey);
    const encrypted = encrypt.encrypt(cd);

    if (!encrypted) {
      console.error("Encryption failed.");
      setLoading(false);
      return;
    }

    const url = "https://api.onebill.com.pl/api/payment_init";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payer: {
            name: {name},
            email: {email},
          },
          card: encrypted,
        }),
      });
      if (response.ok) {
        toast.success("poszło");
      } else {
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <SlimNav />
      <form
        className="flex flex-col justify-center items-center mt-32"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row w-1/3 justify-between">
          <div className="flex flex-col w-1/2 mr-5">
            <label htmlFor="nameSurname" className="mt-4 mb-2">
              Imię i Nazwisko
            </label>
            <input
              id="nameSurname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="email" className="mt-4 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail((e.target.value))}
              className="bg-gray-300 p-2 rounded mb-10"
            />
          </div>
        </div>
        <label htmlFor="cardNumber" className="my-2">
          Numer Karty
        </label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="bg-gray-300 p-2 rounded mb-10 w-1/3"
        />
        <div className="flex flex-row w-1/3 justify-between">
          <div className="flex flex-col w-1/2 mr-5">
            <label htmlFor="cvcInput" className="mt-4 mb-2">
              CVV
            </label>
            <input
              id="cvcInput"
              type="text"
              value={cvcInput}
              onChange={(e) => setCvcInput(e.target.value)}
              className="bg-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="expiryInput" className="mt-4 mb-2">
              Termin ważności
            </label>
            <input
              id="expiryInput"
              type="text"
              value={expiryInput}
              onChange={(e) => setExpiryInput((e.target.value))}
              className="bg-gray-300 p-2 rounded mb-10"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`mt-4 p-2 rounded bg-blue-500 text-white ${
            loading ? "opacity-50" : ""
          }`}
        >
          {loading ? "Processing..." : "Submit Payment"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
