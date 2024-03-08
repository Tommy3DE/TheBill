// import invoice from "../assets/image 11.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Address from "./pages/Pomoc/Address";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" items-center mx-[8%] pt-10 font-poppins">
      <Address />
      <div className="flex flex-col">
        {/* <img src={invoice} alt="invoice img"  className="rounded-xl"/> */}
        <div className="flex lg:flex-row flex-col justify-between w-full mb-10 border-b-2 border-black py-12">
          <ul className="flex flex-row font-bold lg:text-2xl text-md font-playFair">
            <Link to="/o_nas">
              <li>O Nas</li>
            </Link>
            <Link to="/pomoc" className="ml-8">
              <li >Pomoc</li>
            </Link>
          </ul>
          <div className="lg:flex lg:flex-row hidden text-2xl">
            <FaFacebook />
            <FaInstagram className="mx-2" />
            <FaXTwitter />
            <FaLinkedin className="mx-2" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between mb-10 font-playFair">
          <div>
            <p>KVX Digital Solutions Sp. z o.o. </p>
          </div>
          <div className="flex flex-row">
            <Link to={"/polityka_prywatnosci"}>
              <p className="mx-8 hidden lg:block">Polityka prywatności</p>
            </Link>
            <Link to={"/regulamin"}>
              <p className=" hidden lg:block">Regulamin </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
