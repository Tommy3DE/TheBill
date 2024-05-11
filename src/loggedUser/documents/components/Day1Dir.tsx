import { Link } from "react-router-dom";
import dir from "../../../assets/docsIcons/folder.png";
import SlimNav from "../../../layout/SlimNav";
import ReturnBtn from "../../../components/ReturnBtn";
import { useUserData } from "../../../context/UserDataContext";
import { motion } from "framer-motion";

import { useState } from "react";
import { tileVariants } from "../../layout/LoggedHome";
type DirTiles = {
  id: number;
  title: string;
  route: string;
};

const Day1Dir = () => {
  const { userData } = useUserData();
  const [prevYear, setPrevYear] = useState(false);

  const dirs: DirTiles[] = [
    {
      id: 1,
      title: "01/2024",
      route: "12024",
    },
    {
      id: 2,
      title: "02/2024",
      route: "22024",
    },
    {
      id: 3,
      title: "03/2024",
      route: "32024",
    },
    {
      id: 4,
      title: "04/2024",
      route: "42024",
    },
    {
      id: 5,
      title: "05/2024",
      route: "52024",
    },
    {
      id: 6,
      title: "06/2024",
      route: "62024",
    },
    {
      id: 7,
      title: "07/2024",
      route: "72024",
    },
    {
      id: 8,
      title: "08/2024",
      route: "82024",
    },
    {
      id: 9,
      title: "09/2024",
      route: "92024",
    },
    {
      id: 10,
      title: "10/2024",
      route: "102024",
    },
    {
      id: 11,
      title: "11/2024",
      route: "112024",
    },
    {
      id: 12,
      title: "12/2024",
      route: "122024",
    },
  ];

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
          W ramach Twojego pakietu <span className="font-black">{userData?.package}</span> Twoje faktury są
          przechowywane do{" "}<span className="font-black">
          {userData?.package === "Premium"
            ? "24"
            : userData?.package === "Biznes"
            ? "60"
            : userData?.package === "Standard"
            ? "6"
            : null}{" "}</span>
          miesięcy wstecz.
        </h3>
        <div className="flex justify-center items-center">
        <motion.div
          className="text-lg mb-12 text-center bg-[#E2FFEF] hover:bg-green-200 p-3 rounded-lg border-2 border-green-800 cursor-pointer font-black lg:w-[15%]"
          whileHover="hover"
          whileTap="tap"
          variants={tileVariants}
          onClick={() => setPrevYear((prev) => !prev)}
        >
            {prevYear ? 'Przejdź do 2024' : 'Przejdź do 2023'}
        </motion.div>
        </div>
        

        <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 lg:mb-20 lg:w-[70%] mx-auto">
          {!prevYear &&
            dirs.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <Link to={`/logged/documents/${item.route}`}>
                  <div className="text-xl rounded-lg flex-col bg-[#E2FFEF] px-8 py-4 mb-5 hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black">
                    <img src={dir} alt={item.title} className="mx-auto mb-5" />
                    <p className="text-center px-2">{item.title}</p>
                  </div>
                </Link>
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
