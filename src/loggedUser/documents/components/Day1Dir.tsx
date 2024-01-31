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
      title: "01/2022",
      route: "012022",
    },
    {
      id: 2,
      title: "02/2022",
      route: "022022",
    },
    {
      id: 3,
      title: "03/2022",
      route: "032022",
    },
    {
      id: 4,
      title: "04/2022",
      route: "042022",
    },
    {
      id: 5,
      title: "05/2022",
      route: "052022",
    },
    {
      id: 6,
      title: "06/2022",
      route: "062022",
    },
    {
      id: 7,
      title: "07/2022",
      route: "072022",
    },
    {
      id: 8,
      title: "08/2022",
      route: "082022",
    },
    {
      id: 9,
      title: "09/2022",
      route: "092022",
    },
    {
      id: 10,
      title: "10/2022",
      route: "102022",
    },
    {
      id: 11,
      title: "11/2022",
      route: "112022",
    },
    {
      id: 12,
      title: "12/2022",
      route: "122022",
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