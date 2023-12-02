import React from 'react';
import { IoIosWarning } from "react-icons/io";
import cook from "../../../assets/casesImages/cook.png";
import programmer from "../../../assets/casesImages/programmer.png";
import hair from "../../../assets/casesImages/hair.png";
import lightbulb from "../../../assets/icons/lightbulb.png";

interface CaseItem {
  img: string;
  name: string;
  role: string;
  problems: string[];
  solutions: string[];
}

interface CaseCardProps {
  title: string;
  items: string[];
  type: 'problem' | 'solution';
}

const CaseCard: React.FC<CaseCardProps> = ({ title, items, type }) => (
  <div className={`bg-${type === 'problem' ? 'white' : 'green-100'} my-4 flex flex-col items-center lg:w-1/4 border-2 ${type === 'problem' ? 'border-black' : 'border-green-600'} rounded-lg p-4`}>
    <h1 className="text-4xl font-extrabold h-[30%]">{title}</h1>
    <div className="flex flex-col justify-around h-full">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-center w-full">
          {type === 'problem' ? (
            <IoIosWarning className="text-6xl text-yellow-500 w-1/6 my-auto" />
          ) : (
            <img src={lightbulb} alt="lightbulb" className="w-1/6" />
          )}
          <h3 className="text-2xl ml-4 w-5/6 m-5">{item}</h3>
        </div>
      ))}
    </div>
  </div>
);

const cases: CaseItem[] = [
  {
    img: cook,
    name: "Bogusław",
    role: "Właściciel restauracji",
    problems: [
      "Otrzymujemy wiele faktur od różnych dostawców.",
      "Trudności w monitorowaniu i analizowaniu kosztów zakupów do lokalu."
    ],
    solutions: [
      "Dzięki TheBill zautomatyzowaliśmy proces zbierania i sortowania faktur.",
      "Aplikacja TheBill pomaga właścicielom lepiej kontrolować firmowe wydatki."
    ]
  },
  {
    img: hair,
    name: "Grażyna",
    role: "Właścicielka salonu kosmetycznego",
    problems: [
      "Przez liczbe faktur, cieżko jest je na bieżąco zbierać.",
      "Czasochłonne procesy księgowe, które odciągają uwagę od głównej działalności salonu."
    ],
    solutions: [
      "TheBill oferuje funkcje analizy wydatków, co pozwala na lepszą kontrolę kosztów.",
      "TheBill minimalizuje czas poświęcony na księgowość dzięki automatyzacji."
    ]
  },
  {
    img: programmer,
    name: "Mirosław",
    role: "Programista",
    problems: [
      "Firmy IT często korzystają z wielu licencji i subskrypcji, co utrudnia ich śledzenie i zarządzanie.",
      "Zarządzanie fakturami od podwykonawców i freelancerów może być skomplikowane i czasochłonne."
    ],
    solutions: [
      "TheBill automatyzuje proces zarządzania licencjami i subskrypcjami.",
      "TheBill ułatwia proces zarządzania i weryfikacji faktur od podwykonawców, upraszczając procesy księgowe."
    ]
  },
];

const Cases: React.FC = () => {
  return (
    <section className="mt-8 font-poppins flex flex-col">
      <h1 className="text-4xl tracking-wider my-12 font-extrabold font-poppins text-center">
        Jakie problemy rozwiązuje TheBill?
      </h1>
      {cases.map((caseItem, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} ${index === 1 && 'my-10'} w-full`}>
          <div className="lg:w-[80%] lg:h-[600px] border-2 black bg-[#D9FFFF] rounded-xl border-black flex lg:flex-row flex-col justify-around ">
            <div className="flex flex-col justify-around">
              <img src={caseItem.img} alt={caseItem.name} className="h-auto w-auto" />
              <div>
                <h1 className="text-4xl font-extrabold ">{caseItem.name}</h1>
                <h2 className="text-xl">{caseItem.role}</h2>
              </div>
            </div>
            <CaseCard title="Problemy" items={caseItem.problems} type="problem" />
            <CaseCard title="Rozwiązania" items={caseItem.solutions} type="solution" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cases;
