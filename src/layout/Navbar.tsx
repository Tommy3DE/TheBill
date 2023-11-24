import logo from "../assets/logo.png";

const Navbar = () => {
    return (
      <section className="items-center mx-[8%] font-poppins">
        <div className="h-auto w-full flex flex-row mt-[2%]">
          <img src={logo} alt="logo" />
          
          <div className="flex flex-col flex-1">
            <ul className="flex flex-row list-none p-0 uppercase justify-center items-center w-full text-xl font-medium	">
              <li className="mr-12">Home</li>
              <li className="mr-12">Oferta</li>
              <li className="mr-12">Cennik</li>
              <li className="mr-12">Pomoc</li>
              <li>Logowanie</li>
            </ul>
  
            <div className="ml-auto mt-4">
              <button className="text-black font-[20px] uppercase px-2 py-3 bg-[#50DEF1] rounded-md text-xl">
                Załóż konto
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Navbar;
  
