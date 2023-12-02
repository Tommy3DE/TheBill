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
    <section className="items-center font-poppins mt-4">
      <div className=" h-20 w-full lg:flex hidden flex-row justify-center  bg-[#5ffa9d] border-y-4 border-[#1A9367]">
        <img src={logo} alt="logo" className="h-40 ml-20 mt-4" />
        <ul className="flex flex-row list-none p-0 uppercase justify-end mr-20 items-center w-full text-xl font-medium ">
          <Link to="/" className="mr-12 cursor-pointer hover:text-[#50DEF1]">
            Home
          </Link>
          <Link
            to="/funkcje"
            className="mr-12 cursor-pointer hover:text-[#50DEF1]"
          >
            Funkcje
          </Link>
          <Link
            to="/cennik"
            className="mr-12 cursor-pointer hover:text-[#50DEF1]"
          >
            Cennik
          </Link>
          <Link
            to="/pomoc"
            className="mr-12 cursor-pointer hover:text-[#50DEF1]"
          >
            Pomoc
          </Link>
          <Link
            to="/logged"
            className="cursor-pointer mr-12 hover:text-[#50DEF1] text-[#0449FB]"
          >
            Logowanie
          </Link>
          <Link to="/newUser">
            <button className="text-black font-[20px] uppercase px-2 py-3 bg-[#50DEF1] rounded-md text-xl hover:text-white hover:scale-105 mr-12">
              Załóż konto
            </button>
          </Link>
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
      isOpened ? 'visible opacity-100' : 'invisible opacity-0'
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
