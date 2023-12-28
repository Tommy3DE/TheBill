type PricingProps = {
    yearly: boolean;
    setYearly: (value: boolean)=>void;
}

const PricingIntro = ({setYearly, yearly}: PricingProps) => {

    const toggleOffer = () => {
        setYearly(!yearly)
    }
  return (
    <section className="lg:mt-32 bg-diagonal-split bg-180% h-[750px]">
      <div className="w-full h-[80%] flex flex-col justify-between py-14">
        <div className="font-playFair flex flex-col justify-center items-center">
          <h1 className="text-5xl font-extrabold py-8 lg:text-start text-center">
            Ile kosztuje osobisty asystent OneBill?
          </h1>
          <h3 className="text-2xl text-gray-400 lg:text-start text-center">
            Znajdź plan najlepiej dopasowany do Twoich potrzeb biznesowych.
          </h3>
        </div>
        <div className="font-poppins text-4xl font-extrabold flex flex-col items-center ">
          <h1 className="mb-5 lg:text-start text-center">Dostępne abonamenty miesięczne</h1>
          <div className="flex flex-row  w-1/2 justify-center">
            <div className={`border-4 p-2 border-green-600 lg:w-1/3 text-center rounded-s-xl border-r-0 ${yearly ? 'bg-green-200' : 'bg-transparent'} cursor-pointer`} onClick={toggleOffer}>rocznie</div>
            <div className={`border-4 p-2 border-green-600 lg:w-1/3 text-center rounded-e-xl ${!yearly ? 'bg-green-200' : 'bg-transparent'} cursor-pointer`} onClick={toggleOffer}>miesięcznie</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingIntro;
