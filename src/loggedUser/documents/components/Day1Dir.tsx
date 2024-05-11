import { Link } from "react-router-dom";
import dir from "../../../assets/docsIcons/folder.png";
import SlimNav from "../../../layout/SlimNav";
import ReturnBtn from "../../../components/ReturnBtn";
import { useUserData } from "../../../context/UserDataContext";
import { motion } from "framer-motion";

import { useState } from "react";

const tileVariants2 = {
  hidden: {
    opacity: 0,
    y: 50,
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
  },
  tap: {
    scale: 0.9,
  },
};

type DirTiles = {
  id: number;
  title: string;
  route: string;
};

const Day1Dir = () => {
  const { userData } = useUserData();
  const [prevYear, setPrevYear] = useState(false);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const dirs: DirTiles[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `${("0" + (i + 1)).slice(-2)}/${currentYear}`,
    route: `${("0" + (i + 1)).slice(-2)}${currentYear}`,
  }));

  const dirs2023: DirTiles[] = [
    {
      id: 1,
      title: "01/2023",
      route: "12023",
    },
    {
      id: 2,
      title: "02/2023",
      route: "22023",
    },
    {
      id: 3,
      title: "03/2023",
      route: "32023",
    },
    {
      id: 4,
      title: "04/2023",
      route: "42023",
    },
    {
      id: 5,
      title: "05/2023",
      route: "52023",
    },
    {
      id: 6,
      title: "06/2023",
      route: "62023",
    },
    {
      id: 7,
      title: "07/2023",
      route: "72023",
    },
    {
      id: 8,
      title: "08/2023",
      route: "82023",
    },
    {
      id: 9,
      title: "09/2023",
      route: "92023",
    },
    {
      id: 10,
      title: "10/2023",
      route: "102023",
    },
    {
      id: 11,
      title: "11/2023",
      route: "112023",
    },
    {
      id: 12,
      title: "12/2023",
      route: "122023",
    },
  ];
  return (
    <section className="font-poppins">
      <SlimNav />
      <div className="mx-auto max-w-[1980px]">
        <h1 className="text-3xl font-black text-center mt-32">
          Poniżej wyświetlone są foldery w których przechowujemy Twoje faktury.
        </h1>
        <h2 className="text-xl text-center my-4">
          Aby wyświetlić faktury z danego miesiąca,{" "}
          <span className="underline"> kliknij na wybrany folder.</span>
        </h2>
        <h3 className="text-lg text-center mb-12">
          W ramach Twojego pakietu{" "}
          <span className="font-black">{userData?.package}</span> Twoje faktury
          są przechowywane do{" "}
          <span className="font-black">
            {userData?.package === "Premium"
              ? "24"
              : userData?.package === "Biznes"
              ? "60"
              : userData?.package === "Standard"
              ? "6"
              : null}{" "}
          </span>
          miesięcy wstecz.
        </h3>
        <div className="flex justify-center items-center">
          <motion.div
            className={`text-lg mb-12 text-center ${
              prevYear
                ? "bg-gray-300 hover:bg-gray-400 border-gray-600"
                : "bg-green-200 hover:bg-green-300 border-green-800"
            } p-3 rounded-full border-2 cursor-pointer font-black`}
            whileHover="hover"
            whileTap="tap"
            variants={tileVariants2}
            onClick={() => setPrevYear((prev) => !prev)}
          >
            2024
          </motion.div>
          <motion.div
            className={`text-lg mb-12 text-center ${
              prevYear
                ? "bg-green-200 hover:bg-green-300 border-green-800"
                : "bg-gray-300 hover:bg-gray-400 border-gray-600"
            }  p-3 rounded-full border-2  cursor-pointer font-black lg:ml-5`}
            whileHover="hover"
            whileTap="tap"
            variants={tileVariants2}
            onClick={() => setPrevYear((prev) => !prev)}
          >
            2023
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 lg:mb-20 lg:w-[70%] mx-auto">
        {!prevYear &&
  dirs.map((item) => (
    <div key={item.id} className="flex flex-col items-center">
      {currentYear === new Date().getFullYear() && Number(item.route.slice(0, 2)) > currentMonth ? (
        // Render non-clickable for future months
        <div className={`text-xl rounded-lg flex-col bg-gray-200 px-8 py-4 mb-5 cursor-not-allowed font-black border-2 border-gray-600`}>
          <img src={dir} alt={item.title} className="mx-auto mb-5" />
          <p className="text-center px-2">{item.title}</p>
        </div>
      ) : (
        // Render clickable for past months and the current month
        <Link to={`/logged/documents/${item.route}`}>
          <div className="text-xl rounded-lg flex-col bg-[#E2FFEF] px-8 py-4 mb-5 hover:scale-105 hover:bg-green-200 cursor-pointer font-black border-2 border-green-800">
            <img src={dir} alt={item.title} className="mx-auto mb-5" />
            <p className="text-center px-2">{item.title}</p>
          </div>
        </Link>
      )}
    </div>
  ))}
          {prevYear &&
            dirs2023.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <Link to={`/logged/documents/${item.route}`}>
                  <div className="text-xl rounded-lg flex-col bg-[#E2FFEF] px-8 py-4 mb-5 hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black">
                    <img src={dir} alt={item.title} className="mx-auto mb-5" />
                    <p className="text-center px-2">{item.title}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="flex flex-row justify-center ">
          <ReturnBtn route={"/logged"} />
        </div>
      </div>
    </section>
  );
};

export default Day1Dir;
