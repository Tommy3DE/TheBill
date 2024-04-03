import { useParams } from "react-router-dom";
import SlimNav from "../../../layout/SlimNav";
// import dir from "../../../assets/docsIcons/dir.png";
import { useEffect, useState } from "react";

type DateType = {
  date: string;
};
type InvoiceType = {
  date: string,
  id: number,
  name: string,
  sender: string,
  thumbnail: string
}

const MthPage = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
 const [isLoading, setIsLoading] = useState<boolean>(true)
 const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { date } = useParams<DateType>();

  

  const interpretDate = (date: string) => {
    if (!date) return { year: "Unknown", month: "Unknown" };
    
    const year = date.substring(date.length - 4);
    const month = date.substring(0, date.length - 4);

    return { year, month };
  };

  const { year, month } = interpretDate(date ?? "");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const url = new URL('https://api.onebill.com.pl/api/invoice');
    url.searchParams.append("month", month);
    url.searchParams.append("year", year);

    fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setInvoices(data)
      setIsLoading(false)
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  }, [date])

  const handleImageClick = (thumbnail: string) => {
    setSelectedImage(thumbnail);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  

  return (
    <div>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className=" mt-[10%]">
          <h2 className="text-3xl font-poppins font-bold text-center">
            Faktury z miesiąca:{" "}
            <span className="font-normal">
              {month}/{year}
            </span>
          </h2>
          {isLoading ? (
            <img className="w-20 h-20 animate-spin mx-auto mt-32" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"/>
          ) : invoices.length === 0 ? (
            <p className="mt-[10%] text-xl text-gray-400">Brak faktur</p>
          ) : (
            <div className="flex flex-row flex-wrap">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="w-1/4" onClick={() => handleImageClick(invoice.thumbnail)}>
                  <img
                    src={`data:image/jpeg;base64,${invoice.thumbnail}`}
                    alt="Thumbnail"
                    className="w-32 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          {selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleCloseModal}>
    <img
      src={`data:image/jpeg;base64,${selectedImage}`}
      alt="Enlarged thumbnail"
      className="max-w-3/4 max-h-3/4"
      style={{ width: 'auto', height: 'auto', maxWidth: '75%', maxHeight: '75%' }}
    />
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default MthPage;
