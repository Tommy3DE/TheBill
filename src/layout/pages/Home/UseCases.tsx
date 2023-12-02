import it from "../../../assets/icons/IT.png";
import bag from "../../../assets/icons/BAG.png";
import car from "../../../assets/icons/CAR.png";
import calc from "../../../assets/icons/CALC.png";
import cash from "../../../assets/icons/CASH.png";
import edu from "../../../assets/icons/EDU.png";
import gastro from "../../../assets/icons/GASTRO.png";
import tool from "../../../assets/icons/TOOL.png";
import med from "../../../assets/icons/MED.png";

const UseCases = () => {
  return (
    <section className="mt-20 items-center mx-[8%] font-poppins">
      <h1 className="text-center text-3xl font-bold ">
        Szerokie zastosowanie naszej aplikacji w różnych branżach
      </h1>
      <div className="flex flex-col mt-20">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-1/3 w-full">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Medycyna</h1>
              <img src={med} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Prywatne gabinety lekarskie
            </h3>
            <p className="text-lg text-justify">
              Automatyzacja procesu zbierania faktur za usługi medyczne i
              medykamenty, ułatwiająca zarządzanie finansami gabinetu.
            </p>
          </div>
          <div className="lg:w-1/3 w-full lg:mx-10 mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Edukacja</h1>
              <img src={edu} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Szkoły Językowe
            </h3>
            <p className="text-lg text-justify">
              Zarządzanie fakturami za materiały edukacyjne i wynajem sal, co
              pozwala na efektywne zarządzanie budżetem szkoły.
            </p>
          </div>
          <div className="lg:w-1/3 w-full mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Finanse</h1>
              <img src={cash} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Doradztwo finansowe
            </h3>
            <p className="text-lg text-justify">
              Ułatwienie procesu fakturowania za konsultacje i analizy
              finansowe, zapewniając przejrzystość i uproszczenie rozliczeń z
              klientami.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full lg:mt-14">
          <div className="lg:w-1/3 w-full mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Księgowość</h1>
              <img src={calc} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Biura rachunkowe
            </h3>
            <p className="text-lg text-justify">
              Uproszczenie procesu zbierania faktur od klientów, co znacznie
              przyspiesza i ułatwia procesy księgowe.
            </p>
          </div>
          <div className="lg:w-1/3 w-full lg:mx-10 mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">IT</h1>
              <img src={it} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Działalność programistyczna{" "}
            </h3>
            <p className="text-lg text-justify">
              Zarządzanie fakturami za licencje oprogramowania, sprzęt
              komputerowy i usługi hostingowe.
            </p>
          </div>
          <div className="lg:w-1/3 w-full mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Gastronomia</h1>
              <img src={gastro} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Restauracje i kawiarnie{" "}
            </h3>
            <p className="text-lg text-justify">
              Automatyzacja zbierania i przetwarzania faktur za zakup produktów
              spożywczych i napojów, ułatwiająca kontrolę kosztów.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full lg:mt-14">
          <div className="lg:w-1/3 w-full mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Budownictwo</h1>
              <img src={tool} alt="icon" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Firmy budowlane{" "}
            </h3>
            <p className="text-lg text-justify">
              Zarządzanie fakturami za materiały budowlane i usługi
              podwykonawców, co zapewnia lepszą kontrolę nad budżetem projektu.
            </p>
          </div>
          <div className="lg:w-1/3 w-full lg:mx-10 mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Handel</h1>
              <img src={bag} alt="icon" />
            </div>{" "}
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Sklepy i butiki{" "}
            </h3>
            <p className="text-lg text-justify">
              Zarządzanie fakturami za zakup towarów, usługi logistyczne i
              wynajem powierzchni handlowych.
            </p>
          </div>
          <div className="lg:w-1/3 w-full mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-extrabold mb-4">Transport</h1>
              <img src={car} alt="icon" />
            </div>{" "}
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Firmy transportowe{" "}
            </h3>
            <p className="text-lg text-justify">
              Uproszczenie procesu fakturowania za usługi transportowe, paliwo i
              konserwację pojazdów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
