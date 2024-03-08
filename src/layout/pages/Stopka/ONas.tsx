import Navbar from "../../Navbar";
import kvx from "../../../assets/kvxLogo.png";
import Footer from "../../Footer";
import tick from "../../../assets/icons/tick.png";

interface MissionTile {
  id: number;
  text: string;
}
const ONas = () => {
  const missions: MissionTile[] = [
    {
      id: 1,
      text: "tworzenie oprogramowania ułatwiajacego prowadzenie działalności gospodarczej,",
    },
    {
      id: 2,
      text: "aktywizacja osób wykluczonych cyfrowo,",
    },
    {
      id: 3,
      text: "oprogramowanie, z którego KAŻDY może skorzystać,",
    },
    {
      id: 4,
      text: "krzewienie przedsiębiorczości w społeczeństwie,",
    },
    {
      id: 5,
      text: "ułatwianie komunikacji pomiędzy przedsiębiorcami a organami państwowymi.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="lg:mx-[8%] mx-[5%]  max-w-[1980px] font-poppins">
        <h1 className=" font-playFair text-7xl font-black mt-[10%] text-green-700 text-center">
          Kim jesteśmy?{" "}
        </h1>
        <img src={kvx} alt="logo_kvx" className="mx-auto mt-10" />
        <p className=" text-2xl tracking-wider leading-loose text-justify">
          Firma{" "}
          <span className=" underline font-black">KVX Digital Solutions</span>{" "}
          dostarcza oprogramowanie mające na celu ułatwienie prowadzenia
          biznesu, wszelkim podmiotom gospodarczym działającym na terenie
          Polski. Chcemy wprowadzać usprawnienia w obszarach, które odbiegają od
          obecnych standardów rynkowych, poprzez transformację cyfrową produktów
          i procesów w taki sposób, aby mogły one trafić do jak najszerszego
          grona odbiorców.
        </p>
        <h1 className=" font-playFair text-5xl font-black my-[5%] text-green-700 text-center">
          Kim jesteśmy?{" "}
        </h1>
        <p className=" text-2xl tracking-wider leading-loose text-justify">
          Nasza misja w KVX Digital Solutions skupia się na wspieraniu w
          działaniu i rozwijaniu oprogramowania dla najmniejszych jednostek
          gospodarczych, stanowiących kluczowy element polskiej gospodarki.
          Chcemy upraszczać skomplikowaną rzeczywistość podatkową, tym samym
          ułatwiać działania operacyjne wszelkich drobnych przedsiębiorców w
          Polsce.
        </p>
        <h1 className=" font-playFair text-5xl font-black my-[5%] text-green-700 text-center">
          Wizja
        </h1>
        <ul className="flex flex-col justify-center items-start lg:mx-[15%]">
          {missions.map((mission) => (
            <li key={mission.id} className="flex flex-row items-center mb-5">
              <img src={tick} alt="tick" />
              <div className="text-2xl ml-5">{mission.text}</div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ONas;
