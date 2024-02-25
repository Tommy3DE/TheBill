import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import fb from "../../../../assets/socialMedia/fb.png";
import x from "../../../../assets/socialMedia/x.png";
import ig from "../../../../assets/socialMedia/ig.png";
import pic2 from "../../../../assets/articlesThumbnail/simon-kadula-8gr6bObQLOI-unsplash 1.png";
import pic3 from "../../../../assets/articlesThumbnail/towfiqu-barbhuiya-bwOAixLG0uc-unsplash 1.png";

const BlogArticle1 = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1980px] mt-32 mx-[8%]">
        <h1 className=" font-playFair text-4xl font-black text-[#1A9367]">
          Najczęstsze błędy w zarządzaniu finansami małych firm
        </h1>
        <div className="font-poppins text-gray-600">
          <p className="my-8">
            Zarządzanie finansami to kluczowy aspekt prowadzenia każdej małej
            firmy. Jednak wiele mikroprzedsiębiorstw napotyka na drodze typowe
            błędy, które mogą poważnie zaburzyć ich stabilność finansową. Poznaj
            najczęstsze pułapki i dowiedz się, jak ich unikać.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Brak Precyzyjnego Budżetowania
          </p>
          <p>
            Niektóre firmy działają bez jasno określonego budżetu, co prowadzi
            do niekontrolowanych wydatków i problemów z przepływem środków.
            Rozwiązanie: Regularne planowanie budżetu i ścisłe monitorowanie
            wydatków. Używaj narzędzi, takich jak OneBill, do śledzenia wydatków
            i przewidywania przyszłych kosztów.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Nieefektywne Zarządzanie Przepływem Pieniężnym
          </p>
          <p>
            Błąd: Zaniedbywanie przepływu pieniędzy może prowadzić do braku
            środków na pokrycie bieżących wydatków. Rozwiązanie: Utrzymuj
            regularny monitoring stanu konta oraz nadchodzących płatności i
            należności. Automatyzuj procesy księgowe, aby zapewnić aktualność
            danych finansowych.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Zaniedbanie Podatkowych Zobowiązań
          </p>
          <p>
            Błąd: Opóźnienia w płaceniu podatków lub błędne ich rozliczanie mogą
            skutkować karami i odsetkami. Rozwiązanie: Skorzystaj z doradztwa
            podatkowego i upewnij się, że Twoja firma przestrzega obowiązujących
            przepisów podatkowych. Aplikacje takie jak OneBill mogą pomóc w
            organizacji dokumentów podatkowych.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Brak Dostatecznej Rezerwy Kapitałowej
          </p>
          <p>
            Błąd: Brak rezerw finansowych na niespodziewane wydatki lub
            spowolnienie działalności. Rozwiązanie: Zbuduj "poduszkę finansową"
            na wypadek nieprzewidzianych sytuacji. Idealnie, powinna ona
            pokrywać koszty funkcjonowania firmy przez kilka miesięcy.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
            Niekorzystanie z Nowoczesnych Narzędzi Finansowych
          </p>
          <p>
            Poleganie na przestarzałych metodach księgowych, co może prowadzić
            do błędów i opóźnień. Rozwiązanie: Wykorzystaj nowoczesne
            oprogramowanie do zarządzania finansami, takie jak OneBill, które
            oferuje automatyzację i lepszy przegląd finansów firmy.
          </p>
          <p className=" mt-5">
            Zarządzanie finansami małej firmy wymaga świadomości i odpowiednich
            narzędzi. Unikając tych typowych błędów i korzystając z nowoczesnych
            rozwiązań, takich jak OneBill, możesz znacząco poprawić stabilność
            finansową i potencjał wzrostu swojej firmy.
          </p>
        </div>
      </div>
      <div className="text-center my-14 font-playFair font-black text-gray-700 text-3xl">
        Udostępnij
      </div>
      <div className="flex flex-row justify-center">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http://onebill.com.pl/blog/1"
          target="_blank"
        >
          <img src={fb} alt="Udostępnij na Facebooku" className=" h-16" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=http://onebill.com.pl/blog/1&text=Polecam"
          target="_blank"
          className="mx-10"
        >
          <img src={x} alt="Tweetnij"  className=" h-16"/>
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
          <img src={pic3} alt="thumb2" />
          <p className="text-lg font-black mx-[3%] my-5">
            Automatyzacja procesów biznesowych w firmach{" "}
          </p>
          <p className="mx-[3%] ">
            W erze cyfryzacji, automatyzacja procesów finansowych stała się
            kluczowym elementem efektywnego zarządzania małą firmą.
          </p>
          <Link
            to={`/blog/2`}
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

export default BlogArticle1;
