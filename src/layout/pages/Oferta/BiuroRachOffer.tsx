import mail from "../../../assets/innerSettingsIcons/email 1.png";

const BiuroRachOffer = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-center font-playFair font-black">Jesteś biurem rachunkowym?</h1>
      <h3 className="text-4xl text-center font-playFair mt-10 text-gray-700 mb-10">Masz pytania lub chcesz nawiązać współpracę?</h3>
      <div className="flex flex-row">
      
      <div className="mx-auto">
        <a href="mailto:t@kvxdigitalsolutions.com?subject=Współpraca - OneBill" className="bg-[#5FFA9D] flex flex-col px-10 py-8 justify-center rounded-3xl border-[#1A9367] border hover:scale-105">
          <p className="text-3xl text-center tracking-wider font-playFair">Napisz<br/>do nas!</p>
          <img src={mail} alt="mail" />
        </a>
      </div>
        
      </div>
    </div>
  );
};

export default BiuroRachOffer;
