import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import fb from "../../../../assets/socialMedia/fb.png";
import x from "../../../../assets/socialMedia/x.png";
import ig from "../../../../assets/socialMedia/ig.png";
import pic4 from "../../../../assets/articlesThumbnail/sajad-nori-oPRU2Cne0Pw-unsplash 1.png";
import pic2 from "../../../../assets/articlesThumbnail/towfiqu-barbhuiya-bwOAixLG0uc-unsplash 1.png";

const BlogArticle5 = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1980px] mt-32 mx-[8%]">
        <h1 className=" font-playFair text-4xl font-black text-[#1A9367]">
          Cyfryzacja Twojej firmy - od papierkowej dokumentacji do zarządzania
          online{" "}
        </h1>
        <div className="font-poppins text-gray-600">
          <p className="my-8">
          Przypadek Pani Anny – Właścicielki Salonu Kosmetycznego          </p>
          <p className="font-black text-[#1A9367] mt-5">Korzyści Cyfryzacji</p>
          <p>
          Wyzwanie: Anna spędzała wiele godzin tygodniowo na sortowaniu i przetwarzaniu papierowych faktur, co zabierało jej cenny czas, który mogła poświęcić na obsługę klientów.
<br />
Rozwiązanie OneBill: Po wdrożeniu OneBill, Anna zautomatyzowała proces skanowania i archiwizacji dokumentów kosztowych, co znacząco skróciło czas potrzebny na ich przetwarzanie.
<br />
Rezultaty: Dzięki oszczędności czasu, Anna mogła zwiększyć liczbę obsługiwanych klientów, co przełożyło się na wzrost przychodów jej salonu.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
          Przypadek Tomasza – Właściciela Małej Kawiarni          </p>
          <p>
          Wyzwanie: Tomasz miał trudności z monitorowaniem i analizowaniem wydatków swojej kawiarni, co utrudniało mu efektywne zarządzanie budżetem.
<br />
Rozwiązanie OneBill: OneBill pozwolił Tomaszowi na łatwe śledzenie wszystkich wydatków i przychodów, zapewniając klarowny przegląd finansów jego firmy.
<br />
Rezultaty: Lepsza kontrola nad finansami pozwoliła Tomaszowi na optymalizację kosztów i zwiększenie rentowności biznesu.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
          Przypadek Pana Bogdana - Właściciela salonu tatuażu          </p>
          <p>
          Wyzwanie: Pan Bogda nie miał czasu zajmować się dokumentami kosztowymi, które spływały do jego salonu. Z uwagi na fakt, że całe dnie spędzał na sesjach z klientami, zarządzanie finansami firmy schodziło przez to na drugi plan.
<br />
Rozwiązanie OneBill: Implementacja OneBill pozwoliła na automatyzację zarządzania dokumentacją kosztową, co uprościło procesy księgowe i administracyjne. Pan Bogdan dzisiaj wie, ile, kiedy i za co płaci. 
<br />
Rezultaty: Salon zyskał lepszą organizację pracy, zmniejszył ryzyko błędów i poprawił efektywność operacyjną. Pan Bogdan teraz z czystym sumieniem, może poświęcić się swojej pracy. 
<br />
Jak widać z powyższych przykładów, OneBill oferuje różnorodne korzyści dla przedsiębiorców z różnych branż. Automatyzacja i cyfryzacja procesów finansowych nie tylko oszczędza czas, ale także przyczynia się do lepszego zarządzania finansami i wzrostu efektywności operacyjnej. OneBill to rozwiązanie, które umożliwia przedsiębiorcom skupienie się na rozwijaniu ich biznesu, pozostawiając zarządzanie dokumentacją naszej aplikacji.
          </p>
          <p className="font-black text-[#1A9367] mt-5">
          Przypadek Pana Marka - Właściciela Salonu Groomingu Psów          </p>
          <p>
          Wyzwanie: Pan Marek, prowadzący salon pielęgnacji zwierząt, zmagał się z problemem efektywnego zarządzania i organizacji licznych dokumentów kosztowych. Codziennie otrzymywał faktury od dostawców produktów do pielęgnacji, rachunki za usługi i inne dokumenty finansowe przez e-mail, co prowadziło do chaosu w dokumentacji i zwiększało ryzyko utraty ważnych informacji finansowych.
<br />
Rozwiązanie OneBill: Wprowadzenie systemu OneBill pozwoliło na automatyzację procesu zarządzania dokumentami kosztowymi. Program zaczął skanować skrzynkę e-mail Pana Marka, identyfikować i ekstrahować faktury oraz inne dokumenty kosztowe, a następnie przekazywać je w uporządkowanym i łatwym do przetworzenia formacie bezpośrednio do biura księgowego.
<br />
Rezultaty: Dzięki zautomatyzowanemu procesowi zarządzania fakturami i dokumentami kosztowymi, salon Pana Marka osiągnął znaczną poprawę organizacji i efektywności pracy. Systematyczne przekazywanie dokumentów do księgowości przyczyniło się do szybszego i dokładniejszego rozliczania kosztów.
          </p>
          
        </div>
      </div>
      <div className="text-center my-14 font-playFair font-black text-gray-700 text-3xl">
        Udostępnij
      </div>
      <div className="flex flex-row justify-center">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http://onebill.com.pl/blog/5"
          target="_blank"
        >
          <img src={fb} alt="Udostępnij na Facebooku" className=" h-16" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=http://onebill.com.pl/blog/5&text=Polecam"
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
          <img src={pic4} alt="thumb1" />
          <p className="text-lg font-black mx-[3%] my-5">
          Cyfryzacja Twojej firmy          </p>
          <p className="mx-[3%] ">
          W dzisiejszym szybko rozwijającym się świecie biznesu, cyfryzacja stała się kluczowa dla efektywności i wzrostu. 
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

export default BlogArticle5