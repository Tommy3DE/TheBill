import ReturnBtn from "../components/ReturnBtn";
import SlimNav from "../layout/SlimNav";
import gruop from "../assets/icons/Group.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AutoScan = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [val, setVal] = useState('1')
  const [currVal, setCurrVal] = useState(null)

  const reqData = {
    value: val
  };

  const cancelData = {
    value: 0
  }

  useEffect(()=>{
    fetch("https://api.onebill.com.pl/api/auto_scan", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCurrVal(data)
      });
      console.log(currVal)
  },[])

  const autoscanHandler = () => {
    fetch("https://api.onebill.com.pl/api/auto_scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(reqData)
    })
    .then(response => {
      if (response.ok) {
        toast.success("Autoscan zlecony poprawnie", {
          position: "top-right",
          autoClose: 7000,
        });
      }else{
        toast.error("Autoscan nie jest dostepny dla twojego pakietu", {
          position: "top-right",
          autoClose: 7000,
        });
      }
    })
  }

  const handleCancel = () => {
    fetch("https://api.onebill.com.pl/api/auto_scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(cancelData)
    })
    .then(response => {
      if (response.ok) {
        toast.success("Autoscan anulowany pomyślnie", {
          position: "top-right",
          autoClose: 7000,
        });
      }else{
        toast.error("Błąd poczas anulowania autoscan'u", {
          position: "top-right",
          autoClose: 7000,
        });
      }
    })
  }
  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] mx-auto">
        <h1 className="lg:text-4xl text-2xl text-center font-bold tracking-wider lg:mt-[7%] mt-[30%]">
          Ustaw automatyczne skanowanie skrzynki na swoim koncie
        </h1>
        <img src={gruop} alt="auto" className="mx-auto my-7" />
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          W tym panelu możesz ustawić automatyczne skanowanie swojej skrzynki.
          <br />
          Wybierz częstotliwość, z którą ma odbywać się skanowanie.
        </h2>
        <h1 className="lg:text-4xl text-3xl text-center my-10 font-bold">
          Skanowanie ma się odbywać:
          <span className="ml-2">
            <select className="bg-gray-200 rounded" value={val} onChange={(e)=>setVal(e.target.value)}>
              <option value="1">codziennie</option>
              <option value="2">co tydzień</option>
              <option value="3">co 2 tygodnie</option>
              <option value="4">na koniec miesiąca</option>
              
            </select>
          </span>{" "}
        </h1>
        <h2 className="text-xl text-gray-700 text-center tracking-wider">
          Po zakończonym skanowaniu, prześlemy do Ciebie maila, że gotowy skan
          czeka na zatwierdzenie.
        </h2>
        <div className="flex lg:flex-row flex-col-reverse justify-center mt-12">
          <ReturnBtn route="/logged" />
          <button className="font-playFair text-3xl font-black text-center items-center text-white bg-green-500 px-10 py-4 rounded-2xl hover:bg-green-600 lg:ml-5 mb-5 lg:mb-0 uppercase" onClick={autoscanHandler}>
            Zaakeceptuj
          </button>
          <button className="font-playFair text-3xl font-black text-center items-center text-white bg-red-500 px-10 py-4 rounded-2xl hover:bg-red-600 lg:ml-5 mb-5 lg:mb-0 uppercase" onClick={handleCancel}>
            Anuluj 
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutoScan;
