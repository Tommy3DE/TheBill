import { Link } from "react-router-dom";
import acc from "../../../assets/accountant.png";
import card from "../../../assets/settings/card.png";
import tax from "../../../assets/settings/tax.png";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { tileVariants } from "../../layout/LoggedHome";

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
      title: "Dane do faktury",
      route: "-",
      img: tax,
    },
  ];
  return (
    <section>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mx-0 mx-5 py-14 mt-36">
        {settings.map((item) => (
          <motion.div
            key={item.id}
            whileHover="hover"
            whileTap="tap"
            variants={tileVariants}
            className=" h-96 lg:w-72 w-full lg:mx-3 text-2xl my-5 lg:my-0 rounded-lg font-black  cursor-pointer bg-[#BCFEDA] border-2 border-[#1A9367]"
          >
            <Link to={item.route} className="lg:w-2/12 w-full mx-2 ">
              <div key={item.id}>
                <div className="bg-white w-11/12 mx-auto rounded-xl border-gray-500 border-2">
                  <img src={item.img} alt="icon" className="p-5 h-44 mx-auto" />
                </div>
                <p className="p-12 text-2xl text-center">{item.title}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SettingsRoutes;
