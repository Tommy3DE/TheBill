import ReturnBtn from "../../../components/ReturnBtn";
import SlimNav from "../../../layout/SlimNav";
import card from "../../../assets/settings/card.png";
import { useUserData } from "../../../context/UserDataContext";
import { pricing } from "../../../layout/pages/Cennik/PricingOptions";
import { motion } from "framer-motion";
import { tileVariants2 } from "../../documents/components/Day1Dir";
import cross from "../../../assets/settings/cross 1.png";
import debit from "../../../assets/settings/debit-card 1.png";
import payment from "../../../assets/settings/payment-day 2.png";
import { Link } from "react-router-dom";

const Subscription = () => {
  const { userData } = useUserData();
  // console.log(pricing);

  const packageDetails = (packageName: string): JSX.Element | null => {
    const details = pricing.find((p) => p.title.includes(packageName));
    if (!details) return null;

    return (
      <div className="text-center p-4 border-2 rounded-lg max-w-md mx-auto my-8 bg-gray-100">
        <h3 className="text-2xl font-bold mb-2">{details.title}</h3>
        <ul className="list-disc text-left ml-5 mt-2">
          {Object.entries(details)
            .filter(([key]) => key.startsWith("point"))
            .map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
      </div>
    );
  };

  const tiles = [
    {
      id: 1,
      img: cross,
      text: "Zakończ subskrypcję",
      route: "/logged/subscription/cancel-sub",
    },
    {
      id: 2,
      img: debit,
      text: "Zmień dane płatnicze",
      route: "/logged/subscription/change-payment-data",
    },
    {
      id: 3,
      img: payment,
      text: "Zmień pakiet",
      route: "/logged/subscription/change-plan",
    },
  ];

  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px]">
        <h1 className="text-4xl text-center font-bold tracking-wider mt-[7%]">
          Zarządzaj swoją subskrypcją
        </h1>
        <img src={card} alt="subscription" className="mx-auto my-7" />
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          Dane subskrypcji dla konta sparowanego z adresem:
          <br />
          <span className="text-bold text-black text-2xl">
            {userData?.email}
          </span>
        </h2>
        {userData?.package ? packageDetails(userData.package) : null}
        <div className="flex w-full justify-center items-center my-10">
          {tiles.map((x) => (
            <Link to={x.route}>
              <motion.div
                className={` flex flex-col text-xl bg-gray-100 justify-evenly items-center font-black border-2 border-gray-500 cursor-pointer px-2 py-5 mx-10 w-64 h-56 rounded-xl text-black font-poppins uppercase`}
                variants={tileVariants2}
                key={x.id}
                whileHover="hover"
                whileTap="tap"
              >
                <img src={x.img} alt="pic" />
                <p className="text-center">{x.text}</p>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <ReturnBtn route="/logged" />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
