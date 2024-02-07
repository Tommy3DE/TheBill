import { ReactNode } from "react";
import mail from "../../../assets/usageIcons/mail.png";
import pc from "../../../assets/usageIcons/pc.png";
import secure from "../../../assets/usageIcons/secure.png";

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
          Twoje dane są dla nas bardzo ważne, dlatego też zapewniamy najwyższy
          poziom bezpieczeństwa i prywatności Twoich informacji. Więcej
          informacji znajdziesz w zakładce{" "}
          {<span className=" underline uppercase font-extrabold">OFERTA</span>}.
        </>
      ),
    },
  ];

  return (
    <section className=" mt-10 items-center mx-[8%] font-poppins">
      <div className="bg-[#83F9CE] flex flex-col p-6 rounded-lg w-[60%] mx-auto text-center py-8 animate-pulse">
        <h3 className="text-3xl font-bold font-playFair ">
          Wypróbuj za darmo przez okres 30 dni!
        </h3>
      </div>
      <div className=" flex flex-col justify-center">
        {infoTiles.map((tile) => (
          <div
            className={`lg:mx-[5%] flex justify-around ${tile.id === 2 ? 'flex-row-reverse pl-44' : 'flex-row pr-44'} items-center py-8`}
            key={tile.id}
          >
            <img src={tile.pic} alt={tile.pic} className="w-[40%]" />
            <div className="w-[60%] mx-14">
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
