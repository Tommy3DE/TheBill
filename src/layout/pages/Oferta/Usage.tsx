import oferta1 from "../../../assets/oferta1.png";
import rec from "../../../assets/Rectangle 274.png";

const Usage = () => {
  return (
    <section className="mt-24 items-center lg:mx-[15%] font-poppins flex lg:flex-row flex-col justify-center ">
      <div className="lg:relative lg:w-1/3">
        <img src={rec} alt="offer" className="z-10 lg:h-64 lg:w-72 hidden lg:block" />
        <img
          src={oferta1}
          alt="rec"
          className="lg:absolute lg:left-4 lg:top-4 lg:z-0 lg:h-64 lg:w-72"
        />
      </div>

      <div className="flex flex-col lg:w-1/2">
        <h1 className="font-playFair text-2xl font-black">
          Rewolucja w zarządzaniu dokumentami dla Mikroprzedsiębiorstw.
        </h1>
        <p className="text-lg text-justify">
          Nasze skrzynki mailowe codziennie zalewane są dziesiątkami, a czasami
          setkami e-maili. W tym natłoku wiadomości, przedsiębiorcy często mogą
          przeoczyć kluczowe dokumenty kosztowe. Tu z pomocą przychodzi
          aplikacja OneBill, która skanuje Twoją skrzynkę e-mail w poszukiwaniu
          wiadomości z załącznikami PDF. Z OneBill, proces segregacji ważnych
          dokumentów staje się prosty i automatyczny, oszczędzając Twój cenny
          czas.
        </p>
      </div>
    </section>
  );
};

export default Usage;
