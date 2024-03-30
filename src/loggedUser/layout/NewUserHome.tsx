import { useState } from "react";
import sync from "../../assets/iconsLogged/sync.png";



const NewUserHome = () => {
  const [step, setStep] = useState<number>(0)
  const handleNextStep = () => setStep(prev=>prev + 1)
  return (
    <div className="lg:h-[80%] w-screen flex flex-col justify-center items-center">
      <img src={sync} alt="sync" className="mb-10 h-32"/>
      <p className='text-3xl font-bold tracking-wider font-poppins'>Witaj! Zacznimy od połączenia Twojej skrzynki mailowej z kontem <span className="text-[#1A9367]">OneBill</span></p>
      <p className="my-8">Dzięki temu będziesz mógł skanować swoją skrzynkę w poszukiwaniu faktur.</p>

      <button className="bg-[#1A9367] text-white py-3 px-3 font-bold font-playFair rounded-xl" onClick={handleNextStep}>+ DODAJ SKRZYNKĘ</button>
    </div>
  )
}

export default NewUserHome