import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import fb from "../../../../assets/socialMedia/fb.png";
import x from "../../../../assets/socialMedia/x.png";
import ig from "../../../../assets/socialMedia/ig.png";
import pic2 from "../../../../assets/articlesThumbnail/simon-kadula-8gr6bObQLOI-unsplash 1.png";
import pic4 from "../../../../assets/articlesThumbnail/sajad-nori-oPRU2Cne0Pw-unsplash 1.png";

const BlogArticle4 = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1980px] mt-32 mx-[8%]">
        <h1 className=" font-playFair text-4xl font-black text-[#1A9367]">
          Najważniejsze daty w roku rozliczeniowym - o czym pamiętać?{" "}
        </h1>
        <div className="font-poppins text-gray-600">
          <p className="my-8">
            Prowadzenie firmy w Polsce wiąże się z szeregiem terminowych
            obowiązków, których należy dopełniać, aby działać zgodnie z prawem i
            unikać nieprzyjemnych konsekwencji podatkowych. W niniejszym
            artykule omówimy kluczowe terminy i obowiązki polskich
            przedsiębiorców, aby pomóc w zrozumieniu i zaplanowaniu działań.
            <br />
            <br />W tym artykule, przedstawimy podstawowe terminy, jakich polski
            przedsiębiorca musi wpisać w swój kalendarz.
          </p>
          <p className="font-black text-[#1A9367] mt-5">Podatek Dochodowy </p>
          <p>
            Podatek dochodowy jest jednym z kluczowych obowiązków każdego
            przedsiębiorcy. W Polsce istnieją różne formy opodatkowania, takie
            jak opodatkowanie na zasadach ogólnych lub podatek liniowy. Zaliczki
            na podatek dochodowy należy opłacać zgodnie z ustalonym
            harmonogramem:
            <br />- Stawka podatku PIT różni się w zależności od posiadanej
            formy opodatkowania:
            <br />- Rozliczenie miesięczne: do 20. dnia miesiąca następującego
            po rozliczanym miesiącu.
            <br />- Rozliczenie kwartalne: do 20. dnia miesiąca następującego po
            rozliczanym kwartale.
          </p>
          <p className="font-black text-[#1A9367] mt-5">Podatek VAT </p>
          <p>
            Przedsiębiorcy zarejestrowani jako podatnicy VAT mają obowiązek
            opłacania podatku VAT w ustalonych terminach:
            <br />- Aktualna stawka podatku VAT: 23 %
            <br />- Rozliczenie miesięczne: do 25. dnia miesiąca następującego
            po rozliczanym miesiącu.
            <br />- Rozliczenie kwartalne: do 25. dnia miesiąca następującego po
            rozliczanym kwartale.
          </p>
          <p className="font-black text-[#1A9367] mt-5">Składki ZUS </p>
          <p>
            Opłacanie składek ZUS jest konieczne dla każdego przedsiębiorcy.
            Terminy opłat są uzależnione od tego, czy przedsiębiorca zatrudnia
            pracowników na umowy ze składkami ZUS:
            <br />- Przedsiębiorca niezatrudniający pracowników: do 10. dnia
            miesiąca.
            <br />- Przedsiębiorca zatrudniający pracowników: do 15. dnia
            miesiąca.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Przejście z "Małego ZUS-u" na "Duży ZUS"{" "}
          </p>
          <p>
            Przedsiębiorcy korzystający z "Małego ZUS-u" muszą dopełnić
            określonych obowiązków po jego zakończeniu, włączając w to złożenie
            odpowiednich formularzy w ZUS-ie.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Zmiana formy opodatkowania{" "}
          </p>
          <p>
            Przedsiębiorca musi pamiętać, że na początku każdego roku
            kalendarzowego, może zmienić swoją formę opodatkowania. To znaczy,
            jeśli przedsiębiorca swój pierwszy przychód osiągnął w styczniu
            2024, to czas na zmianę formy opodatkowania ma do 20 lutego 2024.
          </p>
          <p className=" mt-5">
            Prowadzenie firmy w Polsce wymaga ścisłego przestrzegania terminów i
            obowiązków podatkowych. Zrozumienie kluczowych terminów oraz
            terminowego dopełniania obowiązków podatkowych jest kluczowe dla
            zapewnienia prawidłowego funkcjonowania firmy i uniknięcia
            ewentualnych kłopotów z organami podatkowymi. Dlatego też, dbałość o
            terminowe rozliczenia oraz bieżącą aktualizację wiedzy na temat
            przepisów podatkowych jest niezwykle istotna dla każdego polskiego
            przedsiębiorcy.
          </p>
        </div>
      </div>
      <div className="text-center my-14 font-playFair font-black text-gray-700 text-3xl">
        Udostępnij
      </div>
      <div className="flex flex-row justify-center">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http://onebill.com.pl/blog/3"
          target="_blank"
        >
          <img src={fb} alt="Udostępnij na Facebooku" className=" h-16" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=http://onebill.com.pl/blog/3&text=Polecam"
          target="_blank"
          className="mx-10"
        >
          <img src={x} alt="Tweetnij" className=" h-16" />
        </a>{" "}
        <img src={ig} alt="insta" className=" h-16" />
      </div>
      <div className="text-center my-14 font-playFair font-black text-gray-700 text-3xl">
        Te artykuły mogą Cię zainteresować
      </div>
      <div className="mt-14 flex flex-row justify-around font-poppins">
        <div className=" shadow-2xl flex flex-col justify-between w-1/3">
          <img src={pic2} alt="thumb1" />
          <p className="text-lg font-black mx-[3%] my-5">
            Najważniejsze daty w roku rozliczeniowym - o czym pamiętać?
          </p>
          <p className="mx-[3%] ">
            Każdy przedsiębiorca w Polsce musi pamiętać o kluczowych datach w
            roku podatkowym, aby uniknąć kar i opóźnień.{" "}
          </p>
          <Link
            to={`/blog/3`}
            className="flex flex-row items-center font-bold mt-5 hover:text-green-700 border-t-2 py-3 mx-[3%]"
          >
            Czytaj dalej <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className=" shadow-2xl flex flex-col justify-between w-1/3">
          <img src={pic4} alt="thumb2" />
          <p className="text-lg font-black mx-[3%] my-5">
            Cyfryzacja Twojej firmy
          </p>
          <p className="mx-[3%] ">
            W dzisiejszym szybko rozwijającym się świecie biznesu, cyfryzacja
            stała się kluczowa dla efektywności i wzrostu.{" "}
          </p>
          <Link
            to={`/blog/4`}
            className="flex flex-row items-center font-bold mt-5 hover:text-green-700 border-t-2 py-3 mx-[3%]"
          >
            Czytaj dalej <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogArticle4