import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="items-center mx-[8%] font-poppins">
      <div className="h-auto w-full flex flex-row mt-[2%]">
        <img src={logo} alt="logo" />
        
        <div className="flex flex-col flex-1">
          <ul className="flex flex-row list-none p-0 uppercase justify-center items-center w-full text-xl font-medium">
            <Link to="/" className="mr-12 cursor-pointer hover:text-[#50DEF1]">Home</Link>
            <Link to="/oferta" className="mr-12 cursor-pointer hover:text-[#50DEF1]">Oferta</Link>
            <Link to="/cennik" className="mr-12 cursor-pointer hover:text-[#50DEF1]">Cennik</Link>
            <Link to="/pomoc" className="mr-12 cursor-pointer hover:text-[#50DEF1]">Pomoc</Link>
            <Link to="/logowanie" className="cursor-pointer hover:text-[#50DEF1]">Logowanie</Link>
          </ul>

          <div className="ml-auto mt-4">
            <button className="text-black font-[20px] uppercase px-2 py-3 bg-[#50DEF1] rounded-md text-xl hover:text-white hover:scale-105">
              Załóż konto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

  
  export default Navbar;
  
