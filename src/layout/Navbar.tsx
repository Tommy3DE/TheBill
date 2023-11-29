import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="items-center font-poppins mt-4">
      <div className=" h-20 w-full flex flex-row justify-center  bg-[#5ffa9d] border-y-4 border-[#1A9367]">
        <img src={logo} alt="logo" className="h-40 ml-20 mt-4" />


          <ul className="flex flex-row list-none p-0 uppercase justify-end mr-20 items-center w-full text-xl font-medium">
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
    </section>
  );
};

export default Navbar;
