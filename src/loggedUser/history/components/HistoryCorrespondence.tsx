import ReturnBtn from "../../../components/ReturnBtn";
import SlimNav from "../../../layout/SlimNav";
import fast from "../../../assets/history/fast.png";

const HistoryCorrespondence = () => {
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold tracking-wider mt-[7%]">
          Historia korespondencji z biurem księgowym{" "}
        </h1>
        <img src={fast} alt="down" className="my-10 h-36" />
        <h2 className="text-2xl text-gray-700 text-center tracking-wider">
          Poniżej możesz sprawdzić historię korespondencji z Twoim biurem
          księgowym.{" "}
        </h2>
        <table className="table-auto w-11/12 mx-auto mb-10 mt-5">
          <thead>
            <tr className=" border-b-2 font-black text-lg">
              <th className="px-4 py-2 text-start">#</th>
              <th className="px-4 py-2 text-start">Data Skanowania</th>
              <th className="px-4 py-2 text-start">Wysłano do księgowości?</th>
              <th className="px-4 py-2 text-start">Liczba faktur</th>
              <th className="px-4 py-2 text-start">Format</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="flex justify-center mt-12">
          <ReturnBtn route="/logged/history" />
        </div>
      </div>
    </div>
  );
};

export default HistoryCorrespondence;
