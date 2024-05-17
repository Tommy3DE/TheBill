import { useEffect, useState } from "react";
import SlimNav from "../../layout/SlimNav";
import { Link, useLocation } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import { InvoiceType } from "../documents/components/MthPage";
import locked from "../../assets/locked 1.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import ReturnBtn from "../../components/ReturnBtn";
import gifScan from "../../assets/Email capture.gif";

const ScanPeriod = () => {
  const [date, setDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [yearSuffix, setYearSuffix] = useState<number>(
    new Date().getFullYear()
  );
  const [extractedCode, setExtractedCode] = useState("");
  const [extractedState, setExtractedState] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState<number | null>(null);

  const accessToken = localStorage.getItem("accessToken");

  const today = new Date();
  const currentMonth = today.getMonth() + 1;

  useEffect(() => {

    const formattedDate = today
      .toISOString()
      .substring(0, 10)
      .replace("T", " ");
    setDate(formattedDate);
  }, []);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const monthValue = e.target.value;
    setSelectedPeriod(monthValue);
    const calculatedYear = parseInt(monthValue) <= currentMonth ? 2024 : 2023;
    setYearSuffix(calculatedYear);
  };

  useEffect(() => {
    const formattedDate = today
      .toISOString()
      .substring(0, 10)
      .replace("T", " ");
    setDate(formattedDate);
  }, []);

  const handleImageClick = (thumbnail: string) => {
    setSelectedImage(thumbnail);
  };
  const hideModal = () => {
    setIsModalOpen(false);
    setInvoiceToDelete(null);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const showModal = (invoiceId: number) => {
    setInvoiceToDelete(invoiceId);
    setIsModalOpen(true);
  };

  const deleteInvoice = () => {
    if (!invoiceToDelete) return;
    fetch(`https://api.onebill.com.pl/api/invoice/${invoiceToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete invoice");
        }
        if (response.status === 204) {
          return null;
        } else {
          return response.json();
        }
      })
      .then(() => {
        setInvoices((prevInvoices) =>
          prevInvoices.filter((invoice) => invoice.id !== invoiceToDelete)
        );
        toast.success("Faktura usunięta pomyślnie!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        hideModal();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Wystąpił problem podczas usuwania faktury.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
    const today: Date = new Date();
    const offset: number = today.getTimezoneOffset() * 60000; // offset w milisekundach
    const localISOTime: string = (new Date(today.getTime() - offset)).toISOString().slice(0, 16).replace('T', ' ');
  setDate(localISOTime);

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
      if (!accessToken) throw new Error("Access token not found.");

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

      }

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
        setInvoices(data);
        setNextStep(true);
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
      toast.error("Błąd w skanowaniu", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
            <div>
              {invoices.length > 0 && (
                <p className="text-2xl mx-[5%] text-center text-gray-600 leading-loose lg:mt-[7%] mt-[25%] tracking-wider">
                  Poniżej, wyświetlone zostały faktury znalezione na Twojej
                  skrzynce.
                  <br /> Zdecyduj, czy któreś z nich chcesz usunąć – jeżeli nie,
                  to wybierz{" "}
                  <span className="text-gray-800 font-bold">ZATWIERDŹ</span>
                  <div className="flex flex-row justify-center text-xl mb-12 mt-6 items-center font-normal text-gray-700">
              <img src={locked} alt="locked" className="w-8 mr-2"/>
              <h3>Ikona kłódki oznacza zabezpieczony hasłem plik.</h3>
            </div>
                </p>
              )}
              <div className="  flex flex-row mt-5 flex-wrap justify-center items-center ">
                {invoices.length > 0 ? (
                  invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="relative group m-4"
                      style={{ width: "260px", height: "400px" }}
                    >
                      <img
                        src={`${invoice.thumbnail.length > 0 ? `data:image/jpeg;base64,${invoice.thumbnail}` : locked} `}
                        alt="Thumbnail"
                        className={`border-2 my-2 ${invoice.thumbnail.length < 0 ? 'p-1 w-full h-full object-cover' : 'p-2 w-full h-full object-contain'}`} // Użycie 'object-cover' dla obrazów z miniaturami i 'object-contain' z dodatkowym paddingiem dla obrazu z kłódką
                        />
                      <div
                        className='absolute inset-0  justify-center items-center hidden group-hover:flex mt-2 -mb-2'
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
                          {invoice.thumbnail.length > 0 ?
                          <FaRegEye
                            className="text-blue-500 cursor-pointer bg-white rounded-full"
                            style={{
                              padding: "0.25rem",
                              height: "40px",
                              width: "40px",
                            }}
                            onClick={() => handleImageClick(invoice.thumbnail)}
                          /> : null}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-3xl text-center my-64 text-gray-400">
                    Brak faktur
                  </p>
                )}
              </div>
              <div className="flex lg:flex-row justify-center my-16 flex-col">
                <ReturnBtn route="/logged" />
                {invoices.length > 0 && (
                  <Link to={`/logged/documents/${selectedPeriod}${yearSuffix}`}>
                    <>
                      <button className="uppercase ml-5 font-playFair text-3xl font-black text-center items-center text-white bg-green-400 px-10 py-4 rounded-2xl hover:bg-green-500">
                        Zatwierdź{" "}
                      </button>
                    </>
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-36 lg:mx-[10%] mx-[2%] flex flex-col justifty-center items-center">
              <h1 className="text-4xl font-black">
                Wybierz miesiąc który chcesz przeskanować:
              </h1>
              <div className="w-2/3">
                <div className="flex lg:flex-row flex-col justify-between items-center mt-16 text-2xl">
                  <p className="">Dzisiejsza data:</p>
                  <input
                    type="text"
                    className="rounded-3xl lg:w-1/3 px-4 py-2 bg-gray-300"
                    disabled
                    value={date}
                  />
                </div>
                <div className="flex lg:flex-row flex-col justify-between items-center mt-16 text-2xl">
                  <p className="">Ostatnie skanowanie miało miejsce: </p>
                  <input
                    type="text"
                    className="rounded-3xl lg:w-1/3 px-4 py-2  bg-gray-300"
                    disabled
                    value={userData ? userData?.lastScan : "-"}
                  />
                </div>
              </div>
              <div className="mt-16 text-2xl flex lg:flex-row flex-col justify-between w-2/3">
                <label htmlFor="month-picker" className="text-2xl text-start">
                  Wybierz miesiąc:
                </label>
                <select
                  id="month-picker"
                  className="rounded-3xl px-4 py-2 bg-gray-300 text-2xl lg:w-1/3"
                  onChange={handleMonthChange}
                >
                  <option value="">--wybierz--</option>
                  {Array.from({ length: 12 }, (_, i) => {
                    const month = i + 1;
                    const year = month <= currentMonth ? 2024 : 2023;
                    return (
                      <option key={month} value={month}>
                        {new Date(0, i).toLocaleString("default", {
                          month: "long",
                        })}{" "}
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
              {selectedPeriod !== "" && (
                <button
                  className="mt-16 text-3xl bg-green-500 p-3 rounded-lg text-white lg:w-1/5 w-full text-center hover:scale-105 cursor-pointer"
                  onClick={handleCombinedScan}
                >
                  Skanuj
                </button>
              )}
            </div>
          )
        ) : (
          <div className="mt-32 flex justify-center items-center flex-col font-poppins">
            <img className="lg:w-1/3" src={gifScan} alt="Loading icon" />
            <h1 className="font-black text-2xl">
              Prosimy o chwilę cierpliwości.{" "}
            </h1>
            <h3 className="text-xl lg:text-start text-center">
              Nasz algorytm szuka faktur na Twojej skrzynce e-mail.
            </h3>
          </div>
        )}
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={hideModal}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-bold text-3xl">Potwierdzenie</h2>
            <p className="my-5 text-lg">
              Czy na pewno chcesz usunąć tę fakturę?
            </p>
            <div className="flex justify-around mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xl"
                onClick={deleteInvoice}
              >
                Usuń
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 text-xl"
                onClick={hideModal}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScanPeriod;
