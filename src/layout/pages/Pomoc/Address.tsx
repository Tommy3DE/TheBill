import logo from  '../../../assets/logo.png'

const Address = () => {
  return (
    <>
    {/* <div className='h-1 bg-green-600 my-8' /> */}
    <div className="w-full flex flex-row justify-center mt-8">
        <img src={logo} alt="logo" className='h-64' />
        <div className=' border-l-[3px] border-green-600 flex flex-col justify-center pl-10 ml-10'>
            <h2 className='text-4xl font-black text-green-700 mb-5'>OneBill</h2>
            <h3 className='text-xl font-bold text-gray-600'>Szybko, łatwo i skutecznie.</h3>
            <h3 className='text-xl text-gray-500 my-2'>Wydatki firmowe pod kontrolą!</h3>
            <h4 className='text-lg text-gray-400 font-extrathin'>Nie trać więcej czasu na papierkową robotę - usprawnij procesy w swojej firmie już dziś.</h4>
        </div>
    </div>
    </>
  );
};

export default Address;
