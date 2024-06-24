import { Link } from "react-router-dom";
import promoPic from "../../../assets/pricing/freepik--Character--inject-535.png";
const FreeTrial = () => {
  return (
    <div className="text-center mt-20 font-playFair text-5xl font-black">
      <h1 className=" text-[#1A9367]">Tylko teraz!</h1>
      <h3>
        Skorzystaj z naszej promocji{" "}
        <span className="text-red-600">14 dni za darmo!</span>
      </h3>
      <div className="flex flex-col lg:flex-row justify-center mt-20 items-center">
        <img src={promoPic} alt="promo" />
        <div>
          <div className="bg-[#83F9CE] w-full rounded-2xl lg:mx-20 text-center py-12 h-auto">
            <h1 className="text-3xl font-bold hover:text-white cursor-pointer">
              <Link to={'/newUser'}>Chcę skorzystać z promocji!
              </Link></h1>
            <p className="text-xl text-gray-500">
              Ciesz się wybranym pakietem przez daw tygodnie!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
