import SlimNav from "../../../layout/SlimNav";
import email from "../../../assets/innerSettingsIcons/email 1.png";
import { FaTrash } from "react-icons/fa";
import AddAccountant from "./AddAccountant";
import { useState } from "react";

const DefinedAddresses = () => {
  const [modalVis, setModalVis] = useState(false)

  const handleVis = () => {
    setModalVis(prev=>!prev)
  }
  return (
    <section className="w-full font-poppins">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <div className="mt-24 lg:mx-[5%] mx-[2%] font-bold h-1/6   flex flex-row items-center">
        <h1 className="text-3xl">Dokumenty {">"} Zdefiniowane adresy e-mail</h1>
        <img src={email} alt="email" className="h-12 w-12 ml-5" />
      </div>
      <div className="bg-gray-300 border-2 rounded-lg lg:mx-[5%] mx-[2%] my-5 p-2">
        Możesz dodać tutaj adres e-mail swojego biura księgowego. Dzieki temu,
        łatwiej będziesz mógł dzielić się dokumentami ze swoim biurem księgowym.
        Jak tylko klikniesz “+Dodaj biuro ksiegowe”, pojawi się okno gdzie
        będziesz mógł nazwać nowo dodany kontakt.
      </div>
      <h1 className="text-3xl font-bold mx-[5%] my-10">Moje biuro księgowe</h1>
      <div className=" mx-[5%] h-24 border-2 rounded-lg border-black">
        <ul className="flex justify-around lg:text-2xl font-bold flex-row list-none w-full border-b-4 border-green-700">
          <li className="text-center border-r-4 border-green-700 w-1/4">
            Nazwa
          </li>
          <li className="text-center border-r-4 border-green-700 w-1/4">
            E-mail
          </li>
          <li className="text-center border-r-4 border-green-700 w-1/4">
            Status
          </li>
          <li className="text-center w-1/4">Akcja</li>
        </ul>
        <div className="w-full flex flex-row lg:text-xl">
          <div className="w-1/4 lg:p-2 border-green-700 border-r-4 text-center">
            test@test.pl
          </div>
          <div className="w-1/4 p-2 border-green-700 border-r-4 text-center">
            2/12/2023
          </div>
          <div className="w-1/4 p-2 border-green-700 font-bold border-r-4 text-green-500 text-center">
            Aktywna
          </div>
          <div className="w-1/4 p-2 border-green-700 text-center">
            <button className="text-bold rounded-lg hover:scale-110">
            <FaTrash className='text-red-400'/>

            </button>
          </div>
          
        </div>
        <button className="bg-[#1A9367] text-4xl text-white rounded-lg px-6 py-3 my-14" onClick={handleVis}>
          + dodaj skrzynkę
        </button>
        {modalVis && <AddAccountant handleVis={handleVis}/>}
      </div>
      </div>
    </section>
  );
};

export default DefinedAddresses;
