import pic1 from "../../../assets/offerIcons/image 38.png";
import pic2 from "../../../assets/offerIcons/image 40.png";
import pic3 from "../../../assets/offerIcons/image 41.png";
import pic4 from "../../../assets/offerIcons/image 42.png";
import pic5 from "../../../assets/offerIcons/image 43.png";
import pic6 from "../../../assets/offerIcons/image 44.png";
import pic7 from "../../../assets/offerIcons/image 46.png";
import pic8 from "../../../assets/offerIcons/image 47.png";
import pic9 from "../../../assets/offerIcons/image 48.png";

interface BenefitsTiles {
  id: number;
  pic: string;
  title: string;
  text: string;
  miniPic1?: string;
  miniPic2?: string;
}

const OfferBenefits = () => {
  const benefits: BenefitsTiles[] = [
    {
      id: 1,
      pic: pic1,
      title: "Szybka integracja",
      text: "Podczas pierwszego logowania do aplikacji OneBill, zostaniesz poproszony o zsynchronizowanie swojej skrzynki z klientem poczty Google’a - Gmail’em. Nasza aplikacja łączy się z Google API.",
    },
    {
      id: 2,
      pic: pic2,
      title: "Natychmiastowy skan skrzynki",
      text: "Po zsynchronizowaniu skrzynki z kontem OneBill, będziesz mógł rozpocząć skanowanie swojej skrzynki. Program poprosi Cię tylko o wskazanie, który okres rozliczeniowy Cię interesuje. ",
    },
    {
      id: 3,
      pic: pic3,
      title: "Podgląd zeskanowanych dokumentów",
      text: "Faktury, które aplikacja znajdzie we wskazanym miesiącu rozliczeniowym zostaną wyświetlone w panelu aplikacji wraz z podsumowaniem. Użytkownik będzie mógł zadecydować które dokumenty należy przekazać do księgowości, a które odrzucić.",
    },
    {
      id: 4,
      pic: pic6,
      title: "Tworzenie paczek dokumentów",
      text: "Program OneBill, zapyta Cię w jakiej formie chcesz przekazać scan skrzynki do swojego biura księgowego. Po wyborze formatu pliku, otworzy się okno wiadomości Twojego klienta poczty - Gmail. Wystarczy kliknąć wyślij! Obecnie wspieramy następujące formaty dokumentów:",
      miniPic1: pic4,
      miniPic2: pic5,
    },
    {
      id: 5,
      pic: pic7,
      title: "Faktury w jednym miejscu",
      text: "Każda sesja skanowania jest zapisywana na Twoim koncie OneBill (długość okresu przechowywania jest zależna od posiadanego pakietu). Wszystkie dokumenty kosztowe są zapisywane w odpowiednio oznaczonych folderach (zgodnie z datą sprzedaży dokumentu).",
    },
    {
      id: 6,
      pic: pic8,
      title: "Historia konwersacji",
      text: "Oprócz samych dokumentów, zapisujemy również Twoją konwersację z biurem księgowym, dzięki czemu wiesz jakie dokumenty i kiedy przekazałeś. ",
    },
    {
      id: 7,
      pic: pic9,
      title: "Możliwość scanu dokumentów papierowych",
      text: "W aplikacji również pojawiać się będą dokumenty papierowe, zeskanowane za pomocą naszej aplikacji mobilnej. ",
    },
  ];
  return (
    <div className="mx-[8%] flex flex-col">
      {benefits.map((benefit) => (
        <div className="flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center mb-10" key={benefit.id}>
          <img src={benefit.pic} alt={benefit.title} className="w-[150px] h-[150px]" />
          <div className="ml-10">
            <h1 className="text-3xl font-playFair text-[#1A9367] font-black tracking-wider">
              {benefit.title}
            </h1>
            <p className="font-poppins text-xl mt-8 tracking-wider">
              {benefit.text}
            </p>
            {benefit.miniPic1 !== undefined && (
              <div className="flex flex-row mt-2">
                <img src={benefit.miniPic1} alt="Mini Picture 1" className="h-20 w-20 mr-5" />
                <img src={benefit.miniPic2} alt="Mini Picture 2" className="h-20 w-20" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default OfferBenefits;
