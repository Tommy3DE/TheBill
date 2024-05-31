import { Link } from "react-router-dom";
import dir from "../../../assets/docsIcons/folder.png";
import SlimNav from "../../../layout/SlimNav";
import ReturnBtn from "../../../components/ReturnBtn";
import { useUserData } from "../../../context/UserDataContext";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export const tileVariants2 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 10 } },
  hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  tap: { scale: 0.9 },
};
// const PackageSwitcher = () => {
//   const { userData, setUserData } = useUserData();

//   const handleSetPackage = (newPackage: string) => {
//     if (userData) {
//       // Set new package preserving other user data
//       setUserData({ ...userData, package: newPackage });
//     }
//   };

//   return (
//     <div>
//       <h2>Current Package: {userData?.package}</h2>
//       <button 
//         onClick={() => handleSetPackage('Standard')}
//         style={{ marginRight: "10px", padding: "8px 20px", cursor: "pointer" }}
//       >
//         Set Standard
//       </button>
//       <button 
//         onClick={() => handleSetPackage('Biznes')}
//         style={{ padding: "8px 20px", cursor: "pointer" }}
//       >
//         Set Biznes
//       </button>
//     </div>
//   );
// };

type DirTiles = {
  id: number;
  title: string;
  route: string;
  year: number;
  month: number;
  isAccessible: boolean;
};

const Day1Dir = () => {
  const { userData } = useUserData();
  const [prevYear, setPrevYear] = useState(false);
  const currentDate = useMemo(() => new Date(), []);
  const currentMonth = currentDate.getMonth() + 1; 
  const currentYear = currentDate.getFullYear();

  const monthsBack = useMemo(() => {
    switch (userData?.package) {
      case "Pakiet Standard":
        return 6;
      case "Pakiet Premium":
        return 24;
      case "Pakiet Biznes":
        return 60;
      default:
        return 12;
    }
  }, [userData?.package]);

  const isAccessible = (year: number, month: number): boolean => {
    const targetDate = new Date(year, month - 1, 1);
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() - monthsBack);
    return targetDate >= maxDate && (year < currentYear || (year === currentYear && month <= currentMonth));
  };

  const dirs = useMemo(() => {
    let years = prevYear ? [currentYear - 1] : [currentYear];
    return years.flatMap(year =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `${("0" + (i + 1)).slice(-2)}/${year}`,
        route: `${("0" + (i + 1)).slice(-2)}${year}`,
        year,
        month: i + 1,
        isAccessible: isAccessible(year, i + 1),
      }))
    );
  }, [currentYear, prevYear, monthsBack, currentMonth]);

  return (
    <section className="font-poppins">
      <SlimNav />
      <div className="mx-auto max-w-[1980px]">
        <h1 className="text-3xl font-black text-center mt-32">
          Poniżej wyświetlone są foldery w których przechowujemy Twoje faktury.
        </h1>
        <h2 className="text-xl text-center my-4">
          Aby wyświetlić faktury z danego miesiąca,{" "}
          <span className="underline">kliknij na wybrany folder.</span>
        </h2>
        <div className="flex justify-center items-center space-x-4 my-4">
          <motion.div
            className={`text-lg mb-12 text-center ${!prevYear ? "bg-green-200 hover:bg-green-300 border-green-800" : "bg-gray-300 hover:bg-gray-400 border-gray-600"} p-3 rounded-full border-2 cursor-pointer font-black`}
            whileHover="hover"
            whileTap="tap"
            variants={tileVariants2}
            onClick={() => setPrevYear(false)}
          >
            {currentYear}
          </motion.div>
          <motion.div
            className={`text-lg mb-12 text-center ${prevYear ? "bg-green-200 hover:bg-green-300 border-green-800" : "bg-gray-300 hover:bg-gray-400 border-gray-600"} p-3 rounded-full border-2 cursor-pointer font-black`}
            whileHover="hover"
            whileTap="tap"
            variants={tileVariants2}
            onClick={() => setPrevYear(true)}
          >
            {currentYear - 1}
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 lg:mb-20 lg:w-[70%] mx-auto">
          {dirs.map((item: DirTiles) => (
            <div key={item.id} className="flex flex-col items-center">
              {item.isAccessible ? (
                <Link to={`/logged/documents/${item.route}`}>
                  <div className="text-xl rounded-lg flex-col bg-[#E2FFEF] px-8 py-4 mb-5 hover:scale-105 hover:bg-green-200 cursor-pointer font-black border-2 border-green-800">
                    <img src={dir} alt={item.title} className="mx-auto mb-5" />
                    <p className="text-center px-2">{item.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="text-xl rounded-lg flex-col bg-gray-200 px-8 py-4 mb-5 cursor-not-allowed font-black border-2 border-gray-600">
                  <img src={dir} alt={item.title} className="mx-auto mb-5" />
                  <p className="text-center px-2">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center">
          <ReturnBtn route={"/logged"} />
        </div>
      </div>
    </section>
  );
};

export default Day1Dir;
