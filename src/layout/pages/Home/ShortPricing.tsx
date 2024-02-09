import fab from "../../../assets/pricing/fab.png";
import prem from "../../../assets/pricing/prem.png";
import standard from "../../../assets/pricing/standard.png";
import check from "../../../assets/icons/checked.png";
import { Link } from "react-router-dom";

type priceTile = {
  id: number;
  title: string;
  img: string;
  point1: string;
  point2: string;
  point3: string;
};

const ShortPricing = () => {
  const pricingTiles: priceTile[] = [

    {
      id: 2,
      title: "Pakiet Standard",
      img: standard,
      point1: "15 faktur",
      point2: "5 sesji skanujących",
      point3: "chmura danych do 6 miesięcy",
    },
    {
      id: 3,
      title: "Pakiet Premium",
      img: prem,
      point1: "35 faktur",
      point2: "10 sesji skanujących",
      point3: "chmura danych do 2 lat",
    },
    {
      id: 4,
      title: "Pakiet Biznes",
      img: fab,
      point1: "Nieograniczona ilość faktur",
      point2: "Nieograniczone skanowanie",
      point3: "chmura danych do 5 lat",
    },
  ];
  return (
    <section className="mt-20 items-center mx-[8%] font-poppins border-[#51FFBF] border-t-4">
      <div className="flex lg:flex-row flex-col w-full justify-center">
        {pricingTiles.map((tile) => (
          <div
            className="flex flex-col mx-5 lg:w-1/5 border-4 border-[#1DCF8F] items-center my-14 rounded"
            key={tile.id}
          >
            <h1 className="text-2xl my-5 font-playFair">{tile.title}</h1>
            <img src={tile.img} alt={tile.img} className="w-52 h-52 rounded" />
            <div className="flex flex-col justify-start items-start my-8">
              <div className="flex flex-row justify-center items-center">
                <img src={check} alt="check"  className="mr-2"/>
                <p>{tile.point1}</p>
              </div>
              <div className="flex flex-row justify-center items-center my-5">
                <img src={check} alt="check" className="mr-2" />
                <p>{tile.point2}</p>
              </div>
              {tile.point3 !== "" && (
                <div className="flex flex-row justify-center items-start">
                  <img src={check} alt="check" className="mr-2" />
                  <p>{tile.point3}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="w-3/12 h-1 bg-[#51FFBF] hidden lg:block"/>

        <Link to='/cennik' className="lg:w-6/12 w-full h-12 rounded border-[#51FFBF] border-4 text-center text-3xl tracking-wider font-extrabold hover:bg-[#51FFBF] hover:text-white">
        Dowiedz się więcej
        </Link>
        <div className=" w-3/12 h-1 bg-[#51FFBF] hidden lg:block"/>
        
      </div>
    </section>
  );
};

export default ShortPricing;
