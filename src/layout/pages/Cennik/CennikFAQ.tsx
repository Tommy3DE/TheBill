import { accordionTile } from "../Pomoc/FAQ";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const CennikFAQ = () => {
  const accTiles: accordionTile[] = [
    {
      id: 1,
      title: "Jak mogę zmienić mój obecny plan na inny?",
      text: (
        <>
          Zmiana planu subskrypcji jest prosta. Możesz to zrobić na dwa sposoby:
          <p className="font-black">Sposób #1</p>
          Kiedy liczba faktur wykrytych w skanie przekroczy dozwoloną ilość
          dokumentów, program wyświetli notyfikację informującą użytkownika, że
          ponadplanowe faktury należy pobrać ręcznie oraz zaproponuje zmianę
          planu na wyższy. Wyrażając zgodę na zmianę planu, Twój abonament
          zostanie zaktualizowany.
          <p className="font-black">Sposób #2</p>
          Wchodząc w Ustawienia {">"} Ogólne ustawienia konta możesz zarządzać
          swoją aktualną subskrypcją – zmieniać plan na wyższy lub niższy, w
          zależności od indywidualnych potrzeb.
        </>
      ),
    },
    {
      id: 2,
      title: "Jakie są dostępne metody płatności?",
      text: (
        <>
          Płatności na naszej stronie obsługuje firma t-pay. W ofercie mamy płatności kartą płatniczą.
        </>
      ),
    },
    {
      id: 3,
      title: "Czy mogę anulować subskrypcję w dowolnym momencie?",
      text: (
        <>
          Tak, możesz anulować subskrypcję kiedy tylko zechcesz. Z uwagi na
          fakt, że płatności pobieramy z góry, Twoja subskrypcja wygaśnie z
          końcem miesiąca rozliczeniowego. <p className="font-black">Przykład:</p>
          Jeśli pobieramy płatność 10
          dnia każdego miesiąca a Ty 12 lutego 2024 zdecydujesz się na
          zakończenie współpracy, to Twój abonament będzie jeszcze ważny przez
          28 dni – do 10 marca 2024.
        </>
      ),
    },
    {
        id: 4,
        title: "Czy OneBill jest dostępny za darmo?",
        text: (
          <>
            Nie, jednak oferujemy naszym klientom 14 - dniowy darmowy okres próbny, podczas którego będą mieli pełen dostęp do wybranego przez siebie pakietu. Po tym okresie zacznie się płatna subskrypcja.
          </>
        ),
      },
      {
        id: 5,
        title: "Czy otrzymam fakturę za abonament OneBill?",
        text: (
          <>
            Tak, w zależności od tego jaki pakiet posiadasz, fakturę będziesz otrzymywać co miesiąc, lub raz w roku. Będzie ona wysyłana na adres e-mail podany przy rejestracji konta.
          </>
        ),
      },
      {
        id: 6,
        title: "Czy podane ceny są cenami netto czy brutto?",
        text: (
          <>
            Podane ceny są kwotami brutto, zawierają już podatek VAT.
          </>
        ),
      },
  ];

  return (
    <section className="mx-[8%] my-10">
      <h1 className="text-[#1A9367] font-playFair text-4xl text-center">
        Najczęściej zadawane pytania
      </h1>
      <p className="text-3xl font-playFair text-center mb-20 mt-10">
      Poniżej znajdziesz najczęściej zadawane pytania odnośnie
oferowanych przez nas abonamentów.
      </p>
      <Accordion allowZeroExpanded className="lg:mx-[6%]">
      {accTiles.map((tile) => (
        <AccordionItem key={tile.id}>
          <AccordionItemHeading>
            <AccordionItemButton>
              {tile.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{tile.text}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
    </section>
  );
};

export default CennikFAQ;
