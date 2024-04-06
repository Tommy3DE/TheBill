import set from "../../../assets/innerSettingsIcons/set 1.png";
import { Link } from "react-router-dom";
import acc from "../../../assets/accountant.png";
import bell from "../../../assets/settings/bell.png";
import card from "../../../assets/settings/card.png";
import tax from "../../../assets/settings/tax.png";
import { ReactNode } from "react";

type SettingsTiles = {
  id: number;
  title: ReactNode;
  img: string;
  route: string;
};
const SettingsRoutes = () => {
  const settings: SettingsTiles[] = [
    {
      id: 1,
      title: "Zmień adres biura księgowego",
      route: "/logged/settings/definedAddress",
      img: acc,
    },
    {
      id: 2,
      title: "Zarządzaj subskrypcją",
      route: "",
      img: card,
    },
    {
      id: 3,
      title: "Zarządzaj notyfikacjami",
      route: "/logged/settings/appSettings",
      img: bell,
    },
    {
      id: 4,
      title: "Dane do faktury",
      route: "-",
      img: tax,
    },
  ];
  return (
    <section>
      
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-0 mx-5 py-14 mt-36">
        {settings.map((item) => (
          <Link
            to={item.route}
            className="lg:w-2/12 w-full mx-2 "
            key={item.id}
          >
            <div
              key={item.id}
              className=" w-fulltext-xl rounded-xl flex h-[400px] flex-col items-center justify-around bg-[#BCFEDA] mb-5  hover:scale-105 hover:bg-green-200 border-2 border-[#1A9367] cursor-pointer font-black"
            >
              <div className="bg-white w-[90%] border border-gray-400 rounded-3xl">
                <img src={item.img} alt="icon" className="p-5 h-44 mx-auto" />
              </div>
              <p className="p-12 text-2xl text-center">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SettingsRoutes;
