import { useEffect, useState } from "react";
import SlimNav from "../../layout/SlimNav";
import * as dayjs from "dayjs";

const ScanPeriod = () => {
  const [date, setDate] = useState("");

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
            value={'nigdy'}
          />
        </div>
        </div>
        <button className="w-1/3 bg-[#B1FFD0] rounded px-4 py-2 text-3xl mt-4 shadow-xl">Bierzący miesiąc</button>
        <button className="w-1/3 bg-[#B1FFD0] rounded px-4 py-2 text-3xl my-4 shadow-xl">Grudzień</button>
        <button className="w-1/3 bg-[#B1FFD0] rounded px-4 py-2 text-3xl shadow-xl">Styczeń</button>

      </div>
    </section>
  );
};

export default ScanPeriod;
