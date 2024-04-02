import { useParams } from "react-router-dom";
import SlimNav from "../../../layout/SlimNav";
// import dir from "../../../assets/docsIcons/dir.png";
import { useEffect, useState } from "react";

type DateType = {
  date: string;
};

const MthPage = () => {
  const [invoices, setInvoices] = useState([])
  const { date } = useParams<DateType>();
  const year = date ? date.substring(2) : "Unknown";
  const mth = date ? date.substring(0, 2) : "Unknown";

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const url = new URL('https://api.onebill.com.pl/api/invoice');
    url.searchParams.append("month", mth);
    url.searchParams.append("year", year);

    fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setInvoices(data)
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  }, [])
  

  return (
    <div>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className=" mt-[10%]">
          <h2 className="text-3xl font-poppins font-bold text-center">
            Faktury z miesiąca:{" "}
            <span className="font-normal">
              {mth}/{year}
            </span>
            {invoices.length === 0 ? <p className="mt-[10%] textxl text-gray-400">Brak faktur</p>  : <p>Oto faktury</p>}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MthPage;
