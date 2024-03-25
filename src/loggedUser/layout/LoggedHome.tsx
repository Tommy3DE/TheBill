import { Link } from "react-router-dom";
import document from "../../assets/iconsLogged/document.png";
import sync from "../../assets/iconsLogged/sync.png";
// import scan from "../../assets/iconsLogged/scan.png";
// import seller from "../../assets/iconsLogged/seller.png";
import logoutbtn from "../../assets/iconsLogged/log-out.png";
import logHis from "../../assets/iconsLogged/logHis.png";
import logsettings from "../../assets/iconsLogged/logsettings.png";
import scanning from "../../assets/iconsLogged/scanning.png";
import bell from "../../assets/iconsLogged/bell.png";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

type HomeTile = {
  id: number;
  name: string;
  linkTo?: string;
  icon: string;
  action?: () => void;
};

const LoggedHome = () => {
  const { logout } = useAuth();
  const [accAdded, setAccAdded] = useState(false);
  const homeLinks: HomeTile[] = [
    {
      id: 1,
      name: "Skanuj e-mail",
      linkTo: "/logged/scanMail",
      icon: scanning,
    },
    {
      id: 2,
      name: "Historia eksportów",
      linkTo: "/logged/history",
      icon: logHis,
    },
    { id: 3, name: "Dokumenty", linkTo: "/logged/documents", icon: document },
    {
      id: 4,
      name: "Ustawienia",
      linkTo: "/logged/settings",
      icon: logsettings,
    },
    {
      id: 5,
      name: "Zsynchronizuj skrzynkę",
      linkTo: "/logged/syncMail",
      icon: sync,
    },
    { id: 6, name: "Wyloguj", action: logout, icon: logoutbtn },

    // { id: 3, name: "Skanuj dokument", linkTo: "/logged/scanDoc", icon: scan },
    // { id: 6, name: "Kontrahenci", linkTo: "/logged/clients", icon: seller },
  ];
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    fetch("https://api.onebill.com.pl/api/bookkeeper", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setAccAdded(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className="w-full lg:h-[80%] mt-20 flex flex-col justify-center items-center mx-auto max-w-[1980px]">
      {accAdded ? null : (
        <div className="w-[90%] bg-gray-300 rounded-lg mt-10 p-4 text-lg flex flex-row justify-start items-center font-bold animate-pulse ">
          <img src={bell} alt="bell" className="mr-4" />
          <p>
            Logujesz się do naszego systemu po raz pierwszy. Skonfiguruj swoją
            skrzynkę mailową
          </p>
        </div>
      )}
      <div className="w-full lg:w-70% h-full flex flex-col lg:flex-row justify-between items-center lg:px-10">
        {homeLinks.map((link) => (
          <div
            key={link.id}
            className=" w-[90%] h-80  lg:mx-1 text-2xl my-5 lg:my-0 rounded-lg font-black flex flex-col justify-center items-center hover:scale-105 hover:bg-green-200 "
          >
            {link.action ? (
              <div
                onClick={link.action}
                className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer bg-red-300 border-2 border-red-500 rounded-lg"
              >
                <div className="bg-white rounded-lg w-[90%] border-2 border-black h-[60%] flex justify-center items-center">
                <img src={link.icon} alt={link.name} className="h-28 w-28 mx-auto" />
                </div>
                <span className="mt-8 text-white">{link.name}</span>
              </div>
            ) : link.linkTo ? (
              <Link
                to={link.linkTo}
                className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer bg-[#BCFEDA] border-2 border-green-500  rounded-lg"
              >
                <div className="bg-white rounded-lg w-[90%] border-2 border-black h-[60%] flex justify-center items-center">
                <img src={link.icon} alt={link.name} className="h-28 w-28 mx-auto" />
                </div>
                <span className="mt-8">{link.name}</span>
              </Link>
            ) : (
              <div className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer">
                <img src={link.icon} alt={link.name} className="h-28 w-28" />
                <span className="mt-8">{link.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoggedHome;
