import SlimNav from "../../layout/SlimNav";
import { tileVariants } from "../layout/LoggedHome";
import hour from "../../assets/history/hourglass.png";
import fast from "../../assets/history/fast.png";
import receipt from "../../assets/history/receipt.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReturnBtn from "../../components/ReturnBtn";

type TileType = {
  id: number;
  name: string;
  linkTo: string;
  icon: string;
};

const History = () => {
  const tiles: TileType[] = [
    {
      id: 1,
      name: "Historia skanowania skrzynki e-mail",
      linkTo: "/logged/history/scan",
      icon: hour,
    },
    {
      id: 2,
      name: "Historia pobranych faktur",
      linkTo: "/logged/history/download",
      icon: receipt,
    },
    {
      id: 2,
      name: "Historia korespondencji z ksiegowym",
      linkTo: "/logged/history/correnspondence",
      icon: fast,
    },
  ];
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <h1 className="text-4xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Historia
        </h1>
        <h2 className="text-2xl text-gray-700 text-center tracking-wider mt-5">
          Poniżej możesz sprawdzić historię skanowania, pobranych faktur, oraz
          maili wysłanych do księgowości.
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-center my-10">
          {tiles.map((x) => (
            <motion.div
              key={x.id}
              whileHover="hover"
              whileTap="tap"
              className="h-80 lg:w-72 w-full lg:mx-3 text-2xl my-5 lg:my-0 rounded-lg font-black flex flex-col justify-center items-center cursor-pointer"
              variants={tileVariants}
            >
              <Link
                to={x.linkTo}
                className={`text-center w-full h-full flex flex-col justify-center items-center cursor-pointer ${
                  x.id === 1 || x.id === 2
                    ? "bg-[#BCFEDA] border-green-500"
                    : "bg-gray-300 border-gray-500"
                } border-2   rounded-lg`}
              >
                <div className="bg-white rounded-lg w-[90%] border-2 border-black h-[60%] flex justify-center items-center">
                  <img
                    src={x.icon}
                    alt={x.name}
                    className="h-28 w-28 mx-auto"
                  />
                </div>
                <span className="mt-8">{x.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <ReturnBtn route="/logged" />
      </div>
    </div>
  );
};

export default History;
