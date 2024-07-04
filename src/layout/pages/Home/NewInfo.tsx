import pic1 from "../../../assets/newInfo/1.png";
import pic2 from "../../../assets/newInfo/2.png";
import pic3 from "../../../assets/newInfo/3.png";
import pic4 from "../../../assets/newInfo/4.png";
import way from  '../../../assets/newInfo/decission.png'
import tick from "../../../assets/icons/tick.png";

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
            <h4 className="text-justify text-2xl font-playFair">{tile.text}</h4>
          </div>
        </div>
      ))}
    </div>
    
      <img src={way} alt="drogowskaz" className="mx-auto my-24" />
      <div className="flex flex-col w-7/12 justify-center items-center mx-auto">
        <div className="flex flex-row font-poppins text-3xl justify-center items-center -ml-36">
            <img src={tick} alt="tick" className="mr-10"/>
            <h3 className="leading-relaxed tracking-wider">
                <span className="text-green-800 font-bold">Sam decydujesz</span>, które faktury mają zostać zapisane na Twoim koncie a które usunięte po każdym skanowaniu,
            </h3>
        </div>
        <div className="flex flex-row-reverse font-poppins text-3xl justify-center items-center my-14 text-end -mr-36">
            <img src={tick} alt="tick"  className="ml-10"/>
            <h3  className="leading-relaxed tracking-wider">
                <span className="text-green-800 font-bold">Masz pełną kontrolę </span>nad swoim kontem. W każdej chwili możesz usunąć lub pobrać fakturę,
            </h3>
        </div>
        <div className="flex flex-row font-poppins text-3xl justify-center items-center -ml-36">
            <img src={tick} alt="tick" className="mr-10"/>
            <h3 className="leading-relaxed tracking-wider">
            Nasz program nie przechowuje<span className="text-green-800 font-bold"> żadnych innych plików </span>oprócz faktur (w formacie PDF, JPG lub JPEG).
            </h3>
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
