import set from "../../../assets/innerSettingsIcons/set 1.png";
import folder from "../../../assets/innerSettingsIcons/folder 1.png";
import email from "../../../assets/innerSettingsIcons/email 1.png";

type SettingsTiles = {
  id: number;
  title: string;
  route: string;
  icon: string;
};
const SettingsRoutes = () => {
  const settings: SettingsTiles[] = [
    {
      id: 1,
      title: "Zdefiniowane adresy e-mail",
      icon: email,
      route: "",
    },
    {
      id: 2,
      title: "Ścieżki folderów",
      icon: folder,
      route: "",
    },
    {
      id: 3,
      title: "Ogólne ustawienia konta",
      icon: set,
      route: "",
    },
  ];
  return (
    <section >
      <div className="flex flex-col mt-32 mx-10 h-1/4">
        <div className="flex flex-row justify-start mb-5 items-center">
          <h1 className="text-4xl font-extrabold ">Ustawienia</h1>
          <img src={set} alt="settings" className="h-10 ml-5" />
        </div>
        <p className="w-full text-lg p-3 rounded-lg bg-[#A3FEE3] border border-black">
          Wybierz sekcję którą chcesz zaktualizować
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-0 mx-5 py-14">
        {settings.map((item) => (
          <div
            key={item.id}
            className=" lg:w-2/12 w-full text-xl rounded-lg mx-2 flex flex-col justify-evenly py-32 items-center bg-green-300 lg:h-1/3 h-80 mb-5  hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black"
          >
            <img src={item.icon} alt={item.title} className="h-20 w-20" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SettingsRoutes;
