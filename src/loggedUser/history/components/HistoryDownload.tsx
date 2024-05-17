import ReturnBtn from "../../../components/ReturnBtn";
import SlimNav from "../../../layout/SlimNav";
import downloadH from "../../../assets/history/receipt.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";


interface DownHistoryItem {
  id: number;
  month: string;
  user: number;
  count: number;
}

const HistoryDownload = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [downHistory, setDownHistory] = useState<DownHistoryItem[]>([]);


  const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return months[date.getMonth()];
  };

  const getLinkPath = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `/logged/documents/${month}${year}`;
  };

  useEffect(() => {
    fetch("https://api.onebill.com.pl/api/download_history", {
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
        setDownHistory(data)
      });
  }, []);
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Historia pobranych faktur{" "}
        </h1>
        <img src={downloadH} alt="down" className="my-10 h-36" />
        <h2 className="text-2xl text-gray-700 text-center tracking-wider">
          Poniżej możesz sprawdzić historię pobranych faktur z Twojego adresu
          mailowego.
        </h2>
        <table className="table-auto w-11/12 mx-auto mb-10 mt-5">
          <thead>
            <tr className=" border-b-2 font-black text-lg">
              <th className="px-4 py-2 text-center">#</th>
              <th className="px-4 py-2 text-center">Miesiąc Skanowania</th>
              <th className="px-4 py-2 text-center">Czy pobrano faktury?</th>
              <th className="px-4 py-2 text-center">Liczba pobranych faktur</th>
              <th className="px-4 py-2 text-center">Przejdź do folderu</th>
            </tr>
          </thead>
          <tbody>
          {downHistory.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">{formatDate(item.month)}</td>
                <td className="px-4 py-2 text-center">Tak</td>
                <td className="px-4 py-2 text-center">{item.count}</td>
                <td className="px-4 py-2 text-center">
                <Link to={getLinkPath(item.month)} className="flex justify-center text-xl text-blue-400 cursor-pointer hover:scale-110">
                <FaArrowCircleRight />
                  </Link>
                </td>
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

export default HistoryDownload;
