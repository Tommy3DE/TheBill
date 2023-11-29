import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div className="w-full bg-[#53F89E] h-48 mt-8">
      <div className="flex flex-row items-center ml-[6%] mt-[1%]">
        <FaLocationDot className="text-7xl" />
        <div className="flex flex-col">
          <h2 className="text-2xl font-black">Gdzie nas znaleźć</h2>
          <h3 className="text-xl">ul. Adwentowicza 13 m.12</h3>
          <h3 className="text-xl">92-532 Łódź</h3>
        </div>
      </div>
    </div>
  );
};

export default Address;
