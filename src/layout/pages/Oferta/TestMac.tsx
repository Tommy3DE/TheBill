import mac from '../../../assets/mac.png'
import iphone from '../../../assets/iphone.png'

const TestMac = () => {
  return (
    <section className="lg:mt-8 items-center mx-[8%] font-poppins flex flex-col">
      <h1 className="text-6xl tracking-wider lg:text-start text-center font-playFair font-bold mt-24">Wszystkie dokumenty kosztowe w jednym miejscu.</h1>
        <h2 className="text-3xl font-playFair lg:text-start text-center tracking-wider mt-8">Ty zajmujesz się biznesem. My zajmujemy się Twoimi kosztami.</h2>
        <button className="bg-[#83F9CE] lg:w-1/2 my-14 text-center rounded-lg p-4 text-black text-3xl font-bold font-playFair hover:scale-105 hover:text-white">
        Przetestuj za darmo przez 7 dni
        </button>
        <div className="lg:flex lg:visible hidden flex-row ">
            <img src={mac} alt="mac" className='mr-10' />
            <img src={iphone} alt="iphone" />
        </div>
    </section>
  );
};

export default TestMac;
