import history from "../../../assets/iconsLogged/logHis.png";
import { Link } from "react-router-dom";

type HistoryTiles = {
  id: number;
  title: string;
  route: string;
  message: string;
};
const HistoryRoutes = () => {
  const hisTiles: HistoryTiles[] = [
    {
      id: 1,
      title: "Historia skanowania skrzynki",
      route: "",
      message:
        "Jeśli chcesz sprawdzić historię skanowania skrzynki, wybierz panel “historia skanowania skrzynki”. ",
    },
    {
      id: 2,
      title: "Historia maili wysłanych do księgowego",
      route: "",
      message:
        "W panelu “historia maili wysłanych do księgowego” sprawdzisz kiedy i jakie dokumenty zostały wysłane do Twojego biura księgowego",
    },
    {
      id: 3,
      title: "Historia pobranych faktur",
      route: "",
      message:
        "Historia pobranych faktur i aktualizacji Twojego folderu z dokumentami, znajduje się w panelu “historia pobranych faktur”",
    },
    {
      id: 4,
      title: "Historia skanów dokumentów papierowych",
      route: "",
      message:
        "Historia skanowania dokumentów papierowych, jest dostępna w poniższym panelu.",
    },
  ];
  return (
    <section className=" font-poppins">
      <div className="flex flex-col mt-32 mx-10 h-1/4">
        <div className="flex flex-row justify-start mb-5 items-center">
          <h1 className="text-4xl font-black ">Historia konta</h1>
          <img src={history} alt="settings" className="h-10 ml-5" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-0 mx-5">
        {hisTiles.map((item) => (
          <div
            key={item.id}
            className=" lg:w-[15%] w-full  mx-5 flex flex-col justify-center lg:py-14  "
          >
            <div className="flex flex-col justify-center items-center my-1">
              <div className="bg-[#CFFFF1] border-2 border-green-700 py-1 px-2 text-center rounded-lg flex justify-center items-center h-[140px]">
                <p>{item.message}</p>
              </div>
              <div className="h-10 w-1 bg-green-300 rounded items-center"/>
            </div>
            <div className="flex text-xl  rounded-lg flex-col justify-evenly items-center bg-green-300 lg:h-[300px] h-80 mb-5  hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black">
              <p className="text-center px-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={'/logged'} className=" lg:mx-10 mx-5">
        <button className="px-4 py-2 hover:scale-105 font-extrabold text-xl rounded  bg-red-400 text-white lg:w-auto w-[90%]">
        Wstecz
        </button>
        
      </Link>
    </section>
  );
};

export default HistoryRoutes;
