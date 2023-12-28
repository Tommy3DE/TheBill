import { Accordion, AccordionItem } from '@szhsin/react-accordion';

type accordionTile = {
    id: number;
    title: string;
    text: string;
}

const FAQ = () => {
    const accTiles: accordionTile[] = [
        {id: 1, title: 'Czym jest aplikacja OneBill?', text: 'OneBill to aplikacja do zarządzania fakturami, która automatyzuje proces zbierania, sortowania i przesyłania faktur kosztowych do biur księgowych, szczególnie dedykowana dla jednoosobowych działalności gospodarczych, mikro i małych przedsiębiorców.'},
        {id: 2, title: 'Jak zacząć korzystać z OneBill?', text: 'Aby rozpocząć korzystanie z OneBill, wystarczy pobrać aplikację, zarejestrować się, skonfigurować swoje konto i dodać adres mailowy swój oraz swojego biura ksiegowego.'},
        {id: 3, title: 'Czy OneBill jest bezpieczny?', text: 'Tak, OneBill stosuje zaawansowane protokoły bezpieczeństwa i szyfrowania, aby chronić Twoje dane i zapewnić ich poufność.'},
        {id: 4, title: 'Jakie plany cenowe oferuje OneBill?', text: 'OneBill oferuje różne plany cenowe, w tym darmowy plan testowy oraz płatne plany Standard, Premium i Fabulous, każdy z różnym zakresem funkcji.'},
        {id: 5, title: 'Czy mogę zmienić swój plan subskrypcji?', text: 'Tak, możesz zmienić swój plan subskrypcji w dowolnym momencie, wybierając plan, który najlepiej odpowiada Twoim aktualnym potrzebom.'},
        {id: 6, title: 'Jak OneBill pomaga w zarządzaniu fakturami?', text: 'OneBill automatycznie zbiera faktury z Twojej skrzynki e-mailowej, sortuje je, a następnie umożliwia łatwe przesyłanie do Twojego biura księgowego.'},
        {id: 7, title: 'Czy OneBill integruje się z innymi systemami księgowymi?', text: 'Nie, OneBill nie oferuje integracji z innymi platformami.'},
        {id: 8, title: 'Jak mogę uzyskać pomoc techniczną lub wsparcie?', text: 'Wsparcie techniczne jest dostępne poprzez e-mail, chat, a w przypadku planu Fabulous także telefonicznie. Dostępne są również zasoby pomocnicze na naszej stronie internetowej.'},
        {id: 9, title: 'Czy mogę eksportować dane z OneBill do innych formatów?', text: 'Tak, OneBill umożliwia eksport danych do różnych formatów, w tym Excela, co ułatwia analizę i raportowanie.'},
        {id: 10, title: 'Czy OneBill jest dostępny na urządzenia mobilne?', text: 'Tak, OneBill oferuje aplikację mobilną, która umożliwia zarządzanie fakturami i monitorowanie finansów z dowolnego miejsca.'}
    ]

  return (
    <Accordion className='' transition transitionTimeout={1000}>
        {accTiles.map((tile)=>(
            <AccordionItem header={tile.title} key={tile.id} id={`accordion-item-${tile.id}`} className='text-3xl border-2 text-start p-4 lg:w-1/2 mx-auto my-2 font-extrabold'>
            <p className='text-lg font-normal pt-4'>{tile.text}</p>
          </AccordionItem>
        ))}

  </Accordion>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ