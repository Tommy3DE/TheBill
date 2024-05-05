import { useState } from "react";
import JSEncrypt from "jsencrypt";
// import Base64 from "js-base64";
import SlimNav from "../layout/SlimNav";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryInput, setExpiryInput] = useState("");
  const [cvcInput, setCvcInput] = useState("");
  const [loading, setLoading] = useState(false);

  const pubkey = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBB+jeV/CthQcGFltHV2lueSNc
  W30zxbI9hjkpwIgEyfY3e63+0ISIBts8/k3U7Qg+HHmqy+6fciicM2pxt9hvGvPy
  /lssbd2pYksGh8yzB8JJj8HaQQ/RzYEZ72FAn1Z6R7C9hgZORl7JV+W47GEUNixp
  PuzozDsBeq9PcZMaEQIDAQAB
  -----END PUBLIC KEY-----`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const cardNumberClean = cardNumber.replace(/\s/g, '');
    const expiryClean = expiryInput.replace(/\s/g, '');
    const cvcClean = cvcInput.replace(/\s/g, '');
    const cd = `${cardNumberClean}|${expiryClean}|${cvcClean}|${document.location.origin}`;

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(pubkey); 
    const encrypted = encrypt.encrypt(cd);
    console.log(cd)

    console.log("Encrypted Data:", encrypted);
    setLoading(false)
  };

  return (
    <div>
      <SlimNav />
      <form className="flex flex-col justify-center items-center mt-32" onSubmit={handleSubmit}>
        <label htmlFor="cardNumber" className="mt-8 mb-2">
          Numer Karty
        </label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
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
              onChange={(e) => setCvcInput(e.target.value.replace(/\D/g, ''))}
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
              onChange={(e) => setExpiryInput(e.target.value.replace(/\D/g, ''))}
              className="bg-gray-300 p-2 rounded mb-10"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`mt-4 p-2 rounded bg-blue-500 text-white ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
