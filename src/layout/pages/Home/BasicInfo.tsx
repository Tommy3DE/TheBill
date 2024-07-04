import { ReactNode } from "react";
import mail from "../../../assets/usageIcons/mail.png";
import pc from "../../../assets/usageIcons/pc.png";
import secure from "../../../assets/usageIcons/secure.png";
import { Link } from "react-router-dom";

type Info = {
  id: number;
  pic: string;
  title: string;
  text: ReactNode;
};

const BasicInfo = () => {
  const infoTiles: Info[] = [
    {
      id: 1,
      pic: mail,
      title: "Automatyczne skanowanie skrzynki e-mail",
      text: "Nasze inteligentne algorytmy wyszukują i segregują Twoje dokumenty kosztowe bez żadnego wysiłku z Twojej strony",
    },
    {
      id: 2,
      pic: pc,
      title: "Prosta Integracja",
      text: "OneBill w prosty sposób łączy się z Twoją skrzynką mailową. W kilku krokach możesz zsynchronizować swój adres e-mail i rozpocząć przeszukiwanie skrzynki. ",
    },
    {
      id: 3,
      pic: secure,
      title: "Bezpieczeństwo i prywatność",
      text: (
        <>
          Twoje dane są dla nas bardzo ważne, dlatego też zapewniamy najwyższy poziom bezpieczeństwa.
Pozytywnie przeszliśmy audyt bezpieczeństwa oficjalnego partnera Google - <a href="https://tacsecurity.com/#" className="font-bold hover:text-green-700 cursor-pointer" target="_blank">TAC Security</a>.
        </>
      ),
    },
  ];

  return (
    <section className=" mt-10 items-center lg:mx-[8%] font-poppins">
      <div className="bg-[#83F9CE] flex flex-col p-6 rounded-lg lg:w-[60%] mx-auto text-center py-8 animate-pulse ">
        <Link to='/newUser'><h3 className="text-3xl font-bold font-playFair ">
          Wypróbuj za darmo przez okres 14 dni!
        </h3>
        </Link>
        
      </div>
      <div className=" flex flex-col justify-center">
        {infoTiles.map((tile) => (
          <div
            className={`lg:mx-[5%] flex lg:flex-row flex-col  justify-around ${tile.id === 2 ? 'lg:flex-row-reverse lg:pl-44' : 'lg:flex-row lg:pr-44'} items-center py-8`}
            key={tile.id}
          >
            <img src={tile.pic} alt={tile.pic} className="lg:w-[40%]" />
            <div className="lg:w-[60%] lg:mx-14 mx-2">
              <h1 className={`text-4xl font-bold text-start my-8 font-playFair`}>
                {tile.title}
              </h1>
              <p className="lg:mt-14 text-justify text-xl font-poppins">
                {tile.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BasicInfo;
