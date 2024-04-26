import { useEffect, useState } from "react";
import SlimNav from "../../layout/SlimNav";
import { useLocation } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { InvoiceType } from "../documents/components/MthPage";
import locked from "../../assets/locked 1.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const ScanPeriod = () => {
  const [date, setDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [extractedCode, setExtractedCode] = useState("");
  const [extractedState, setExtractedState] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState<number | null>(null);

  const handleImageClick = (thumbnail: string) => {
    setSelectedImage(thumbnail);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const showModal = (invoiceId: number) => {
    setInvoiceToDelete(invoiceId);
    setIsModalOpen(true);
  };

  const handleIconClick = (
    e: React.MouseEvent<SVGElement>,
    invoiceId: number
  ) => {
    e.stopPropagation();
    showModal(invoiceId);
  };

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

  const handleCombinedScan = async () => {
    setLoading(true);

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error("Access token not found.");

      // First, handle the token redirect if the condition is met
      if (tokenBody.code !== "") {
        const tokenResponse = await fetch(
          "https://api.onebill.com.pl/api/token_redirect",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(tokenBody),
          }
        );

        if (!tokenResponse.ok)
          throw new Error("Failed to handle token redirect.");
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
        const data = await scanResponse.json();
        setInvoices(data); // Update state with the fetched data
        setNextStep(true);
        // Additional logic to handle data from scan
      } else if (scanResponse.status === 425) {
        let url = await scanResponse.text();
        url = url.replace(/^"|"$/g, "");
        url = decodeURIComponent(url);

        // Otwieranie URL w tym samym oknie
        window.location.href = url;
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
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
      {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
              onClick={handleCloseModal}
            >
              <img
                src={`data:image/jpeg;base64,${selectedImage}`}
                alt="Enlarged thumbnail"
                className="max-w-3/4 max-h-3/4"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "75%",
                  maxHeight: "75%",
                }}
              />
            </div>
          )}
        {!loading ? (
          nextStep ? (
            <div className=" lg:mt-[7%] mt-[25%] flex flex-row flex-wrap justify-center items-center ">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="relative group m-4"
                  style={{ width: "260px", height: "400px" }}
                >
                  <img
                    src={`${
                      invoice.thumbnail.length > 0
                        ? `data:image/jpeg;base64,${invoice.thumbnail}`
                        : locked
                    } `}
                    alt="Thumbnail"
                    className={`border-2 my-2 p-1 w-full ${
                      invoice.thumbnail.length > 0 ? "h-full object-cover" : ""
                    }`}
                  />
                  <div
                    className={`absolute inset-0  justify-center items-center hidden group-hover:flex mt-2 ${
                      invoice.thumbnail.length > 0 ? "-mb-2" : "mb-32"
                    } `}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="flex space-x-4">
                      <AiOutlineCloseCircle
                        className="text-white bg-red-500 rounded-full cursor-pointer"
                        style={{
                          padding: "0.25rem",
                          height: "40px",
                          width: "40px",
                        }}
                        onClick={(e: React.MouseEvent<SVGElement>) =>
                          handleIconClick(e, invoice.id)
                        }
                      />
                      <FaRegEye
                        className="text-blue-500 cursor-pointer bg-white rounded-full"
                        style={{
                          padding: "0.25rem",
                          height: "40px",
                          width: "40px",
                        }}
                        onClick={() => handleImageClick(invoice.thumbnail)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
              <button
                className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white w-1/5 text-center hover:scale-105 cursor-pointer"
                onClick={handleCombinedScan}
              >
                Skanuj
              </button>
            </div>
          )
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
