import { ReactNode } from 'react'
import s1 from '../../../assets/fiveSteps/s1.png'
import s2 from '../../../assets/fiveSteps/s2.png'
import s3 from '../../../assets/fiveSteps/s3.png'
import s4 from '../../../assets/fiveSteps/s4.png'
import s5 from '../../../assets/fiveSteps/s5.png'
import succ from '../../../assets/fiveSteps/succ.png'
import mac from '../../../assets/mac.png'
interface StepTile  {
    id: number,
    pic: string,
    title: ReactNode,
    text: string
}

const FiveSteps = () => {
const steps: StepTile[] = [
    {
        id: 1,
        pic: s1,
        title: <>W pierwszym kroku | <span className='text-[#34D399]'>Załóż konto</span></>,
        text: 'Zostaniesz poproszony o podstawowe informacje takie jak imię, nazwisko, e-mail, NIP oraz informację ile faktur miesięczne otrzymujesz.'
    },
    {
        id: 2,
        pic: s2,
        title: <>Drugi krok | <span className='text-[#34D399]'>Panel użytkownika</span></>,
        text: 'Po kliknięciu link aktywacyjny, zaloguj się do swojego panelu użytkownika. Po kliknięciu w link, przeglądarka otworzy okno ze stroną logowania do panelu OneBill.'
    },
    {
        id: 3,
        pic: s3,
        title: <>Trzeci krok | <span className='text-[#34D399]'>E-m@il księgowego</span></>,
        text: 'Po zalogowaniu do panelu użytkownika, dodaj adres e-mail swojego księgowego. Dzięki temu, aplikacja będzie wiedziała do kogo kierować paczki zeskanowanych faktur. '
    },
    {
        id: 4,
        pic: s4,
        title: <>Czwarty krok | <span className='text-[#34D399]'>Synchronizacja z Gmail</span></>,
        text: 'Po dodaniu adresu biura księgowego, aplikacja poprosi Cię o synchronizację konta Gmail z kontem OneBill. Poprosimy Cię o wyrażenie zgody na połączenie z Twoją skrzynką przez Google API. '
    },
    {
        id: 5,
        pic: s5,
        title: <>Piąty krok | <span className='text-[#34D399]'>Scan maila</span></>,
        text: 'Zacznij skanować swoją skrzynkę mailową w poszukiwaniu dokumentów kosztowych. Po każdym skanowaniu, aplikacja zapyta Cię co chcesz zrobić ze scanem - zachować, przesłać czy przesłać.'
    }
]
  return (
    <div className='mx-[8%]'>
        <h1 className=' font-playFair text-5xl mt-10 mb-5'>Jak działa <span className='text-[#34D399]'>OneBill</span>? </h1>
        <h3 className=' italic font-poppins text-2xl mb-10'>5 kroków do automatyzacji Twojej firmy!</h3>
        <div className='flex flex-col'>
            {steps.map((step)=>(
                <div className='flex lg:flex-row flex-col' key={step.id}>
                    <img src={step.pic} alt="stepIcon" />
                    <div className='ml-5 flex flex-col justify-center'>
                        <h1 className='text-4xl font-playFair mb-5'>{step.title}</h1>
                        <h3 className='text-2xl font-poppins'>{step.text}</h3>
                    </div>
                </div>
            ))}
        </div>
        <div className='font-playFair flex flex-col items-center'>
            <h1 className='text-6xl text-[#34D399]'>Gratulacje! </h1>
            <h3 className='text-2xl font-black mt-5'>Masz więcej czasu na prowadzenie swojego biznesu!</h3>
            <h3 className='text-2xl'>Od teraz <span className='font-black'>OneBill</span> zajmuje się Twoimi fakturami!</h3>
            <img src={succ} alt="success" />
        </div>
        <div className='mt-10'>
                <h1 className='font-playFair text-5xl text-center'>
                Twoje faktury w <span className='text-[#1A9367] underline'>jednym miejscu</span>

                </h1>
                <img src={mac} alt="macbook" className='mt-5 mx-auto w-1/2 h-1/2' />
        </div>
    </div>
  )
}

export default FiveSteps