import oferta from '../../../assets/oferta.png'

const TestMac = () => {
  return (
    <section className="lg:mt-8 items-center font-poppins flex flex-col">
      <h1 className="text-6xl tracking-wider font-black  text-center font-playFair mt-24">Twoje faktury <span className='text-[#1A9367]'>w jednym miejscu.</span> </h1>
        <h2 className="text-3xl font-playFair lg:text-start text-center tracking-wider mt-8">Ty zajmujesz się <span className='font-black'>biznesem.</span> My zajmujemy się<span className='font-black'> Twoimi kosztami.</span></h2>
        <div className="lg:flex lg:visible hidden flex-row mt-10">
            <img src={oferta} alt="oferta" className='w-screen' />
        </div>
    </section>
  );
};

export default TestMac;
