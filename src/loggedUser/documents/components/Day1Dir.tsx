import { Link } from "react-router-dom";
import dir from '../../../assets/docsIcons/dir.png'
import SlimNav from "../../../layout/SlimNav";
type DirTiles = {
  id: number;
  title: string;
  route: string;
};

const Day1Dir = () => {
  const dirs: DirTiles[] = [
    {
      id: 1,
      title: "01/2024",
      route: "12024",
    },
    {
      id: 2,
      title: "02/2024",
      route: "22024",
    },
    {
      id: 3,
      title: "03/2022",
      route: "32024",
    },
    {
      id: 4,
      title: "04/2024",
      route: "42024",
    },
    {
      id: 5,
      title: "05/2024",
      route: "52024",
    },
    {
      id: 6,
      title: "06/2024",
      route: "62024",
    },
    {
      id: 7,
      title: "07/2024",
      route: "72024",
    },
    {
      id: 8,
      title: "08/2024",
      route: "82024",
    },
    {
      id: 9,
      title: "09/2024",
      route: "92024",
    },
    {
      id: 10,
      title: "10/2024",
      route: "102024",
    },
    {
      id: 11,
      title: "11/2024",
      route: "112024",
    },
    {
      id: 12,
      title: "12/2024",
      route: "122024",
    },
  ];
  return (
    <section className="font-poppins">
      <SlimNav/>
      <div className="mx-auto max-w-[1980px] ">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-44 lg:mb-20 w-[70%] mx-auto">
        {dirs.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Link to={`/logged/documents/${item.route}`}>
            <div className="text-xl rounded-lg flex-col bg-green-300 p-8 mb-5 hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black">
              <img src={dir} alt={item.title} className="mx-auto mb-5" />
              <p className="text-center px-2">{item.title}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <Link to={"/logged"} className="lg:mx-10 mx-5 -mt-5">
        <button className="px-4 py-2 hover:scale-105 font-extrabold text-xl rounded bg-red-400 text-white lg:w-auto w-[90%]">
          Wstecz
        </button>
      </Link>
      </div>
    </section>
  );
};

export default Day1Dir