import { ReactNode } from "react"

interface RecTile {
    id: number
    title: string
    text1: string
    text2: ReactNode
}

 

const ThreeRecInfo = () => {
    const infoTiles: RecTile[] = [
    {
        id: 1,
        title: 'ok. 30',
        text1: 'E-MAILI DZIENNIE',
        text2: (<>tyle wiadomości e-mail otrzymuje 
        przeciętny użytkownik <span className="uppercase font-black">każdego dnia.*</span>
        </>)
    },
    {
        id: 2,
        title: '1h',
        text1: 'PRZEZNACZONA NA E-MAIL',
        text2: (<>tyle czasu użytkownicy poświęcają<span className="uppercase font-black"> dziennie na wysyłanie i odbieranie</span> wiadomości e-mail.**</>)
    },
    {
        id: 3,
        title: '10 tys.',
        text1: 'KONTROLI SKARBOWYCH',
        text2: (<><span className="uppercase font-black">tyle kontroli Urzędy Skarbowe przeprowadziły w roku 2021,</span> dlatego tak ważne jest zorganizowanie dokumentów w swojej firmie.***</>)
    }
]
  return (
    <div>
    <div className="flex flex-row my-8 mx-[8%] font-poppins">
        {infoTiles.map(tile=>(
            <div key={tile.id} className="border-[#92E3A9] border-2 bg-[#E9F9F3] drop-shadow-2xl mx-10 w-1/3 py-10 px-3">
                <h1 className="text-center text-7xl">{tile.title}</h1>
                <h2 className="text-center font-black text-[#1A9367] my-5 text-2xl">{tile.text1}</h2>
                <h3 className="text-center mx-10">{tile.text2}</h3>
            </div>
        ))}
    </div>
    <p className="text-center text-sm text-gray-400">*źródło: Raport ABC Rynek i Opinia, wrzesień 2020</p>
    <p className="text-center text-sm text-gray-400">**źródło: marketsplash.pl - najważniejsze statystyki e-mail </p>
    <p className="text-center text-sm text-gray-400">***źródło: Gazeta Prawna, 13 lipiec 2023</p>
  </div>)
}

export default ThreeRecInfo