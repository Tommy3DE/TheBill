import { Link, useParams } from "react-router-dom";
import SlimNav from "../../../layout/SlimNav";
import dir from "../../../assets/docsIcons/dir.png";

type DateType = {
  date: string;
};

const MthPage = () => {
  const { date } = useParams<DateType>();
  const year = date ? date.substring(2) : "Unknown";
  const mth = date ? date.substring(0, 2) : "Unknown";
  const fullMth = (mth: string): string => {
    switch (mth) {
      case "01":
        return "Styczeń";
      case "02":
        return "Luty";
      case "03":
        return "Marzec";
      case "04":
        return "Kwiecień";
      case "05":
        return "Maj";
      case "06":
        return "Czerwiec";
      case "07":
        return "Lipiec";
      case "08":
        return "Sierpień";
      case "09":
        return "Wrzesień";
      case "10":
        return "Październik";
      case "11":
        return "Listopad";
      case "12":
        return "Grudzień";
      default:
        return "Nieznany"; // for unknown or incorrect values
    }
  };

  return (
    <div>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <div className="mx-[15%] mt-16 h-[80vh]">
        <h1 className=" font-bold h-1/6 flex flex-row">
          <h2 className="text-3xl">
            Dokumenty {">"} {year} {">"} {fullMth(mth)}{" "}
          </h2>
        </h1>
        <div className="w-full h-5/6 bg-[#53F89E] rounded-lg px-6 pb-8 flex flex-col">
          <div className="flex flex-row items-center">
            <img src={dir} alt="dir" className="h-5 w-7 mr-2" />
            <h1 className="text-xl font-bold my-3">
              Dokumenty za {mth}.{year}
            </h1>
          </div>
          <div className="bg-white rounded-lg h-full">[PLACEHOLDER]</div>
        </div>
      </div>
      <Link to={"/logged/documents"} className="lg:mx-10 mx-5 -mt-5">
        <button className="px-4 py-2 hover:scale-105 font-extrabold text-xl rounded bg-red-400 text-white lg:w-auto w-[90%]">
          Wstecz
        </button>
      </Link>
      </div>
    </div>
  );
};

export default MthPage;
