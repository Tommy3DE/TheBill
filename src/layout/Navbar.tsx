import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <section className="items-center font-poppins">
      <div className=" h-20 w-full lg:flex hidden flex-row justify-center  bg-[#92E3A9] bg-opacity-20">
        <img src={logo} alt="logo" className="h-40 ml-20 mt-2" />
        <ul className="flex flex-row list-none p-0 uppercase justify-around ml-28 items-center w-full text-2xl font-medium ">
          <Link to="/" className="cursor-pointer hover:text-[#50DEF1]">
            Home
          </Link>
          <Link to="/funkcje" className="cursor-pointer hover:text-[#50DEF1]">
            Funkcje
          </Link>
          <Link to="/cennik" className="cursor-pointer hover:text-[#50DEF1]">
            Cennik
          </Link>
          <Link to="/pomoc" className="cursor-pointer hover:text-[#50DEF1]">
            Pomoc
          </Link>
          <Link to="/blog" className="cursor-pointer hover:text-[#50DEF1]">
            Blog
          </Link>
          <div>
            <Link to="/logged">
              <button className="uppercase cursor-pointer mr-5 bg-[#92E3A9] px-5 py-2 rounded-full hover:text-white hover:scale-105">
                Logowanie
              </button>
            </Link>
            <Link to="/newUser">
              <button className="text-black uppercase px-5 py-2 bg-white border-2 border-green-700 rounded-full text-2xl hover:text-green-700 hover:scale-105">
                Załóż konto
              </button>
            </Link>
          </div>
        </ul>
      </div>
      <div className="flex lg:hidden flex-row justify-between items-center mx-5">
        <img src={logo} alt="logo" className="h-24" />
        <GiHamburgerMenu
          className="text-4xl mb-6 text-[#1A9367]"
          onClick={handleOpen}
        />
      </div>
      <div
        className={`h-screen w-screen top-0 left-0 bg-green-600 bg-opacity-[98%] fixed ${
          isOpened ? "visible opacity-100" : "invisible opacity-0"
        } transition-opacity duration-500 ease-in-out`}
        onClick={handleOpen}
      >
        <IoMdCloseCircleOutline className="w-full absolute text-5xl top-10 text-white" />
        <ul className=" text-white font-black flex flex-col list-none p-0 uppercase justify-center items-center w-full text-4xl tracking-wider h-screen">
          <Link to="/" className="mb-5">
            Home
          </Link>
          <Link to="/funkcje" className="mb-5">
            Funkcje
          </Link>
          <Link to="/cennik" className="mb-5">
            Cennik
          </Link>
          <Link to="/pomoc" className="mb-5">
            Pomoc
          </Link>
          <Link to="/blog" className="mb-5">
            Blog
          </Link>
          <Link to="/logged" className="mb-5">
            Logowanie
          </Link>
          <Link to="/newUser">
            <button className="text-black font-[20px] uppercase px-2 py-3 bg-[#50DEF1] rounded-md text-xl hover:text-white hover:scale-105">
              Załóż konto
            </button>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
