import roundedSec from "../../../assets/securityAssets/roundedImg.png";
import api from "../../../assets/securityAssets/api.png";
import google from "../../../assets/securityAssets/google.png";
import OBill from "../../../assets/securityAssets/integration.png";
import step1 from "../../../assets/securityAssets/step1.png";
import step2 from "../../../assets/securityAssets/step2.png";
import step3 from "../../../assets/securityAssets/step3.png";
import step4 from "../../../assets/securityAssets/step4.png";
import step5 from "../../../assets/securityAssets/step5.png";
import finish from "../../../assets/securityAssets/secGrats.png";
import secInv from "../../../assets/securityAssets/secInv.png";
import secCal from "../../../assets/securityAssets/secCal.png";
import secScan from "../../../assets/securityAssets/secScan.png";
import tick from "../../../assets/icons/tick.png";
import warn from "../../../assets/securityAssets/secWarn.png";
import priv from '../../../assets/securityAssets/SecPriv.png'
import point from '../../../assets/securityAssets/info.png'

const DiagonalLines = () => {
  return (
    <div className="lg:relative w-32 h-32 mx-12 lg:mt-6">
      <div className="absolute w-full h-1 bg-green-700 transform -translate-y-1/2 top-1/2 -rotate-45"></div>
      <div className="absolute w-full h-1 bg-green-700 transform -translate-y-1/2 top-1/2 rotate-45"></div>
    </div>
  );
};

const SecurityInfo = () => {
  return (
    <div className="flex  flex-col my-8 lg:mx-[8%] mx-[2%] font-poppins">
      <div className="mx-auto font-bold font-playFair">
        <img src={roundedSec} alt="secImg" />
        <p className="text-center text-3xl my-5">
          Twoja <span className="text-[#1A9367]">prywantość</span> jest dla nas
          priorytetem
        </p>
        <p className="font-normal text-xl text-center font-poppins">
          Jak działa One<span className="text-[#1A9367]">Bill</span>?
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center lg:mx-[10%] items-center my-10">
        <div>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <img src={step1} alt="step1" className="w-24 h-24 " />
            <h3 className="text-xl lg:mx-10">
              Po zalogowaniu do aplikacji, zostaniesz poproszony, o wyrażenie{" "}
              <span className="font-bold"> zgody w oknie Google.</span>
            </h3>
            <img src={google} alt=" google" className="h-20  lg:block hidden" />
          </div>
          <div className="flex lg:flex-row flex-col justify-center">
            <img src={api} alt="googleapi" className="h-36 lg:block hidden" />
            <DiagonalLines />
            <img src={OBill} alt="onebill" className="h-48" />
          </div>
        </div>
        <div>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <img src={step2} alt="step2" className="w-24 h-24 " />
            <h3 className="text-xl lg:ml-10">
              Dzięki zaakceptowaniu zgody Google, umożliwisz naszemu programowi
              <span className="font-bold"> częściowy</span> dostęp do swojej
              skrzynki e-mail, w celu przeskanowania jej pod kątem załączników (
              <span className="font-bold">faktur</span>) we wskazanym okresie.
            </h3>
          </div>
          <img src={secScan} alt="secScan" className="mx-auto h-64" />
        </div>
        <div>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <img src={step3} alt="step3" className="w-24 h-24 " />
            <h3 className="text-xl lg:ml-10">
              Nasz algorytm znajdzie{" "}
              <span className="font-bold">załączniki</span> na Twojej skrzynce
              we wskazanym okresie rozliczeniowym a następnie
              <span className="font-bold underline">
                {" "}
                zidentyfikuje, które z nich są{" "}
                <span className="text-[#1A9367]">fakturami</span>
              </span>{" "}
              i wyświetli je w kolejnym oknie.{" "}
            </h3>
          </div>
          <img src={secCal} alt="secCal" className="mx-auto h-64" />
        </div>
        <div>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <img src={step4} alt="step4" className="w-24 h-24 " />
            <h3 className="text-xl lg:ml-10">
              Znalezione faktury będą wyświetlone w trybie podglądu. Tutaj
              możesz zdecydować, które dokumenty chcesz usunąć. Jeśli nie chcesz
              nic usuwać, kliknij “DALEJ”.
            </h3>
          </div>
          <img src={secInv} alt="secInv" className="mx-auto h-44" />
        </div>
        <div>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <img src={step5} alt="step5" className="w-24 h-24 " />
            <h3 className="text-xl lg:ml-10">
              Po zweryfikowaniu znalezionych plików, będziesz mógł zadecydować
              co zrobić z nimi dalej - na przykład, będziesz mógł{" "}
              <span className="font-bold">
                przesłać je bezpośrednio do{" "}
                <span className="text-[#1A9367]">księgowego.</span>{" "}
              </span>
            </h3>
          </div>
          <img src={finish} alt="finish" className="mx-auto h-80" />
        </div>
      </div>
      <div className="my-5 lg:mx-[15%]">
        <p className="text-3xl text-center">
          W One<span className="text-[#1A9367] font-bold">Bill</span>:
        </p>
        <div>
          <div className="text-xl flex mb-5 items-center">
            <img src={tick} alt="tick" />
            <h3 className="ml-5">
              <span className="text-[#1A9367]">Sam decydujesz</span>, które
              faktury mają zostać zapisane na Twoim koncie a które usunięte po
              każdym skanowaniu,
            </h3>
          </div>
          <div className="text-xl mb-5 flex items-center">
            <img src={tick} alt="tick" />
            <h3 className="ml-5">
              <span className="text-[#1A9367]">Masz pełną kontrolę </span>
              nad swoim kontem. W każdej chwili możesz usunąć lub pobrać
              fakturę,
            </h3>
          </div>
          <div className="text-xl flex items-center">
            <img src={tick} alt="tick" />
            <h3 className="ml-5">
              Nasz program nie przechowuje{" "}
              <span className="text-[#1A9367]">żadnych innych plików</span>{" "}
              oprócz faktur (w formacie PDF lub JPG).
            </h3>
          </div>
        </div>
        <img src={warn} alt="warning" className="mx-auto" />
        <p className="tracking-wider lg:mx-[5%] text-center">
          <span className="text-[#EEB524] font-bold">Usunięcie faktury </span>z
          naszego systemu spowoduje nieodwracalne utracenie jej w naszej
          aplikacji. Oznaczać to będzie, że należy wykonać{" "}
          <span className="font-bold underline">
            ponowny skan w celu wyświetlenia usuniętych dokumentów
          </span>
          .
        </p>
        <img src={priv} alt="priv" className="mx-auto h-20 my-5"/>
        <p className="text-3xl text-center">
        W kwestii zachowania <span className="text-[#1A9367] font-bold">prywatności</span>,  nasz algorytm: :
        </p>
        <div className="mt-8">
          <div className="text-xl flex mb-5 items-center ">
            <img src={point} alt="point" />
            <h3 className="ml-5">
              <span className="font-bold underline">Nie czyta</span>,treści wiadomości e-mail.
            </h3>
          </div>
          <div className="text-xl flex mb-5 items-center ">
            <img src={point} alt="point" />
            <h3 className="ml-5">
              <span className="font-bold underline">Nie wchodzi do wiadomości</span> mailowych a jedynie sprawdza ich załączniki.
            </h3>
          </div>
          <div className="text-xl flex mb-5 items-center ">
            <img src={point} alt="point" />
            <h3 className="ml-5">
              <span className="font-bold underline">Wyszukuje załączniki</span>, które mają postać faktury na twojej skrzynce mailowej.
            </h3>
          </div>
          </div>
      </div>
    </div>
  );
};

export default SecurityInfo;
