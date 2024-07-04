import logo from "../../../assets/logo.png";
import gmail from "../../../assets/gmail.png";
import tac from '../../../assets/tac1.png'
import tac2 from '../../../assets/tac2.png'
const GmailIntegration = () => {
  const DiagonalLines = () => {
    return (
        <div className="lg:relative w-32 h-32 mx-12 mt-6 lg:flex hidden">
            <div className="absolute w-full h-1 bg-green-700 transform -translate-y-1/2 top-1/2 -rotate-45"></div>
            <div className="absolute w-full h-1 bg-green-700 transform -translate-y-1/2 top-1/2 rotate-45"></div>
        </div>
    );
};

  return (
    <div className="mx-[8%]"><div className="lg:flex justify-center items-center hidden mb-10">
        <div className="bg-[#1A9367] h-1 w-[45%] "/>
        <img src={logo} alt="logo" className="h-32" />
        <div className="bg-[#1A9367] h-1 w-[45%] "/>
      </div>
      <div className="flex justify-evenly mb-10">
        <img src={tac} alt="tac1" className="h-40"/>
        <img src={tac2} alt="tac2" className="h-40"/>
      </div>
      
      <div className="mx-24 text-4xl px-5 py-8 rounded-3xl font-bold text-center font-playFair bg-[#E5FEF4] mb-10">
      Zaufaj aplikacji zweryfikowanej przez Google.
      </div>

      <div className="flex flex-row justify-center">
        <img src={logo} alt="logo" className="h-44" />
        <DiagonalLines/>
        <img src={gmail} alt="gmail" className="h-44 lg:block hidden" />
      </div>
      <p className="text-center font-playFair text-green-700 text-3xl font-extrabold tracking-wide my-8">Obecnie wspieramy integrację tylko domeny Google.</p>
      <p className="text-center font-playFair text-3xl font-extrabold"> 
        W kolejnych miesiącach zamierzamy stopniowo rozszerzać naszą ofertę o
        kolejne integracje.
      </p>
    </div>
  );
};

export default GmailIntegration;
