import { Link } from "react-router-dom";
import document from "../../assets/iconsLogged/document.png";
import loading from "../../assets/iconsLogged/loading.png";
import scan from "../../assets/iconsLogged/scan.png";
import seller from "../../assets/iconsLogged/seller.png";
import logoutbtn from "../../assets/iconsLogged/log-out.png";
import logHis from "../../assets/iconsLogged/logHis.png";
import logsettings from "../../assets/iconsLogged/logsettings.png";
import scanning from "../../assets/iconsLogged/scanning.png";
import bell from '../../assets/iconsLogged/bell.png'
import { useAuth } from "../../context/AuthContext";

type HomeTile = {
  id: number;
  name: string;
  linkTo?: string;
  icon: string;
  action?: ()=>void
};

const LoggedHome = () => {
  const {logout} = useAuth()
  const homeLinks: HomeTile[] = [
    { id: 1, name: "Skanuj e-mail", linkTo: "/logged/scanMail", icon: scanning },
    { id: 2, name: "Zsynchronizuj skrzynkę", linkTo: "/logged/syncMail", icon: loading },
    { id: 3, name: "Skanuj dokument", linkTo: "/logged/scanDoc", icon: scan },
    { id: 4, name: "Historia eksportów", linkTo: "/logged/history", icon: logHis },
    { id: 5, name: "Dokumenty", linkTo: "/logged/documents", icon: document },
    { id: 6, name: "Kontrahenci", linkTo: "/logged/clients", icon: seller },
    { id: 7, name: "Ustawienia", linkTo: "/logged/settings", icon: logsettings },
    { id: 8, name: "Wyloguj", action: logout, icon: logoutbtn },
  ];

  return (
    <section className="w-full lg:h-[80%] mt-20 flex flex-col justify-center items-center mx-auto max-w-[1980px]">
        <div className="w-[90%] bg-gray-300 rounded-lg mt-10 p-4 text-lg flex flex-row justify-start items-center font-bold animate-pulse ">
            <img src={bell} alt="bell" className="mr-4"/>
            <p>
            Logujesz się do naszego systemu po raz pierwszy. Skonfiguruj swoją skrzynkę mailową
            </p>
        </div>
      <div className="w-full lg:w-70% h-full flex flex-col lg:flex-row justify-between items-center flex-wrap lg:px-20">
      {homeLinks.map((link) => (
  <div
    key={link.id}
    className="lg:w-1/5 w-[90%] h-60 bg-green-300 lg:mx-1 text-2xl my-5 lg:my-0 rounded-lg font-black flex flex-col justify-center items-center border-2 hover:scale-105 hover:bg-green-200 border-green-800 py-4"
  >
    {link.action ? (
      <div onClick={link.action} className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer">
        <img src={link.icon} alt={link.name} className="h-28 w-28"/>
        <span className="mt-8">{link.name}</span>
      </div>
    ) : link.linkTo ? (
      <Link to={link.linkTo}>
        <img src={link.icon} alt={link.name} className="h-28 w-28"/>
        <span className="mt-8">{link.name}</span>
      </Link>
    ) : (
      <div className="text-center w-full h-full flex flex-col justify-center items-center">
        <img src={link.icon} alt={link.name} className="h-28 w-28"/>
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
