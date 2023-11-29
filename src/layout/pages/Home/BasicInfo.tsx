import budget from '../../../assets/basicInfoIcons/budget.png'
import information from '../../../assets/basicInfoIcons/information.png'
import taxes from '../../../assets/basicInfoIcons/taxes.png'
import talking from '../../../assets/basicInfoIcons/talking.png'

type Info = {
    id: number;
    pic: string;
    title: string;
    text: string;
}

const BasicInfo = () => {
    const infoTiles: Info[] = [
        {id: 1, pic: information, title: 'Automatycznie skanuj skrzynkę mailową', text: 'TheBill za Ciebie skanuje skrzynkę mailową w poszukiwaniu dokumentów kosztowych.'},
        {id: 2, pic: talking, title: 'Usprawnij komunikację z księgowością', text: 'TheBill sprawia, że wymiana dokumentów z księgowością jest łatwa i szybka - wszystko przez jednego maila.'},
        {id: 3, pic: budget, title: 'Kontroluj swoje wydatki', text: 'Aplikacja pozwala na systematyczne śledzenie miesięcznych wydatków, co pozwala na bardziej efektywne zarządzanie finansami'},
        {id: 4, pic: taxes, title: 'Optymalizuj swoje podatki', text: 'Z nami będziesz miał pod kontrolą wszystkie faktury kosztowe, co przełoży się na większe odliczenia kosztów - mniej niezaliczonych faktur.'},
    ]

  return (
    <section className="mt-32 items-center mx-[8%] font-poppins">
        <div className="bg-[#83f9ce] flex flex-col p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">
            Nie trać czasu na ręczne pobieranie faktur, Usprawnij swoję firmę już dzisiaj
            </h3>
            <p className='text-lg'>
            Z naszą aplikacją możliwe jest zautomatyzowanie komunikacji z działem księgowym.  Aplikacja poprzez skanowanie skrzynki mailowej w poszukiwaniu załączników PDF, oszczędza czas i eliminuje ryzyko pominięcia dokumentów. 
            </p>
        </div>
        <div className="mt-32 flex flex-row justify-center">
            {infoTiles.map((tile)=>(
                <div className="w-[270px] mx-12 flex justify-around flex-col items-center" key={tile.id}>
                    <img src={tile.pic} alt={tile.pic} className=' w-28 h-28 mx-auto mb-10'/>
                    <h1 className='text-2xl font-bold text-center w-10/12'>{tile.title}</h1>
                    <p className='mt-20 text-justify text-xl'>{tile.text}</p>
                </div>
            )) }
        </div>
    </section>
  )
}

export default BasicInfo