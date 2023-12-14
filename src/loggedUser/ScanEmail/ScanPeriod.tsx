import { useEffect, useState } from "react";
import SlimNav from "../../layout/SlimNav";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";

const ScanPeriod = () => {
  const [date, setDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD HH:mm");
    setDate(today);
  }, []);

  return (
    <section className=" font-poppins">
      <SlimNav />
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
            <option value="Styczeń">Styczeń</option>
            <option value="Luty">Luty</option>
            <option value="Marzec">Marzec</option>
            <option value="Kwiecień">Kwiecień</option>
            <option value="Maj">Maj</option>
            <option value="Czerwiec">Czerwiec</option>
            <option value="Lipiec">Lipiec</option>
            <option value="Sierpień">Sierpień</option>
            <option value="Wrzesień">Wrzesień</option>
            <option value="Październik">Październik</option>
            <option value="Listopad">Listopad</option>
            <option value="Grudzień">Grudzień</option>
          </select>
        </div>
        {selectedPeriod !== "" && (
          <Link
            to="/logged/scanMail/scanPeriod/scannedDocs"
            className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white w-1/5 text-center hover:scale-105 cursor-pointer"
          >
            <button>Dalej</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ScanPeriod;
