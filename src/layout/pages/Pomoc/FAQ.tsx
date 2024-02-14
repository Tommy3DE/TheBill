import { ReactNode } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export type accordionTile = {
  id: number;
  title: string;
  text: ReactNode;
};

const FAQ = () => {
  const accTiles: accordionTile[] = [
    {
      id: 1,
      title: "Do czego służy aplikacja OneBill?",
      text: "Aplikacja OneBill została stworzona do pomocy przedsiębiorcom w organizacji dokumentów kosztowych i usprawnieniu procesów administracyjnych w firmie. Nasz produkt skanuje skrzynkę e-mail użytkownika w poszukiwaniu dokumentów kosztowych z wybranego miesiąca rozliczeniowego, agreguje je do jednego maila i umożliwia jednym kliknięciem wysyłkę gotowej dokumentacji do biura księgowego. Dodatkowo, w panelu użytkownika dokumenty są zapisywane, dzięki czemu nasi klienci nie muszą martwić się o organizację dokumentów w swojej firmie.",
    },
    {
      id: 2,
      title: "Jak założyć konto?",
      text: "Aby założyć konto, należy kliknąć w przycisk “Załóż konto” znajdujący się na wstążce na górze strony. Wymagamy podstawowych informacji, dostępnych w CEiDG takich jak Imię, nazwisko, NIP oraz branża w jakiej działasz. Dodatkowo, program spyta ile faktur miesięcznie procesujesz, dzięki czemu dobierze on odpowiedni dla Ciebie pakiet.",
    },
    {
      id: 3,
      title: "Nie mam konta G-mail, czy nadal mogę skorzystać z OneBill?",
      text: (
        <>
          Obecnie wspieramy{" "}
          <span className="underline font-extrabold">
            jedynie klienta poczty Google - G-mail’a.
          </span>{" "}
          Pracujemy nad możliwością integracji z innymi klientami poczty, o czym
          wkrótce będziemy informować na naszej stronie.
        </>
      ),
    },
    {
      id: 4,
      title:
        "Pierwszy raz korzystam z OneBill, jak rozpocząć skanowanie skrzynki?",
      text: (
        <>
          <h2 className="my-3 text-green-700 text-2xl font-playFair font-bold">
            Jeżeli nie posiadasz konta....
          </h2>
          <span>
            Jeśli pierwszy raz korzystasz z OneBill i nie posiadasz konta w
            naszym systemie, kliknij proszę załóż konto i podążaj zgodnie z
            krokami na formularzu. W momencie pierwszego logowania, aplikacja
            poprosi Cię o synchronizację skrzynki mailowej z kontem i wyrażenie
            zgód wymaganych przez Google, na połączenie z aplikacją. W kolejnym
            kroku, będziesz mógł wybrać który miesiąc chcesz przeskanować. Po
            skończonym skanowaniu, aplikacja wyświetli dokumenty, które udało
            się przechwycić
          </span>
          <h2 className="my-3 text-green-700 text-2xl font-playFair font-bold">
            Jeżeli posiadasz konto....
          </h2>
          <span>
            Po zalogowaniu się do aplikacji, kliknij w ikonkę “skanuj e-mail”.
            Aplikacja wyświetli zsynchronizowane adresy mailowe oraz status
            skrzynki. Po kliknięciu w przycisk “Skanuj” znajdujący się w sekcji
            Akcja, aplikacja przeniesie Cie do okna w którym będziesz mógł
            wybrać miesiąc który chcesz przeskanować. Po wybraniu miesiąca,
            aplikacja rozpocznie skanowanie skrzynki. Po skończonym skanowaniu,
            dokumenty zostaną wyświetlone w kolejnym oknie, w którym będziesz
            mógł zadecydować, co chcesz z nimi zrobić.
          </span>
        </>
      ),
    },
    {
      id: 5,
      title: "Jak dodać adres mojego biura księgowego?",
      text: "Aby móc wysyłać faktury do biura księgowego, należy w pierwszej kolejności dodać adres e-mail biura księgowego wybierając “Ustawienia” z ekranu głównego i przechodząc do “Zdefiniowane adresy e-mail. ",
    },
    {
      id: 6,
      title: "Jak przesyłać faktury do biura księgowego, które prowadzi moją firmę?",
      text: "Aby poprawnie korzystać z możliwości wysyłki faktur do biura księgowego, należy w pierwszej kolejności dodać adres biura księgowego. Kiedy program skończy skanowanie skrzynki, aplikacja zapyta Cię co chcesz zrobić z zeskanowanymi dokumentami. Jedną z opcji do wybory jest “wysłać paczkę dokumentów e-mailem do księgowego”. Klikając to opcję, otworzy się nowe okno z gotową wiadomością e-mail i załącznikami. ",
    },
    {
      id: 7,
      title: "Gdzie zapisują się przeskanowane faktury?",
      text: (<>Zeskanowane podczas sesji faktury, zapisywane są w folderze Dokumenty. Aplikacja segreguje faktury według daty sprzedaży i przyporzadkowuje je do odpowiednich podfolderów. {<br/>}<span className="font-bold">Przykład:</span> <span className=" italic">“Jeżeli użytkownik skanuje miesiąc styczeń 2024, to zeskanowane faktury będą zapisane w folderze “Dokumenty” w podfolderze “01.2024”. Wraz z nadejściem kolejnego miesiąca, aplikacja utworzy nowy podfolder o nazwie “02.2024”, gdzie będą przechowywane faktury z lutego.”</span></>),
    },
    {
      id: 8,
      title: "Czy jest mobilna aplikacja OneBill?",
      text: "Aktualnie trwają pracę nad aplikacją mobilną dla OneBill, dzięki której użytkownicy będą mogli jeszcze szybciej i jeszcze łatwiej zarządzać kosztami swojej firmy z dowolnego miejsca na ziemi. O szczegółach będziemy informować za pośrednictwem naszej strony internetowej.",
    },
    {
      id: 9,
      title: "Co jeśli przekroczę liczbę dokumentów określoną dla mojego pakietu?",
      text: (<>Jeżeli użytkownik przekroczy liczbę dokumentów możliwych do przeskanowania przez aplikację, określoną w pakiecie, wtedy aplikacja skończy skanowanie na maxymalnej liczbie dokumentów i poinformuje użytkownika, że zostało X dokumentów do wyświetlenia. Aby je wyświetlić, należy będzie zwiększyć plan. Zeskanowane dokumenty w ramach pakietu zostaną zachowane w folderze dokumenty. <br/>
      <span className="font-bold">Przykład:</span>{' '} <span className=" italic">“Posiadam pakiet Standard, który umożliwia mi przeskanowanie 15 dokumentów. W miesiącu lipcu 2023, mam 19 dokumentów. Aplikacja zakończy skan na 15 dokumencie i poinformuje użytkownika że są jeszcze 4 dokumenty do wyświetlenia. 15 dokumentów zostanie zapisanych w sekcji “Dokumenty”, aby kontynuować scan i wyświetlić pozostałe 4 użytkownik będzie musiał wyrazić zgodę na zwiększenie planu.” </span></>),
    },
  ];

  return (
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
  );
};

export default FAQ;
