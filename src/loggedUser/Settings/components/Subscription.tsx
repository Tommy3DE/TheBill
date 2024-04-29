import ReturnBtn from "../../../components/ReturnBtn";
import SlimNav from "../../../layout/SlimNav";
import card from "../../../assets/settings/card.png";
import { useUserData } from "../../../context/UserDataContext";
import { pricing } from "../../../layout/pages/Cennik/PricingOptions";

const Subscription = () => {
  const { userData } = useUserData();
  console.log(pricing);

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
        <div className="flex w-full justify-center items-center">
          <div className=" flex flex-col bg-gray-200 justify-evenly items-center font-black border-2 border-gray-400 px-2 py-5 w-48">
            zakończ subskrypcję
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <ReturnBtn route="/logged" />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
