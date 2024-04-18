import { useEffect, useState } from "react";
import SlimNav from "../../layout/SlimNav";
import { Link, useLocation } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";

const ScanPeriod = () => {
  const [date, setDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [extractedCode, setExtractedCode] = useState("");
  const [extractedState, setExtractedState] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  
  // const accessToken = localStorage.getItem("accessToken");

  const location = useLocation();

  const requestBody = {
    month: selectedPeriod,
  };
  const tokenBody = {
    code: extractedCode,
    state: extractedState,
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today
      .toISOString()
      .substring(0, 16)
      .replace("T", " ");
    setDate(formattedDate);

    const urlCode = extractCodeFromUrlUsingRegex(location.search);
    if (urlCode) {
      setExtractedCode(urlCode);
    }
    const urlState = extractStateFromUrl(location.search);
    if (urlState) {
      setExtractedState(urlState);
    }
  }, [location.search]);

  // const handleScan = () => {
  //   setLoading(true);
    
  //   fetch("https://api.onebill.com.pl/api/scan", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then(async (response) => {
  //       if (response.ok) {
  //         setNextStep(true);
  //         return response.json();
  //       } else if (response.status === 425) {
  //         let url = await response.text();
  //         url = url.replace(/^"|"$/g, "");
  //         url = decodeURIComponent(url);

  //         const newWindow = window.open(url, "_blank");
  //         if (newWindow) {
  //           newWindow.focus();
  //         } else {
  //           console.error("Nie udało się otworzyć nowego okna");
  //         }
  //         throw new Error(`Network response was Too Early. URL: ${url}`);
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     // .then((data) => {
  //       // console.log(data);
  //       // if (extractedCode != "") {
  //       //   handleShowCode();
  //       // } else {
  //       //   console.log("scanning");
  //       // }
  //     // })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  // const handletoken = () => {if(tokenBody.code != ''){
  //   fetch("https://api.onebill.com.pl/api/token_redirect", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //     body: JSON.stringify(tokenBody),
  //   })}}

  const handleCombinedScan = async () => {
    setLoading(true);
  
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error("Access token not found.");
  
      // First, handle the token redirect if the condition is met
      if (tokenBody.code !== '') {
        const tokenResponse = await fetch("https://api.onebill.com.pl/api/token_redirect", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(tokenBody),
        });
  
        if (!tokenResponse.ok) throw new Error("Failed to handle token redirect.");
        // You may need to handle the response data from tokenResponse if needed
      }
  
      // Then, proceed to handle the scan
      const scanResponse = await fetch("https://api.onebill.com.pl/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      });
  
      if (scanResponse.ok) {
        setNextStep(true);
        const data = await scanResponse.json();
        console.log(data)
        // Additional logic to handle data from scan
      } else if (scanResponse.status === 425) {
        let url = await scanResponse.text();
        url = url.replace(/^"|"$/g, "");
        url = decodeURIComponent(url);
  
        const newWindow = window.open(url, "_blank");
        if (newWindow) {
          newWindow.focus();
        } else {
          console.error("Nie udało się otworzyć nowego okna");
        }
        throw new Error(`Network response was Too Early. URL: ${url}`);
      } else {
        setLoading(false)
        throw new Error("Network response was not ok.");
        
      }
    } catch (error) {
      setLoading(false)
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  


  function extractCodeFromUrlUsingRegex(url: string): string | null {
    const regex = /code=([^&]*)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  function extractStateFromUrl(url: string): string | null {
    const regex = /state=([^&]*)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  const { userData } = useUserData();

  return (
    <section className=" font-poppins">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        {!loading ? (
          <div className="mt-36 lg:mx-[10%] mx-[2%] flex flex-col justifty-center items-center">
            <h1 className="text-4xl font-black">
              Wybierz miesiąc który chcesz przeskanować:
            </h1>
            <div className="w-2/3">
              <div className="flex flex-row justify-between items-center mt-16 text-2xl">
                <p className="">Dzisiejsza data:</p>
                <input
                  type="text"
                  className="rounded-3xl w-1/3 px-4 py-2 bg-gray-300"
                  disabled
                  value={date}
                />
              </div>
              <div className="flex flex-row justify-between items-center mt-16 text-2xl">
                <p className="">Ostatnie skanowanie miało miejsce: </p>
                <input
                  type="text"
                  className="rounded-3xl w-1/3 px-4 py-2  bg-gray-300"
                  disabled
                  value={userData ? userData?.lastScan : "-"}
                />
              </div>
            </div>
            <div className="mt-16 text-2xl flex flex-row justify-between w-2/3">
              <label htmlFor="month-picker" className="text-2xl text-start">
                Wybierz miesiąc:
              </label>
              <select
                id="month-picker"
                className="rounded-3xl px-4 py-2 bg-gray-300 text-2xl w-1/3"
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="">--wybierz--</option>
                <option value={1}>Styczeń</option>
                <option value={2}>Luty</option>
                <option value={3}>Marzec</option>
                <option value={4}>Kwiecień</option>
                <option value={5}>Maj</option>
                <option value={6}>Czerwiec</option>
                <option value={7}>Lipiec</option>
                <option value={8}>Sierpień</option>
                <option value={9}>Wrzesień</option>
                <option value={10}>Październik</option>
                <option value={11}>Listopad</option>
                <option value={12}>Grudzień</option>
              </select>
            </div>
            {selectedPeriod !== "" && !nextStep && (
              <>
                <button
                  className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white w-1/5 text-center hover:scale-105 cursor-pointer"
                  onClick={handleCombinedScan}
                >
                  Skanuj
                </button>
                {/* <button
                  className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white w-1/5 text-center hover:scale-105 cursor-pointer"
                  onClick={handletoken}
                >
                  Wyslij token
                </button> */}
              </>
            )}
            {nextStep && (
              <Link to={`/logged/documents/${selectedPeriod}2024`}>
                <>
                  <button
                    className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white w-auto text-center hover:scale-105 cursor-pointer"
                  >
                    Przejdz do faktur
                  </button>
                </>
              </Link>
            )}
          </div>
        ) : (
          <div>
            <img
              className="w-20 h-20 animate-spin mt-32 mx-auto"
              src="https://www.svgrepo.com/show/70469/loading.svg"
              alt="Loading icon"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ScanPeriod;
