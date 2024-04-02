import { Link, useParams } from "react-router-dom";
import SlimNav from "../../../layout/SlimNav";
import dir from "../../../assets/docsIcons/dir.png";
import { useEffect } from "react";

type DateType = {
  date: string;
};

const MthPage = () => {
  const { date } = useParams<DateType>();
  const year = date ? date.substring(2) : "Unknown";
  const mth = date ? date.substring(0, 2) : "Unknown";

  const requestBody = {
    month: mth,
    year: year
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    // Dodanie parametrów do URL
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
      // Tutaj możesz robić coś z danymi
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  }, [])
  

  return (
    <div>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className=" mt-[20%]">
          <h2 className="text-3xl font-poppins font-bold text-center">
            Faktury z miesiąca:{" "}
            <span className="font-normal">
              {mth}/{year}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MthPage;
