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
    {
      id: 10,
      title: "Czy moje dane są bezpieczne w OneBill?",
      text: (<>Bezpieczeństwo Twoich danych jest dla nas priorytetem. OneBill wykorzystuje zaawansowane technologie szyfrowania i spełnia rygorystyczne standardy ochrony danych, aby zapewnić, że Twoje informacje są zawsze chronione. Dodatkowo, OneBill korzysta z certyfikatu SSL OV. <br/>
        <p className="font-bold">Co sprawia, że certyfikat OV wyróżnia się spośród innych?</p>
        Jego kluczową przewagą jest możliwość sprawdzenia właściciela certyfikatu bezpośrednio w przeglądarce internetowej. To oznacza, że Twoi klienci mają pewność, że odwiedzają bezpieczną stronę, co buduje zaufanie i zabezpiecza ich dane.
        Wybierając certyfikat OV, nie tylko chronisz swoją witrynę, ale także zyskujesz narzędzie, które podnosi poziom bezpieczeństwa i wiarygodności Twojej strony w oczach użytkowników. To inwestycja w zaufanie i spokój zarówno dla Ciebie, jak i Twoich klientów.</>),
    },
    {
      id: 11,
      title: "Czy OneBill integruje się z innymi systemami księgowymi?",
      text: (<>Aktualnie nie, choć prowadzimy pracę nad rozszerzeniem naszych funkcjonalności.</>),
    },
    {
      id: 12,
      title: "Jak mogę przesłać faktury w wersji papierowej?",
      text: (<>Faktury papierowe mogą być dodawane z poziomu aplikacji mobilnej. Każdy scan dokumentu za pośrednictwem aplikacji mobilnej, jest przesyłany do aplikacji OneBill i zapisywany w odpowiednim folderze. Aplikacja również zapyta, czy użytkownik chce przesłać dokumenty papierowe bezpośrednio do księgowego czy chce jedynie zapisać dokumenty w aplikacji.</>),
    },
    {
      id: 13,
      title: "Jakie formaty dokumentów obsługuje OneBill?",
      text: (<>Aktualnie OneBill obsługuje pliki JPG, JPEG i PDF. Są to główne formaty dokumentów, w jakich użytkownicy otrzymują wirtualne faktury.
        Dodatkowo, OneBill pozwala na konwersję plików do formatu ZIP, przez co „paczki faktur” mogą być bez ograniczeń przesyłane do biura księgowego.</>),
    },
    {
      id: 14,
      title: "Czy OneBill oferuje wersję demonstracyjną lub okres próbny?",
      text: (<>Wychodząc naprzeciw naszym użytkownikom, oferujemy 14 dniowy darmowy okres próbny. W trakcie trwania tego okresu, użytkownik ma pełny dostęp do wybranego przez siebie pakietu. Po tym okresie, zaczynamy naliczać opłatę za użytkowanie aplikacji.</>),
    },
    {
      id: 15,
      title: "Jak mogę anulować moją subskrypcję OneBill?",
      text: (<>Subskrypcję OneBill można anulować wchodząc w zakładkę Ustawienia {'>'} Ogólne ustawienia konta {'>'} Abonament. Klikając „Anuluj”, użytkownik będzie miał prawo korzystać z aplikacji do końca bieżącego okresu rozliczeniowego. Po tym okresie, dostęp do aplikacji zostanie zablokowany a faktury usunięte z naszego systemu.</>),
    },
    {
      id: 16,
      title: "Czy mogę eksportować dane z OneBill do innych formatów?",
      text: (<>Prowadzimy pracę nad możliwością ekstrakcji danych do formatu XML oraz XLS. W razie zgłaszanego zapotrzebowania, będziemy wprowadzać kolejne formaty plików.</>),
    },{
      id: 17,
      title: "Jak OneBill pomaga w przestrzeganiu przepisów podatkowych?",
      text: (<>OneBill jest zaprojektowany z myślą o przestrzeganiu lokalnych przepisów podatkowych i księgowych. Aplikacja pomaga w organizacji i archiwizacji dokumentów zgodnie z obowiązującymi wymogami, ułatwiając przestrzeganie terminów i zasad.
        Aby zapewnić, że nasze rozwiązania są zawsze zgodne z najnowszymi przepisami, uważnie śledzimy wszystkie komunikaty wydawane przez Ministerstwo Finansów oraz bieżące zmiany w przepisach podatkowych. Zachęcamy do odwiedzenia naszego bloga, gdzie regularnie publikujemy aktualne informacje i analizy z zakresu finansów i podatków, abyś zawsze był na bieżąco z ważnymi dla Twojej firmy zagadnieniami.</>),
    },
  ];

  return (
    <Accordion allowZeroExpanded className="lg:mx-[8%]">
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
