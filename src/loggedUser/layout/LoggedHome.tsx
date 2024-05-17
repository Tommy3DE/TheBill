import { Link } from "react-router-dom";
import invoice from "../../assets/iconsLogged/invoice.png";
// import scan from "../../assets/iconsLogged/scan.png";
// import seller from "../../assets/iconsLogged/seller.png";
import logoutbtn from "../../assets/iconsLogged/log-out.png";
import logHis from "../../assets/iconsLogged/logHis.png";
import logsettings from "../../assets/iconsLogged/logsettings.png";
import scan from "../../assets/iconsLogged/scanMail.png";
import automate from "../../assets/iconsLogged/automate.png";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useUserData } from "../../context/UserDataContext";
import NewUserHome from "./NewUserHome";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

export interface SettingsData {
  email: string;
  first_name: string;
  last_name: string;
  NIP: string;
  package: string;
}

export type HomeTile = {
  id: number;
  name: string;
  linkTo?: string;
  icon: string;
  action?: () => void;
};

interface Bookkeeper {
  id: number;
  name: string;
  email: string;
}

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  nip: string;
  package: string;
  lastScan: string;
  bookkeepers: Bookkeeper[];
}

export const tileVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Przesunięcie początkowe w dół
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
    backgroundColor: "#BCFEDA", 
  },
  tap: {
    scale: 0.9,
  },
};

export const formatLastScanDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  return formattedDate;
};

const ToastNotification = () => {
  useEffect(() => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const secondLastDay = lastDay - 1;

    if (today.getDate() === lastDay || today.getDate() === secondLastDay) {
      toast.info(
        "Niedługo usuniemy Twoje najstarsze faktury. Jeśli nie chcesz żeby zostały usunięte, zwiększ swój plan lub pobierz dokumenty na swój dysk lokalny.",
        { 
          position: "top-right",
          autoClose: false
      }
      );
    }
  }, []);

  return <ToastContainer />;
};
const LoggedHome = () => {
  const { logout } = useAuth();
  const [accAdded, setAccAdded] = useState<string>();
  const [settingData, setSettingData] = useState<SettingsData>();
  const [lastScan, setLastScan] = useState<string | undefined>("");
  const { setUserData, userData } = useUserData();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [invoiceCount, setInvoiceCount] = useState<number | undefined>(0);
  const [mailDate, setMailDate] = useState<string | undefined>("");

  const homeLinks: HomeTile[] = [
    {
      id: 1,
      name: "Skanuj e-mail",
      linkTo: "/logged/scanMail",
      icon: scan,
    },
    {
      id: 2,
      name: "Faktury",
      linkTo: "/logged/documents",
      icon: invoice,
    },
    {
      id: 3,
      name: "Historia ",
      linkTo: "/logged/history",
      icon: logHis,
    },
    {
      id: 4,
      name: "Ustawienia",
      linkTo: "/logged/settings",
      icon: logsettings,
    },
    {
      id: 5,
      name: "Auto scan",
      linkTo: "/logged/automate",
      icon: automate,
    },
    { id: 6, name: "Wyloguj", action: logout, icon: logoutbtn },

    // { id: 3, name: "Skanuj dokument", linkTo: "/logged/scanDoc", icon: scan },
    // { id: 6, name: "Kontrahenci", linkTo: "/logged/clients", icon: seller },
  ];
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    let isMounted = true;
    setIsLoading(true);

    const fetchData = async <T,>(
      url: string,
      setData: React.Dispatch<React.SetStateAction<T | undefined>>
    ) => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Unauthorized - Logging out");
          }
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        if (isMounted) setData(data);
      } catch (error) {
        const errorMessage = (error as Error).message;
        console.error("Error:", error);
        if (errorMessage === "Unauthorized - Logging out" && isMounted) {
          logout();
        }
      }
    };

    Promise.all([
      fetchData("https://api.onebill.com.pl/api/bookkeeper", setAccAdded),
      fetchData("https://api.onebill.com.pl/api/user_data", setSettingData),
      fetchData("https://api.onebill.com.pl/api/last_scan", setLastScan),
      fetchData(
        "https://api.onebill.com.pl/api/invoice_count",
        setInvoiceCount
      ),
      fetchData("https://api.onebill.com.pl/api/last_mail", setMailDate),
    ]).finally(() => {
      if (isMounted) setIsLoading(false); // End loading
    });

    // Cleanup function to set isMounted flag to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    if (accAdded && settingData && lastScan) {
      const bookkeepersArray: Bookkeeper[] = Array.isArray(accAdded)
        ? accAdded
        : JSON.parse(accAdded);

      const updatedUserData: UserData = {
        email: settingData.email,
        firstName: settingData.first_name,
        lastName: settingData.last_name,
        nip: settingData.NIP,
        package: settingData.package,
        lastScan: formatLastScanDate(lastScan),
        bookkeepers: bookkeepersArray,
      };

      if (JSON.stringify(userData) !== JSON.stringify(updatedUserData)) {
        setUserData(updatedUserData);
      }
    }
  }, [accAdded, settingData, lastScan, setUserData]);

  return (
    <section className="w-full lg:h-[80%] mt-20 flex flex-col justify-center items-center mx-auto max-w-[1980px]">
      {isLoading ? (
        <img
          className="w-20 h-20 animate-spin mt-32 mx-auto"
          src="https://www.svgrepo.com/show/70469/loading.svg"
          alt="Loading icon"
        />
      ) : accAdded && accAdded.length > 0 ? (
        <><ToastNotification/>
          <div className="w-full lg:w-70% h-full flex flex-col lg:flex-row justify-between items-center lg:px-10">
            <div className="bg-gray-300 rounded-lg shadow-2xl p-1 w-72 mt-36 lg:mx-1 h-24 flex flex-col justify-between">
              <p>Ostatnie skanowanie:</p>
              <p className="font-bold">
                {lastScan ? formatLastScanDate(lastScan) : "-"}
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-2xl p-1 w-72 mt-36 lg:mx-1 h-24 flex flex-col justify-between">
              <p>
                Liczba faktur z
                poprzedniego miesiąca:
              </p>
              <p className="font-bold">{invoiceCount}</p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-2xl p-1 w-72 mt-36 lg:mx-1 h-24 flex flex-col justify-between">
              <p>
                Ostatni e-mail
                do księgowości:
              </p>
              <p className="font-bold">
                {lastScan && mailDate ? formatLastScanDate(mailDate) : "-"}
              </p>{" "}
            </div>
            <div className="bg-gray-300 rounded-lg shadow-2xl p-1 w-72 mt-36 lg:mx-1 h-24 flex flex-col justify-between">
              <p>Ilość skanowań:</p>
              <p className="font-bold">
                {settingData
                  ? settingData.package === "Standard"
                    ? "3"
                    : settingData.package === "Premium"
                    ? "5"
                    : settingData.package === "Biznes"
                    ? "∞"
                    : null
                  : "-"}
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg shadow-2xl p-1 w-72 mt-36 lg:mx-1 h-24 flex flex-col justify-between">
              <p>Bieżący pakiet:</p>
              <p className="font-bold">
                {settingData ? settingData.package : "-"}
              </p>
            </div>
            <div className=" bg-transparent rounded-lg shadow-2xl p-3 w-72 mt-36"></div>
          </div>
          <div className="w-full lg:w-70% h-full flex flex-col lg:flex-row justify-between items-center lg:px-10">
            {homeLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover="hover"
                whileTap="tap"
                className="h-80 lg:w-72 w-full lg:mx-3 text-2xl my-5 lg:my-0 rounded-lg font-black flex flex-col justify-center items-center cursor-pointer"
                variants={tileVariants}
              >
                {link.action ? (
                  <div
                    onClick={link.action}
                    className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer bg-red-300 border-2 border-red-500 rounded-lg"
                  >
                    <div className="bg-white rounded-lg w-[90%] border-2 border-black h-[60%] flex justify-center items-center">
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="h-28 w-28 mx-auto"
                      />
                    </div>
                    <span className="mt-8 text-white">{link.name}</span>
                  </div>
                ) : link.linkTo ? (
                  <Link
                    to={link.linkTo}
                    className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer bg-[#BCFEDA] border-green-500 border-2 rounded-lg"
                  >
                    <div className="bg-white rounded-lg w-[90%] border-2 border-black h-[60%] flex justify-center items-center">
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="h-28 w-28 mx-auto"
                      />
                    </div>
                    <span className="mt-8">{link.name}</span>
                  </Link>
                ) : (
                  <div className="text-center w-full h-full flex flex-col justify-center items-center cursor-pointer">
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="h-28 w-28"
                    />
                    <span className="mt-8">{link.name}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <NewUserHome />
      )}
    </section>
  );
};

export default LoggedHome;
