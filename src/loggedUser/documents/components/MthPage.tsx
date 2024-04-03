import { useParams } from "react-router-dom";
import SlimNav from "../../../layout/SlimNav";
// import dir from "../../../assets/docsIcons/dir.png";
import { useEffect, useState } from "react";
import { CiBoxList } from "react-icons/ci"; //lista

import { HiOutlineSquares2X2 } from "react-icons/hi2"; // miniaturki


type DateType = {
  date: string;
};
type InvoiceType = {
  date: string;
  id: number;
  name: string;
  sender: string;
  thumbnail: string;
};

const MthPage = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [thumbView, setThumbView] = useState<boolean>(false);

  const { date } = useParams<DateType>();

  const interpretDate = (date: string) => {
    if (!date) return { year: "Unknown", month: "Unknown" };

    const year = date.substring(date.length - 4);
    const month = date.substring(0, date.length - 4);

    return { year, month };
  };

  const { year, month } = interpretDate(date ?? "");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const url = new URL("https://api.onebill.com.pl/api/invoice");
    url.searchParams.append("month", month);
    url.searchParams.append("year", year);

    fetch(url.toString(), {
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
        setInvoices(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, [date]);

  const handleImageClick = (thumbnail: string) => {
    setSelectedImage(thumbnail);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className=" mt-[10%]">
          <h2 className="text-3xl font-poppins font-bold text-center mb-[8%]">
            Faktury z miesiąca:{" "}
            <span className="font-normal">
              {month}/{year}
            </span>
          </h2>
          {isLoading ? (
            <img
              className="w-20 h-20 animate-spin mt-32 mx-auto"
              src="https://www.svgrepo.com/show/70469/loading.svg"
              alt="Loading icon"
            />
          ) : invoices.length === 0 ? (
            <p className="mt-[10%] text-xl text-gray-400">Brak faktur</p>
          ) : (
            <>
            <div className="flex flex-row justify-center text-5xl">
              <CiBoxList className={`p-2 ${!thumbView ? 'bg-green-700 text-white' : ''}`} onClick={()=>setThumbView(prev=>!prev)}/>
              <HiOutlineSquares2X2 className={`p-2 ${thumbView ? 'bg-green-700 text-white' : ''}`} onClick={()=>setThumbView(prev=>!prev)}/>
            </div>
            {thumbView && <div className="flex flex-row flex-wrap justify-center items-center ">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="w-1/4 "
                  onClick={() => handleImageClick(invoice.thumbnail)}
                >
                  <img
                    src={`data:image/jpeg;base64,${invoice.thumbnail}`}
                    alt="Thumbnail"
                    className="border-2 my-2 p-1 w-42 h-64 object-cover mx-auto"
                  />
                </div>
              ))}
            </div>}
            {!thumbView && <div className="mt-8 font-poppins">
                <table className="table-auto w-11/12 mx-auto ">
                  <thead>
                    <tr className=" border-b-2 font-black text-lg">
                      <th className="px-4 py-2 text-start">ID</th>
                      <th className="px-4 py-2 text-start">Nazwa Pliku</th>
                      <th className="px-4 py-2 text-start">Otrzymano od</th>
                      <th className="px-4 py-2 text-start">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className={``}>
                        <td className=" px-4 py-2">{invoice.id}</td>
                        <td className=" px-4 py-2">{invoice.name}</td>
                        <td className=" px-4 py-2">{invoice.sender}</td>
                        <td className=" px-4 py-2">{new Date(invoice.date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>}
            </>
          )}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <img
                src={`data:image/jpeg;base64,${selectedImage}`}
                alt="Enlarged thumbnail"
                className="max-w-3/4 max-h-3/4"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "75%",
                  maxHeight: "75%",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MthPage;
