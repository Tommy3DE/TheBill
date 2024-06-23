import bg from "../../../assets/pricing/bg.png";
import image from "../../../assets/pricing/Select-bro 1.png";



const PricingIntro = () => {

  return (
    <section className="lg:mt-40 mt-12">
      <img src={bg} alt="bg" className="w-full" />
      <h1 className=" font-black text-6xl font-playFair text-center my-12">
        Ile kosztuje osobisty asystent{" "}
        <span className="text-[#1A9367]">OneBill?</span>
      </h1>
      <h3 className="text-gray-400 font-poppins text-center text-2xl">
        Znajdź plan najlepiej dopasowany do Twoich potrzeb biznesowych.
      </h3>
      <div className="flex lg:flex-row flex-col justify-center items-center">
        <img src={image} alt="finance_bro" className="" />
        <div className="flex flex-col lg:w-1/4">
          <h1 className="font-playFair text-4xl font-black text-start">
            W <span className="text-[#1A9367]">OneBill</span> wiemy co jest{" "}
            najcenniejsze dla przedsiębiorców - czas...
          </h1>
          <h3 className="font-poppins text-lg mt-5 tracking-wider">
            Dla naszych klientów przygotowaliśmy{" "}
            <span className="font-bold">
              3 pakiety, dostosowane do indywidualnych potrzeb każdego
              przedsiębiorcy.{" "}
            </span>
            Sam zdecyduj, który pakiet spełni Twoje potrzeby.
          </h3>
        </div>
      </div>
      
    </section>
  );
};

export default PricingIntro;
