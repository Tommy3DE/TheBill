import { Link, useParams } from "react-router-dom";
import SlimNav from "../../../layout/SlimNav";
import { useEffect, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { GrDocumentZip } from "react-icons/gr";
import locked from "../../../assets/locked 1.png";
import block from "../../../assets/block.png";

import { HiOutlineSquares2X2 } from "react-icons/hi2";
import ReturnBtn from "../../../components/ReturnBtn";
import { toast } from "react-toastify";
// import { useUserData } from "../../../context/UserDataContext";

type DateType = {
  date: string;
};

export type InvoiceType = {
  date: string;
  id: number;
  name: string;
  sender: string;
  thumbnail: string;
};

export interface Bookkeeper {
  id: number;
  name: string;
  email: string;
}

const MthPage = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [thumbView, setThumbView] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState<number | null>(null);
  const accessToken = localStorage.getItem("accessToken");
  const [addModal, setAddModal] = useState<boolean>(false);
  const [sendAccOpen, setSendAccOpen] = useState<boolean>(false);
  const [wantsZip, setWantsZip] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [base64Files, setBase64Files] = useState<
    Array<{ name: string; content: string | ArrayBuffer | null }>
  >([]);
  const [book, setBook] = useState();

  const showModal = (invoiceId: number) => {
    setInvoiceToDelete(invoiceId);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setInvoiceToDelete(null);
  };

  const handleAccModal = () => {
    setSendAccOpen((prev) => !prev);
  };

  const handleAddDocModal = () => {
    setFiles([]);
    setAddModal((prev) => !prev);
  };

  const { date } = useParams<DateType>();

  const interpretDate = (date: string) => {
    if (!date) return { year: "Unknown", month: "Unknown" };

    const year = date.substring(date.length - 4);
    const month = date.substring(0, date.length - 4);

    return { year, month };
  };

  const handleIconClick = (
    e: React.MouseEvent<SVGElement>,
    invoiceId: number
  ) => {
    e.stopPropagation();
    showModal(invoiceId);
  };

  const { year, month } = interpretDate(date ?? "");

  const loadInvoices = () => {
    const url = new URL("https://api.onebill.com.pl/api/invoice");
    url.searchParams.append("month", month);
    url.searchParams.append("year", year);
    setIsLoading(true);
    fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
        setInvoices(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
        setIsLoading(false);
        toast.error("Błąd podczas pobierania faktur", {
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

  const loadBook = () => {
    const url = "https://api.onebill.com.pl/api/bookkeeper";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
        setBook(data[0].id);
      });
  };

  useEffect(() => {
    loadInvoices();
    loadBook();
  }, []);

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

  const handleImageClick = (thumbnail: string) => {
    setSelectedImage(thumbnail);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDownload = () => {
    const url = new URL("https://api.onebill.com.pl/api/zip");
    url.searchParams.append("month", month);

    fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Network response was not ok");
      })
      .then((blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.href = downloadUrl;
        downloadAnchorNode.download = `faktury_${month}/${year}.zip`;
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        window.URL.revokeObjectURL(downloadUrl);
        toast.success("Pobieranie faktur powiodło się", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const handleCheckboxChange = () => {
    setWantsZip((prev) => !prev);
  };

  const handleBookSend = () => {
    const url = "https://api.onebill.com.pl/api/send";
    // const numericMth = Number(month);
    const reqData = {
      month: month,
      bookkeeper: book,
      zip: wantsZip,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 409) {
            toast.error("Błąd", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          throw new Error("Network response was not ok");
        }
        return response.text(); // Zmienione z response.json() na response.text(), ponieważ oczekujemy ciągu tekstowego
      })
      .then((draftId) => {
        console.log("Success:", draftId);
        const draftUrl = `https://mail.google.com/mail/u/0/#drafts?compose=${draftId}`;
        window.open(draftUrl, "_blank");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedFiles = event.target.files;
    const allowedFormats = ['application/pdf', 'image/jpeg', 'image/jpg'];
  
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      const validFiles = fileArray.filter(file => allowedFormats.includes(file.type));
      const invalidFiles = fileArray.filter(file => !allowedFormats.includes(file.type));
  
      if (invalidFiles.length > 0) {
        toast.error("Nie można dodać plików w tym formacie", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  
      const base64ArrayPromises = validFiles.map((file) => {
        return new Promise<{
          name: string;
          content: string | ArrayBuffer | null;
        }>((resolve) => {
          const reader = new FileReader();
          reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
            const base64String = loadEvent.target?.result ?? null;
            resolve({ name: file.name, content: base64String });
          };
          reader.readAsDataURL(file);
        });
      });
  
      Promise.all(base64ArrayPromises).then((base64Contents) => {
        setBase64Files((prevBase64Files) => [
          ...prevBase64Files,
          ...base64Contents,
        ]);
      });
    }
  };
  

  const handleInvSend = () => {
    const url = "https://api.onebill.com.pl/api/invoice";
    const today = new Date();
    const formattedDate = today.toISOString();

    const reqDataArray = base64Files.map((file) => ({
      month: month,
      year: year,
      name: file.name,
      invoice: file.content,
      sender: "Dodano ręcznie",
      date: formattedDate,
    }));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(reqDataArray),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in sending invoices");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Dodawanie faktur powiodło się", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        loadInvoices();
        handleAddDocModal();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Wystąpił błąd przy dodawaniu faktur", {
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

  return (
    <div>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className=" lg:mt-[10%] mt-[25%]">
          <h2 className="text-3xl font-poppins font-bold text-center mb-[8%]">
            Faktury z miesiąca:{" "}
            <span className="font-normal">
              {month}/{year}
            </span>
            <div className="flex flex-row justify-center text-xl my-6 items-center font-normal text-gray-700">
              <img src={locked} alt="locked" className="w-8 mr-2" />
              <h3>Ikona kłódki oznacza zabezpieczony hasłem plik.</h3>
            </div>
            <div className="flex flex-row justify-center text-xl mb-12 mt-6 items-center font-normal text-gray-700">
              <img src={block} alt="limit" className="w-8 mr-2" />
              <h3>
                Ikona blokady oznacza przekroczenie ilości dostępnych
                miesięcznie dokumentów
              </h3>
            </div>
          </h2>
          {isLoading ? (
            <img
              className="w-20 h-20 animate-spin mx-auto"
              src="https://www.svgrepo.com/show/70469/loading.svg"
              alt="Loading icon"
            />
          ) : invoices.length === 0 ? (
            <p className="text-3xl text-center my-64 text-gray-400">
              Brak faktur
            </p>
          ) : (
            <>
              <div className="flex flex-row justify-center text-5xl">
                <HiOutlineSquares2X2
                  className={`p-2 ${
                    thumbView ? "bg-green-700 text-white" : ""
                  }`}
                  onClick={() => setThumbView((prev) => !prev)}
                />
                <CiBoxList
                  className={`p-2 ${
                    !thumbView ? "bg-green-700 text-white" : ""
                  }`}
                  onClick={() => setThumbView((prev) => !prev)}
                />
              </div>
              {thumbView && (
                <div className="flex flex-row flex-wrap justify-center items-center ">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="relative group m-4"
                      style={{ width: "260px", height: "400px" }}
                    >
                      {invoice.thumbnail === "LIMIT" ? (
                        <img
                          src={block}
                          className="p-2 w-full h-full object-contain border-2 my-2"
                          alt="limit"
                        />
                      ) : (
                        <img
                          src={`${
                            invoice.thumbnail.length > 0
                              ? `data:image/jpeg;base64,${invoice.thumbnail}`
                              : locked
                          } `}
                          alt="Thumbnail"
                          className={`border-2 my-2 ${
                            invoice.thumbnail.length < 0
                              ? "p-1 w-full h-full object-cover"
                              : "p-2 w-full h-full object-contain"
                          }`}
                        />
                      )}
                      <div
                        className="absolute inset-0  justify-center items-center hidden group-hover:flex mt-2 -mb-2"
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
                          {invoice.thumbnail.length > 0 ? (
                            <FaRegEye
                              className="text-blue-500 cursor-pointer bg-white rounded-full"
                              style={{
                                padding: "0.25rem",
                                height: "40px",
                                width: "40px",
                              }}
                              onClick={() =>
                                handleImageClick(invoice.thumbnail)
                              }
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!thumbView && (
                <div className="mt-8 font-poppins">
                  <table className="table-auto w-11/12 mx-auto ">
                    <thead>
                      <tr className=" border-b-2 font-black text-lg">
                        <th className="px-4 py-2 text-start">ID</th>
                        <th className="px-4 py-2 text-start">Nazwa Pliku</th>
                        <th className="px-4 py-2 text-start">Otrzymano od</th>
                        <th className="px-4 py-2 text-start">Data</th>
                        <th className="px-4 py-2 text-center">Podgląd</th>
                        <th className="px-4 py-2 text-center">Usuń</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice, index) => (
                        <tr key={invoice.id} className={``}>
                          <td className=" px-4 py-2">{index + 1}</td>
                          <td className=" px-4 py-2">{invoice.name}</td>
                          <td className=" px-4 py-2 lg:max-w-[20%]">
                            {invoice.sender}
                          </td>
                          <td className=" px-4 py-2 ">
                            {new Date(invoice.date).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-4 text-2xl ">
                            <FaRegEye
                              className="text-blue-400 cursor-pointer mx-auto"
                              onClick={() =>
                                handleImageClick(invoice.thumbnail)
                              }
                            />
                          </td>
                          <td className="py-2 px-4 text-2xl ">
                            <AiOutlineCloseCircle
                              className="text-red-500 cursor-pointer mx-auto"
                              onClick={(e: React.MouseEvent<SVGElement>) =>
                                handleIconClick(e, invoice.id)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
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
        </div>
      </div>
      <div className="flex lg:flex-row justify-center my-16 flex-col">
        <ReturnBtn route="/logged/documents" />
        {invoices.length > 0 && (
          <button
            className="lg:ml-5 uppercase font-playFair text-3xl font-black text-white bg-yellow-400 px-10 py-4 rounded-2xl hover:bg-yellow-500 lg:my-0 my-5"
            onClick={handleAccModal}
          >
            Wyślij do Ksiegowego
          </button>
        )}
        <button
          className="lg:mx-5 uppercase font-playFair text-3xl font-black text-white bg-green-400 px-10 py-4 rounded-2xl hover:bg-green-500 lg:my-0 my-5"
          onClick={handleAddDocModal}
        >
          Dodaj dokument
        </button>
        {invoices.length > 0 && (
          <button
            className="uppercase font-playFair text-3xl font-black text-white bg-blue-400 px-10 py-4 rounded-2xl hover:bg-blue-500"
            onClick={handleDownload}
          >
            Pobierz
          </button>
        )}

        {invoices.length === 0 && !isLoading && (
          <Link
            to="/logged/scanMail/scanPeriod"
            className="font-playFair text-3xl font-black text-white bg-blue-400 px-10 py-4 rounded-2xl hover:bg-blue-500"
          >
            <button className="uppercase">Skanuj miesiąc</button>
          </Link>
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
            <h2 className="font-bold text-3xl lg:text-lg">Potwierdzenie</h2>
            <p>Czy na pewno chcesz usunąć tę fakturę?</p>
            <div className="flex lg:flex-row flex-col justify-around mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xl lg:mb-0 mb-5"
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
      {sendAccOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleAccModal}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-bold text-3xl text-center">Wyślij do biura księgowego</h2>
            <div style={{ visibility: "visible", opacity: 1 }} className="my-5 flex flex-col justify-between items-center">
              <p className="text-xl my-2">
                Wybierz format w jakim chcesz wysłać pliki:
              </p>

              <div className="ml-2 text-5xl flex flex-row justify-evenly my-5 ">
                <GrDocumentPdf
                  onClick={handleCheckboxChange}
                  className={`${
                    !wantsZip
                      ? "scale-110 text-green-700"
                      : "scale-90 text-gray-400"
                  } cursor-pointer mr-5`}
                />
                <GrDocumentZip
                  onClick={handleCheckboxChange}
                  className={`${
                    wantsZip
                      ? "scale-110 text-green-700"
                      : "scale-90 text-gray-400"
                  } cursor-pointer`}
                />
              </div>
              <p className="text-gray-500 italic">Jeżeli Twoja skrzynka nie otworzyła się automatycznie, prawdopodobnie <br/>masz otwartego e-maila w tle. Sprawdź wersje robocze.</p>
            </div>
            <div className="flex justify-around mt-4">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-xl"
                onClick={handleBookSend}
              >
                Wyślij
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 text-xl"
                onClick={handleAccModal}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
      {addModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleAddDocModal}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-bold text-3xl">
              Wybierz fakturę którą chcesz dodać
            </h2>
            {files.length > 0 && (
              <div className="text-xl text-black text-center my-5">
                {files.map((file) => (
                  <div key={file.name}>{file.name}</div>
                ))}
              </div>
            )}

            <div className="flex justify-center items-center my-5 ">
              <input
                type="file"
                id="fileInput"
                accept=".pdf,.jpg,.jpeg"
                multiple
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <label
                htmlFor="fileInput"
                className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 cursor-pointer text-3xl hover:scale-105"
              >
                +
              </label>
            </div>

            <div className="flex justify-around mt-4">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-xl"
                onClick={handleInvSend}
              >
                Wyślij
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 text-xl"
                onClick={handleAddDocModal}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MthPage;
