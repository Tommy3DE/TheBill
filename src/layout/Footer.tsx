import invoice from "../assets/image 11.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-8 items-center mx-[8%] font-poppins">
      <div className="flex flex-col">
        <img src={invoice} alt="invoice img"  className="rounded-xl"/>
        <div className="flex lg:flex-row flex-col justify-between w-full mb-10 border-b-2 border-black">
          <ul className="flex flex-row font-bold my-20">
            <li>About Us</li>
            <li className="mx-5">Contact Us</li>
            <li>FAQs</li>
            <li className="mx-5">Support</li>
            <li>Blog</li>
          </ul>
          <div className="lg:flex lg:flex-row my-20 hidden text-lg">
            <FaFacebook />
            <FaInstagram className="mx-2" />
            <FaXTwitter />
            <FaLinkedin className="mx-2" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center mb-10">
          <p>© 2023 OneBill All rights reserved.</p>
          <p className="mx-8 hidden lg:block">Privacy Policy</p>
          <p className="mr-8 hidden lg:block">Terms and Conditions</p>
          <p className=" hidden lg:block">Cookie Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
