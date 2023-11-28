import React from "react";
import homeIcon from "../../assets/iconsLogged/home.png";
import docsIcon from "../../assets/iconsLogged/docs.png";
import moneyIcon from "../../assets/iconsLogged/money.png";
import historyIcon from "../../assets/iconsLogged/history.png";
import settingsIcon from "../../assets/iconsLogged/settings.png";
import reportIcon from "../../assets/iconsLogged/report.png";
import cardIcon from "../../assets/iconsLogged/card.png";
import fab from "../../assets/pricing/fab.png";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  icon: string;
};

const Sidebar: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Menu", icon: homeIcon },
    { id: 2, name: "Dokumenty", icon: docsIcon },
    { id: 3, name: "Wydatki", icon: moneyIcon },
    { id: 4, name: "Historia", icon: historyIcon },
    { id: 5, name: "Ustawienia", icon: settingsIcon },
    { id: 6, name: "Raporty", icon: reportIcon },
    { id: 7, name: "Kontakt", icon: cardIcon },
  ];

  return (
    <nav className="flex flex-col h-screen p-4 bg-[#010005] w-1/6 font-poppins">
      <div className="flex flex-col justify-center items-center mb-20 mt-5">
        <img src={fab} alt="testowe" className="rounded-full h-20 w-20" />
        <h3 className="text-lg text-white">Jan Kowalski</h3>
      </div>
      <ul className="flex-grow space-y-2 overflow-y-auto">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex items-center p-2 hover:bg-gray-300"
          >
            <img
              src={category.icon}
              alt={`${category.name} icon`}
              className="mr-2 h-10 w-10"
            />
            <p className="text-white text-2xl">{category.name}</p>
          </li>
        ))}
      </ul>
      <Link to="/">
      <button className="p-2 w-full mt-auto bg-red-500 text-white hover:bg-red-600">
        Wyloguj
      </button>
      </Link>
    </nav>
  );
};

export default Sidebar;
