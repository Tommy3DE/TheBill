import ReturnBtn from "../../../components/ReturnBtn";
import SlimNav from "../../../layout/SlimNav";
import hour from "../../../assets/history/hourglass.png";
import { useEffect, useState } from "react";

interface ScanHistoryItem {
  id: number;
  date: string;
  invoice_count: number;
  deleted_count: number;
  added_count: number;
  limit: number;
}

const HistoryScan = () => {
  const [scanHistory, setScanHistory] = useState<ScanHistoryItem[]>([]);

  const accessToken = localStorage.getItem("accessToken");

  const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return months[date.getMonth()];
  };

  useEffect(() => {
    fetch("https://api.onebill.com.pl/api/scan_history", {
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
        setScanHistory(data);
      });
  }, [accessToken]);
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Historia skanowania adresu e-mail
        </h1>
        <img src={hour} alt="hour" className="my-10 h-36" />
        <h2 className="text-2xl text-gray-700 text-center tracking-wider">
          Poniżej możesz sprawdzić historię skanowania swojej skrzynki mailowej.
        </h2>
        <table className="table-auto w-11/12 mx-auto mb-10 mt-5">
          <thead>
            <tr className=" border-b-2 font-black text-lg">
              <th className="px-4 py-2 text-center">#</th>
              <th className="px-4 py-2 text-center">Miesiąc Skanowania</th>
              <th className="px-4 py-2 text-center">Liczba faktur</th>
              <th className="px-4 py-2 text-center">Usunięte dokumenty</th>
              <th className="px-4 py-2 text-center">Dodane dokumenty</th>
              <th className="px-4 py-2 text-center">Pozostało skanowań</th>
            </tr>
          </thead>
          <tbody>
            {scanHistory.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">{formatDate(item.date)}</td>
                <td className="px-4 py-2 text-center">{item.invoice_count}</td>
                <td className="px-4 py-2 text-center">{item.deleted_count}</td>
                <td className="px-4 py-2 text-center">{item.added_count}</td>
                <td className="px-4 py-2 text-center">{item.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-12">
          <ReturnBtn route="/logged/history" />
        </div>
      </div>
    </div>
  );
};

export default HistoryScan;
