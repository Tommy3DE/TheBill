import { useState } from "react";
import SlimNav from "../SlimNav";
import { toast } from "react-toastify";
import ReturnBtn from "../../components/ReturnBtn";

const ForgotPassPage = () => {
  const [email, setEmail] = useState<string>("");

  const handleForgotPass = async () => {
    const emailParam = encodeURIComponent(email);
    const url = `https://api.onebill.com.pl/api/reset_pass?email=${emailParam}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      toast.info(
        "Jeżeli konto powiązane z tym adresem istnieje, otrzymasz link do zrestartowania hasła",
        {
          position: "top-right",
          autoClose: 7000,
        }
      );
    } else {
      toast.error("Wystąpił problem podczas wysyłania prośby o reset hasła");
    }
  };

  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] mx-auto mt-32 flex flex-col justify-center items-center">
        <h1 className="text-4xl">Zrestartuj hasło</h1>
        <h2 className="text-3xl my-4 text-gray-600">
          Wprowadź e-mail powiązany z kontem OneBill
        </h2>
        <input
          type="text"
          className="bg-gray-200 w-1/3 p-2 rounded-l text-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="w-1/3 flex flex-row-reverse justify-around items-center mt-12">
          {email && (
            <button
              className="uppercase font-playFair text-3xl font-black text-center items-center text-white bg-green-400 px-10 py-4 rounded-2xl hover:bg-green-500"
              onClick={handleForgotPass}
            >
              Wyślij
            </button>
          )}
          <ReturnBtn route='/login'/>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassPage;
