import bida from "../../../assets/pricing/bida.png";
import fab from "../../../assets/pricing/fab.png";
import prem from "../../../assets/pricing/prem.png";
import standard from "../../../assets/pricing/standard.png";
import check from "../../../assets/icons/checked.png";

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
      id: 1,
      title: "Pakiet Darmowy",
      img: bida,
      point1: "5 faktur",
      point2: "1 skanowanie",
      point3: "",
    },
    {
      id: 2,
      title: "Pakiet Standard",
      img: standard,
      point1: "10 faktur",
      point2: "3 skanowania",
      point3: "chmura danych",
    },
    {
      id: 3,
      title: "Pakiet Premium",
      img: prem,
      point1: "20 faktur",
      point2: "7 skanowań",
      point3: "chmura danych",
    },
    {
      id: 4,
      title: "Pakiet Biznes",
      img: fab,
      point1: "40 faktur",
      point2: "20 skanowań",
      point3: "chmura danych",
    },
  ];
  return (
    <section className="mt-20 items-center mx-[8%] font-poppins border-[#51FFBF] border-t-4">
      <div className="flex flex-row w-full justify-center">
        {pricingTiles.map((tile) => (
          <div
            className="flex flex-col mx-5 w-1/6 border-4 border-[#1DCF8F] items-center my-14 rounded"
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
        <div className="w-3/12 h-1 bg-[#51FFBF]"/>
        <div className="w-6/12 h-12 rounded border-[#51FFBF] border-4 text-center text-3xl tracking-wider font-extrabold">
        Dowiedz się więcej
        </div>
        <div className=" w-3/12 h-1 bg-[#51FFBF]"/>
        
      </div>
    </section>
  );
};

export default ShortPricing;