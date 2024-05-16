import ReturnBtn from "../../../components/ReturnBtn";
import SlimNav from "../../../layout/SlimNav";
import fast from "../../../assets/history/fast.png";
import { useEffect, useState } from "react";

interface CorrHistoryItem {
  id: number;
  month: string;
  zip: boolean;
  user: number;
  count: number;
}

const HistoryCorrespondence = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [corrHistory, setCorrHistory] = useState<CorrHistoryItem[]>([]);


  const months = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
    "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return months[date.getMonth()];
  };

  useEffect(() => {
    fetch("https://api.onebill.com.pl/api/mail_history", {
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
        setCorrHistory(data)
      });
  }, []);

  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Historia korespondencji z biurem księgowym{" "}
        </h1>
        <img src={fast} alt="down" className="my-10 h-36" />
        <h2 className="text-2xl text-gray-700 text-center tracking-wider">
          Poniżej możesz sprawdzić historię korespondencji z Twoim biurem
          księgowym.{" "}
        </h2>
        <table className="table-auto w-11/12 mx-auto mb-10 mt-5">
          <thead>
            <tr className=" border-b-2 font-black text-lg">
              <th className="px-4 py-2 text-center">#</th>
              <th className="px-4 py-2 text-center">Miesiąc Skanowania</th>
              <th className="px-4 py-2 text-center">Wysłano do księgowości?</th>
              <th className="px-4 py-2 text-center">Liczba faktur</th>
              <th className="px-4 py-2 text-center">Format</th>
            </tr>
          </thead>
          <tbody>
          {corrHistory.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">{formatDate(item.month)}</td>
                <td className="px-4 py-2 text-center">Tak</td>
                <td className="px-4 py-2 text-center">{item.count}</td>
                <td className="px-4 py-2 text-center">{item.zip === false ? 'PDF' : 'ZIP'}</td>
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

export default HistoryCorrespondence;
