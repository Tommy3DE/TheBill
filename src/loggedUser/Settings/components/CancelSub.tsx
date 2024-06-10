import SlimNav from "../../../layout/SlimNav";
import cancel from "../../../assets/settings/page-not-found 1.png";
import cross from  '../../../assets/settings/cross 1.png'
import ReturnBtn from "../../../components/ReturnBtn";
import { useState } from "react";
import tick from '../../../assets/settings/check-box 1.png'
import { toast } from "react-toastify";

const points = [
  {
    id: 1,
    text: 'Faktur zapisanych w aplikacji'
  },
  {
    id: 2,
    text: 'Zapisanych adresów mailowych (biuro księgowe)'
  },
  {
    id: 3,
    text: 'Historii korespondencji i skanowania skrzynki.'
  },
]

const CancelSub = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [nextStep, setNextStep] = useState(false)
  const handleNextStep = () => {
    setNextStep(true)
  }

  const handleCancel = () => {
    fetch("https://api.onebill.com.pl/api/scan_history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      if (response.ok) {
        handleNextStep()
      }else{
        toast.error("Błąd podczas usuwania", {
          position: "top-right",
          autoClose: 7000,
        });
      }
      
    })
  }
  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      {!nextStep && <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins">
        <h1 className="text-4xl tracking-wider font-black">
          Czy jesteś pewny, że chcesz zakończyć subskrypcję One
          <span className="text-[#1A9367]">Bill</span>?
        </h1>
        <img src={cancel} alt="cancel" className="my-10" />
        <h1 className="text-3xl font-black">
          Pamiętaj, wraz z zakończeniem subskrypcji{" "}
          <span className=" underline">stracisz dostęp do:</span>
          <ul className="w-3/4 mx-auto my-10">
            {points.map((x)=>(
              <li className="flex flex-row items-center text-2xl mb-5" key={x.id}>
                <img src={cross} alt="cross" className="w-12 mr-5" />
                <h3>{x.text}</h3>
              </li>
            ))}
          </ul>
        </h1>
        <h1 className="text-xl tracking-wider font-black">
        Jeżeli w przyszłości będziesz chciał wznowić subskrypcję konta OneBill, będziesz musiał od początku konfigurować swoje konto.
        </h1>
        <h1 className="text-xl tracking-wider font-black underline">
        Twoje dane zostaną usunięte z naszej bazy w momencie wygaśnięcia Twojej subskrypcji.        </h1>
        <div className="flex flex-row justify-evenly mt-10">
          <ReturnBtn route="/logged/subscription" />
          <button className="uppercase tracking-wider text-center font-playFair text-3xl font-black items-center text-white bg-[#1A9367] ml-5 px-10 py-4 rounded-2xl hover:bg-green-800" onClick={handleCancel}>
            Zapisz
          </button>
        </div>
      </div>}
      {
        nextStep && <div className="max-w-[1980px] flex flex-col justify-center items-center mt-32 font-poppins">
            <img src={tick} alt="tick" />
            <h1 className="text-4xl font-black mt-10">Twoje zlecenie zostało pomyślnie przyjęte.</h1>
            <h1 className="text-3xl mt-2 mb-10">Twoje konto One
          <span className="text-[#1A9367]">Bill</span>? będzie aktywne do: </h1> 
          <input type="text" className="rounded-full bg-gray-200 w-1/4 p-2" disabled={true} />
          <div className="flex flex-row justify-evenly mt-10">
          <ReturnBtn route="/logged/subscription" />
          
        </div>
        </div>
      }
    </section>
  );
};

export default CancelSub;
