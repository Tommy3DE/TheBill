// import invoice from "../assets/image 11.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" items-center mx-[8%] font-poppins">
      <div className="flex flex-col">
        {/* <img src={invoice} alt="invoice img"  className="rounded-xl"/> */}
        <div className="flex lg:flex-row flex-col justify-between w-full mb-10 border-b-2 border-black py-12">
          <ul className="flex flex-row font-bold lg:text-2xl text-md font-playFair">
            <li>O Nas</li>
            <li className="mx-8">Skontaktuj się z Nami</li>
            <li>FAQs</li>
            <li className="mx-8">Pomoc</li>
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
            <p className="mx-8 hidden lg:block">Polityka prywatności</p>
            <p className="mr-8 hidden lg:block">Regulamin </p>
            <p className=" hidden lg:block">Cookies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
