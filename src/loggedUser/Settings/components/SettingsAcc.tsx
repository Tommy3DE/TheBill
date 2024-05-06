import SlimNav from "../../../layout/SlimNav";
import acc from "../../../assets/accountant.png";
import ReturnBtn from "../../../components/ReturnBtn";
import { useEffect, useState } from "react";

const SettingsAcc = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [accName, setAccName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("https://api.onebill.com.pl/api/bookkeeper", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAccName(data[0].email);
        //   console.log(accName)
      });
  }, []);
  return (
    <section className="mx-auto">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Zmień adres e-mail biura księgowego{" "}
        </h1>
        <img src={acc} alt="hour" className="my-10 h-36" />
        <h2 className="text-2xl text-gray-700 text-center tracking-wider">
          Adres e-mail biura księgowego na który wysyłane są Twoje faktury:{" "}
        </h2>

        <input
          type="text"
          className="lg:w-1/4 w-full bg-gray-300 text-black rounded-full py-2 my-10 text-center text-2xl  tracking-wider"
          value={accName}
          disabled={!isEditing}
        />
        <button
          className="uppercase font-playFair text-2xl px-10 py-2 text-white bg-[#1A9367] mb-12 rounded-xl"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          Edytuj
        </button>
        <div className="flex justify-center">
          <ReturnBtn route="/logged" />
        </div>
      </div>
    </section>
  );
};

export default SettingsAcc;
