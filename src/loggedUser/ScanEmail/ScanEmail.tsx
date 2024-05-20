import { Link } from "react-router-dom";
import SlimNav from "../../layout/SlimNav";
import ReturnBtn from "../../components/ReturnBtn";
import mail from "../../assets/iconsLogged/email.png";
import { useEffect, useState } from "react";
import { formatLastScanDate } from "../layout/LoggedHome";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  nip: string;
  package: string;
  lastScan: string;
  bookkeepers: Bookkeeper[];
}

interface Bookkeeper {
  id: number;
  name: string;
  email: string;
}

const ScanEmail = () => {
  const [data, setData] = useState<UserData>();
  const [lastScan, setLastScan] = useState<string>("");
  const [scan, setScan] = useState<string>();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    fetch("https://api.onebill.com.pl/api/user_data", {
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
        setData(data);
      });
    fetch("https://api.onebill.com.pl/api/invoice_count", {
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
        setScan(data);
      });
    fetch("https://api.onebill.com.pl/api/last_scan", {
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
        setLastScan(data);
      });
  }, []);

  return (
    <section>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className="mt-36 lg:mx-[10%] mx-[2%] font-poppins text-center">
          <h1 className="text-4xl font-black">
            W tym panelu możesz rozpocząć skanowanie swojej skrzynki e-mail
          </h1>
          <h2 className="text-2xl mt-5">
            Skanowanie rozpocznie się od momentu, w którym zakończyło się
            ostatnie skanowanie.{" "}
          </h2>
          <div className="bg-gray-300 p-4 xl:w-[40%] mx-auto rounded-3xl my-12">
            <div className="bg-white flex flex-row justify-center items-center rounded-3xl px-4 py-2">
              <img src={mail} alt="mail" />
              <h1 className="lg:text-2xl text-xl font-black ml-2">
                {data?.email}
              </h1>
            </div>
            <div className="bg-white flex flex-col justify-between items-center rounded-3xl px-4 py-2 mt-5 text-small">
              <div className="flex flex-row justify-between w-full">
                <div>Ostatnie skanowanie:</div>
                <div>{formatLastScanDate(lastScan)}</div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <span>Liczba faktur z zeszłego miesiąca:</span>
                <span>{scan}</span>
              </div>
            </div>
            <Link to={"/logged/scanMail/scanPeriod"}>
              <button className=" text-bold mt-5 rounded-3xl w-full bg-[#1A9367] uppercase font-playFair text-2xl text-white font-bold tracking-wider py-4  hover:bg-green-800">
                Rozpocznij Skanowanie
              </button>
            </Link>
          </div>

          <div className="">
            <ReturnBtn route="/logged" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanEmail;
