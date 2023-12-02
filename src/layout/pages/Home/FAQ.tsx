import { Link } from "react-router-dom";
import faq from "../../../assets/icons/faq.png";
const FAQ = () => {
  return (
    <section className="mt-20 items-center mx-[8%] font-poppins mb-32">
      <h1 className="text-start text-4xl font-bold my-10">Masz pytanie?</h1>
      <Link to="/pomoc?item=0">
      <button className="lg:w-1/2 w-full rounded-lg p-5 bg-gray-400 flex flex-row items-center hover:bg-gray-300">
        <img src={faq} alt="faq arrow" className="text-black" />
        <h1 className="text-4xl text-black ml-10 font-extrabold ">FAQ</h1>
      </button>
      </Link>
    </section>
  );
};

export default FAQ;
