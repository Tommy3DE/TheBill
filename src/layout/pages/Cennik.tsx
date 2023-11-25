import bida from "../../assets/pricing/bida.png";
import fab from "../../assets/pricing/fab.png";
import prem from "../../assets/pricing/prem.png";
import standard from "../../assets/pricing/standard.png";
import { MdOutlineDone } from "react-icons/md";
import Navbar from "../Navbar";


const Cennik = () => {

  return (
    <>
    <Navbar/>
    <section className="mt-10 items-center mx-[8%] font-poppins">
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-7xl w-full text-center">Cennik</h1>

        <h2 className="py-10  text-center">
          Znajdź pakiet dostosowany do twoich potrzeb
        </h2>
        <div className="flex flex-row justify-evenly">
          <div className="border-4 rounded-md border-[#1A9367] w-1/5 p-4  hover:bg-green-200">
            <img src={bida} alt="base" className="mx-auto" />
            <h1 className="text-4xl text-center pt-8">Bieda</h1>
            <h3 className="text-center text-xl pb-8">19.99 zł/mies</h3>
            <ul>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>5 faktur miesięcznie</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>2 skanowania skrzynki</p>
                </li>
            </ul>
          </div>
          <div className="border-4 rounded-md border-[#1A9367] w-1/5 mx-10 p-4 hover:bg-green-200">
            <img src={standard} alt="standard" className="mx-auto" />
            <h1 className="text-4xl text-center  pt-8">Standard</h1>
            <h3 className="text-center text-xl pb-8">29.99 zł/mies</h3>
            <ul>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>10 faktur miesięcznie</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>2 skanowania skrzynki</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>Przechwywanie faktur w naszej chmurze</p>
                </li>
            </ul>
          </div>
          <div className="border-4 rounded-md border-[#1A9367] w-1/5 mr-10 p-4  hover:bg-green-200">
            <img src={prem} alt="prem" className="mx-auto" />
            <h1 className="text-4xl text-center  pt-8">Premium</h1>
            <h3 className="text-center text-xl pb-8">39.99 zł/mies</h3>

            <ul>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>20 faktur miesięcznie</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>Nielimitowane skanowanie skrzynki</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>Przechowywanie danych w chmurze </p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>Dostęp do pomocy technicznej 24/7</p>
                </li>
            </ul>
          </div>
          <div className="border-4 rounded-md border-[#1A9367] w-1/5 p-4  hover:bg-green-200">
            <img src={fab} alt="fab" className="mx-auto" />
            <h1 className="text-4xl text-center pt-8">Fabolous</h1>
            <h3 className="text-center text-xl pb-8">69.99 zł/mies</h3>
            <ul>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>Nielimitowana liczba faktur miesięcznie</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>10 faktur miesięcznie</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>10 faktur miesięcznie</p>
                </li>
                <li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>10 faktur miesięcznie</p>
                </li><li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>10 faktur miesięcznie</p>
                </li><li className="flex flex-row">
                    <MdOutlineDone className='text-green-600 text-xl mr-1' />
                    <p>10 faktur miesięcznie</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Cennik;
