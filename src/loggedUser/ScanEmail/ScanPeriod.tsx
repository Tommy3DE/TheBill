import { useEffect, useState } from "react";
import SlimNav from "../../layout/SlimNav";

const ScanPeriod = () => {
  const [date, setDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const requestBody = {
    month: selectedPeriod
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 16).replace('T', ' ');
    setDate(formattedDate);
  }, []);

  const handleScan = () => {
    const accessToken = localStorage.getItem("accessToken");
  
    fetch("https://api.onebill.com.pl/api/scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 425) {
          let url = await response.text();
          url = url.replace(/^"|"$/g, '');
          url = decodeURIComponent(url);
  
          const newWindow = window.open(url, '_blank');
          if (newWindow) {
            newWindow.focus();
          } else {
            console.error("Nie udało się otworzyć nowego okna");
          }
          throw new Error(`Network response was Too Early. URL: ${url}`);
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }
  

  return (
    <section className=" font-poppins">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <div className="mt-36 lg:mx-[10%] mx-[2%] flex flex-col justifty-center items-center">
        <h1 className="text-4xl font-black">
          Wybierz miesiąc który chcesz przeskanować:
        </h1>
        <div className="w-2/3">
          <div className="flex flex-row justify-between items-center mt-16 text-2xl">
            <p className="">Dziś jest:</p>
            <input
              type="text"
              className="rounded-lg w-1/3 p-2  bg-gray-300"
              disabled
              value={date}
            />
          </div>
          <div className="flex flex-row justify-between items-center mt-16 text-2xl">
            <p className="">Ostatenie skanowanie miało miejsce:</p>
            <input
              type="text"
              className="rounded-lg w-1/3 p-2  bg-gray-300"
              disabled
              value={"nigdy"}
            />
          </div>
        </div>
        <div className="mt-16">
          <label htmlFor="month-picker" className="text-2xl mr-4">
            Wybierz miesiąc:
          </label>
          <select
            id="month-picker"
            className="rounded-lg p-2 bg-gray-300 text-2xl"
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="">--Wybierz--</option>
            <option value={1}>Styczeń</option>
            <option value={2}>Luty</option>
            <option value={3}>Marzec</option>
            <option value={4}>Kwiecień</option>
            <option value={5}>Maj</option>
            <option value={6}>Czerwiec</option>
            <option value={7}>Lipiec</option>
            <option value={8}>Sierpień</option>
            <option value={9}>Wrzesień</option>
            <option value={10}>Październik</option>
            <option value={11}>Listopad</option>
            <option value={12}>Grudzień</option>
          </select>
        </div>
        {selectedPeriod !== "" && (
          <button
            className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white w-1/5 text-center hover:scale-105 cursor-pointer" onClick={handleScan}
          >
            Skanuj
          </button>
        )}
      </div>
      </div>
    </section>
  );
};

export default ScanPeriod;
