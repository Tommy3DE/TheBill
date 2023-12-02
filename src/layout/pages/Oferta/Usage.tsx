import { IoCheckmarkDone } from "react-icons/io5";
import document from "../../../assets/usageIcons/document.png";
import value from "../../../assets/usageIcons/value-chain.png";
import scanning from "../../../assets/usageIcons/scanning.png";
import invoice from "../../../assets/usageIcons/invoice.png";

type step = {
  id: number;
  title: string;
  img: string;
  point1: string;
  point2: string;
  point3: string;
};

const Usage = () => {
  const steps: step[] = [
    {
      id: 1,
      title: "Krok 1",
      img: invoice,
      point1:
        "Aplikacja pomoże w organizacji faktur kosztowych w Twojej organizacji.",
      point2:
        "Nie trac czasu na ręczne pobieranie faktur ze skrzynki mailowej.",
      point3:
        "Od dziś, nie pominiesz żadnej faktury jaka powinna być przesłana do księgowości.",
    },
    {
      id: 2,
      title: "Krok 2",
      img: scanning,
      point1: "Aplikacja bezpośrednio integruje się z Twoją skrzynką mailową.",
      point2:
        "Wszystkie faktury dot. wybranego okresu rozliczeniowego zostaną pobrane i spakowane do jednego pliku.",
      point3:
        "Aplikacja wygeneruje jednego maila z paczką załączników, który zostanie wysłany na skrzynkę mailową Twojego biura księgowego.",
    },
    {
      id: 3,
      title: "Krok 3",
      img: document,
      point1:
        "Biuro księgowe otrzymuje jednego maila, przez co eliminujemy ryzyko pominięcia dokumentu",
      point2:
        "Dostęp do historycznych paczek dokumentów - na wypadek kontroli/ rozbieżności.",
      point3: "",
    },
    {
      id: 4,
      title: "Krok 4",
      img: value,
      point1:
        "Dzięki TheBill, możesz skupić się na swoim biznesie bez obawy o to że nie zdążysz rozliczyć się z Urzędem Skarbowym czy ZUS.",
      point2:
        "Aplikacja pokaże Ci wykaz płatności miesięcznych - możesz sprawnie zarządzać subskrypcjami i eliminować te z których nie korzystasz.",
      point3:   
        "Nie musisz się martwić o zamknięcie miesiąca - aplikacja zbierze faktury cyfrowe i papierowe i stworzy z nich paczkę. Stanie się Twoim wirtualnym asystentem.",
    },
  ];

  return (
    <section className="mt-8 items-center mx-[8%] font-poppins flex flex-col border-y-4 py-8 border-[#51FFBF]">
      <h1 className="text-4xl tracking-wider mt-12 font-extrabold font-poppins uppercase ">
        Jak aplikacja TheBill może pomóc Twojej firmie?
      </h1>
      <div className="flex-col">
        {steps.map((step) => (
          <div className="w-full flex flex-col my-5" key={step.id}>
            <h1 className="font-extrabold text-4xl my-8 lg:text-start text-center">{step.title}</h1>
            <div className="lg:flex-row flex-col flex justify-center items-center lg:ml-[-40px]">
              <img src={step.img} alt={step.img} className="lg:mr-8 py-5 lg:py-0"/>
              <div className="flex flex-col lg:w-2/3">
                <div className="flex flex-row">
                  <IoCheckmarkDone className="text-green-500 mr-2 lg:text-2xl text-4xl w-1/12" />
                  <p className="text-2xl w-11/12">{step.point1}</p>
                </div>
                <div className="flex flex-row my-4">
                <IoCheckmarkDone className="text-green-500 mr-2 lg:text-2xl text-4xl w-1/12" />
                  <p className="text-2xl w-11/12">{step.point2}</p>
                </div>{" "}
               {step.point3 !== '' &&  <div className="flex flex-row">
               <IoCheckmarkDone className="text-green-500 mr-2 lg:text-2xl text-4xl w-1/12" />
                  <p className="text-2xl w-11/12">{step.point3}</p>
                </div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Usage;
