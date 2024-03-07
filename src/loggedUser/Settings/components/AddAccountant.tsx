import { useState } from "react";
import { toast } from "react-toastify";

type visType = {
  handleVis: () => void;
};

const AddAccountant = ({ handleVis }: visType) => {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const handleBoardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };
  const requestBody = {
    name: name,
    email: mail,
  };

  const handleNewAcc = () => {
    const accessToken = localStorage.getItem("accessToken");

    fetch("https://api.onebill.com.pl/api/bookkeeper", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Biuro księgowe dodane poprawnie", {
            position: "top-right",
            autoClose: 7000,
          })} else {
            toast.error("Błąd dodawania bura księgowego", {
                position: "top-right",
                autoClose: 7000,
              })
          }
          handleVis()
          return response.json();

      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div
      className="h-full w-full bg-gray-600 bg-opacity-80 absolute left-0 top-0 z-10"
      onClick={handleVis}
    >
      <div
        className="relative top-[35%] lg:w-[30%] bg-white z-20 lg:left-[35%] p-5 h-auto rounded-lg"
        onClick={handleBoardClick}
      >
        <div className="flex flex-row text-xl justify-between">
          <label htmlFor="name">Nazwa:</label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 rounded-md"
            placeholder="np. Księgowośc Nowak sp. z o.o."
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="flex flex-row text-xl mt-5  justify-between">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="bg-gray-200 rounded-md"
            placeholder="np. jan@nowak.pl"
            onChange={(e)=>setMail(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="mt-5 px-5 py-3 rounded-lg bg-green-700 text-xl text-white font-extrabold hover:scale-105"
            onClick={handleNewAcc}
          >
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAccountant;
