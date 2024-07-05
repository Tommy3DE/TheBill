import pic1 from "../../../assets/newInfo/1.png";
import pic2 from "../../../assets/newInfo/2.png";
import pic3 from "../../../assets/newInfo/3.png";
import pic4 from "../../../assets/newInfo/4.png";
import way from "../../../assets/newInfo/decission.png";
import tick from "../../../assets/icons/tick.png";
import logo from "../../../assets/logo.png";
import info from '../../../assets/newInfo/info.png'
import sec from '../../../assets/newInfo/sec.png'

type InfoTile = {
  id: number;
  pic: string;
  title: string;
  text: string;
};

const NewInfo = () => {
  const tiles: InfoTile[] = [
    {
      id: 1,
      pic: pic1,
      title: "Skanuj skrzynkę",
      text: "Automatycznie znajduj załączniki mailowe, które są fakturami.",
    },
    {
      id: 2,
      pic: pic2,
      title: "Ustaw autoscan",
      text: "Zleć automatyczne skanowanie maila i otrzymuj raporty bezpośrednio na maila.",
    },
    {
      id: 3,
      pic: pic3,
      title: "Twórz paczki",
      text: "Przesyłaj faktury bezpośrednio do księgowego z aplikacji w formacie PDF lub ZIP.",
    },
    {
      id: 4,
      pic: pic4,
      title: "Organizuj dokumenty",
      text: "Bądź przygotowany na wypadek kontroli skarbowej. Przechowuj dokumenty do 5 lat wstecz.",
    },
  ];
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-center items-center mt-40">
        {tiles.map((tile) => (
          <div
            className="flex flex-col lg:w-[20%] mx-5 justify-center items-between w-full"
            key={tile.id}
          >
            <img src={tile.pic} alt="pic" className="w-72 mx-auto" />
            <div>
              <h2 className="text-center text-3xl font-playFair my-5 font-bold tracking-wider">
                {tile.title}
              </h2>
              <h4 className="text-justify text-2xl font-playFair">
                {tile.text}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <img src={way} alt="drogowskaz" className="mx-auto my-24" />
      <div className="flex flex-col lg:w-7/12 justify-center items-center lg:mx-auto mx-5">
        <div className="flex lg:flex-row flex-col font-poppins text-xl lg:text-3xl justify-center items-center lg:-ml-36">
          <img src={tick} alt="tick" className="lg:mr-10" />
          <h3 className="leading-relaxed tracking-wider">
            <span className="text-green-800 font-bold">Sam decydujesz</span>,
            które faktury mają zostać zapisane na Twoim koncie a które usunięte
            po każdym skanowaniu,
          </h3>
        </div>
        <div className="flex lg:flex-row-reverse flex-col font-poppins text-xl lg:text-3xl justify-center items-center my-14 lg:text-end lg:-mr-36">
          <img src={tick} alt="tick" className="lg:ml-10" />
          <h3 className="leading-relaxed tracking-wider">
            <span className="text-green-800 font-bold">
              Masz pełną kontrolę{" "}
            </span>
            nad swoim kontem. W każdej chwili możesz usunąć lub pobrać fakturę,
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col font-poppins text-xl lg:text-3xl justify-center items-center lg:-ml-36">
          <img src={tick} alt="tick" className="lg:mr-10" />
          <h3 className="leading-relaxed tracking-wider">
            Nasz program nie przechowuje
            <span className="text-green-800 font-bold">
              {" "}
              żadnych innych plików{" "}
            </span>
            oprócz faktur (w formacie PDF, JPG lub JPEG).
          </h3>
        </div>
      </div>
      <div className="lg:flex justify-center items-center hidden my-20 mx-[8%]">
        <div className="bg-[#1A9367] h-1 w-[45%] "/>
        <img src={logo} alt="logo" className="h-32" />
        <div className="bg-[#1A9367] h-1 w-[45%] "/>
      </div>
      <div className="my-24">
            <h1 className="font-poppins text-4xl font-light text-center">
                Dbamy o Twoją  <span className="text-[#1A9367] font-black"> prywatność</span>
            </h1>
            <div className="flex lg:flex-row flex-col justify-center">
                <div className="flex flex-col  justify-center">
                    <h2 className="text-4xl mb-10 font-poppins font-black text-center lg:text-start my-10 lg:my-0">Nasz algorytm:</h2>
                    <p className="flex flex-row items-center text-2xl">
                        <img src={info} alt="info" className="mr-5" /><span><span className="font-black underline">nie czyta</span> treści wiadomości e-mail.</span>
                    </p>
                    <p className="flex flex-row items-center text-2xl my-10 lg:-ml-24">
                    <img src={info} alt="info" className="mr-5"/><span><span className="font-black underline">nie wchodzi do wiadomości</span> mailowych a <br/>jedynie sprawdza ich załączniki.</span>
                    </p>
                    <p className="flex flex-row items-center text-2xl lg:-ml-12">
                    <img src={info} alt="info" className="mr-5"/><span><span className="font-black underline">wyszukuje załącznik,</span> które są fakturami.</span>
                    </p>
                </div>
                <img src={sec} alt="sec"  className="h-[550px] "/>
            </div>
      </div>
    </div>
  );
};

export default NewInfo;
