import scanning from "../../../assets/iconsLogged/scanning.png";
import email from "../../../assets/innerSettingsIcons/email 1.png";
import history from "../../../assets/iconsLogged/logHis.png";
import file from "../../../assets/innerSettingsIcons/file.png";
import scan from "../../../assets/iconsLogged/scan.png";

type HistoryTiles = {
  id: number;
  title: string;
  route: string;
  icon: string;
  message: string;
};
const HistoryRoutes = () => {
  const settings: HistoryTiles[] = [
    {
      id: 1,
      title: "Historia skanowania skrzynki",
      icon: scanning,
      route: "",
      message: "Jeśli chcesz sprawdzić historię skanowania skrzynki, wybierz panel “historia skanowania skrzynki”. ",
    },
    {
      id: 2,
      title: "Historia maili wysłanych do księgowego",
      icon: email,
      route: "",
      message: "W panelu “historia maili wysłanych do księgowego” sprawdzisz kiedy i jakie dokumenty zostały wysłane do Twojego biura księgowego",
    },
    {
      id: 3,
      title: "Historia pobranych faktur",
      icon: file,
      route: "",
      message: "Historia pobranych faktur i aktualizacji Twojego folderu z dokumentami, znajduje się w panelu “historia pobranych faktur”",
    },
    {
      id: 3,
      title: "Historia skanów dokumentów papierowych",
      icon: scan,
      route: "",
      message: "Historia skanowania dokumentów papierowych, jest dostępna w poniższym panelu.",
    },
  ];
  return (
    <section>
      <div className="flex flex-col mt-32 mx-10 h-1/4">
        <div className="flex flex-row justify-start mb-5 items-center">
          <h1 className="text-4xl font-extrabold ">Historia konta</h1>
          <img src={history} alt="settings" className="h-10 ml-5" />
        </div>
        <p className="w-full text-lg p-3 rounded-lg bg-[#A3FEE3] border border-black">
          Wybierz sekcję którą chcesz zaktualizować
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-0 mx-5 py-14">
        {settings.map((item) => (
          <div
            key={item.id}
            className=" lg:w-2/12 w-full text-xl rounded-lg mx-2 flex flex-col justify-center py-24 items-center bg-green-300 lg:h-[300px] h-80 mb-5  hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black"
          >
            <img src={item.icon} alt={item.title} className="h-20 w-20" />
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistoryRoutes;
