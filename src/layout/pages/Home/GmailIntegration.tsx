import logo from "../../../assets/logo.png";
import gmail from "../../../assets/gmail.png";
const GmailIntegration = () => {
    const DiagonalLines = () => {
        return (
          <div className="relative w-32 h-32 mx-12 mt-6">
            <div className="absolute w-full h-1 bg-green-700 transform -translate-y-1/2 top-1/2 -rotate-45"></div>
            <div className="absolute w-full h-1 bg-green-700 transform -translate-y-1/2 top-1/2 rotate-45"></div>
          </div>
        );
      };
  return (
    <div className="mx-[8%] border-b-2 border-t-2 border-green-700  py-10">
      <div className="flex flex-row justify-center">
        <img src={logo} alt="logo" className="h-44" />
        <DiagonalLines/>
        <img src={gmail} alt="gmail" className="h-44" />
      </div>
      <p className="text-center font-playFair text-green-700 text-3xl font-extrabold tracking-wide my-8">Obecnie wspieramy integrację tylko kont Google.</p>
      <p className="text-center font-playFair text-3xl font-extrabold"> 
        W kolejnych miesiącach zamierzamy stopniowo rozszerzać naszą ofertę o
        kolejne integracje.
      </p>
    </div>
  );
};

export default GmailIntegration;
