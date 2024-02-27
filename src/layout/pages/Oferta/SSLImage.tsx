import bg from '../../../assets/offerIcons/matthew-henry-fPxOowbR6ls-unsplash 1.png';

const SSLImage = () => {
  return (
    <div className='mt-10 lg:relative hidden'>
        <img src={bg} alt="ssl_bg" className='w-full ' />
        <div className='absolute top-[50%] right-[15%] z-10 text-white tracking-wider'>
            <h1 className='text-7xl font-playFair mb-10'>Z nami jesteś bezpieczny</h1>
            <p className='text-4xl font-poppins'>
            Certyfikat SSL to podstawa poufnej <br/> komunikacji między przeglądarką i serwerem. <br/> Jego posiadanie sprzyja wiarygodności,<br/> bezpieczeństwu i lepszym pozycjom <br/>w wyszukiwarce.
            </p>
        </div>
    </div>
  );
};

export default SSLImage;
