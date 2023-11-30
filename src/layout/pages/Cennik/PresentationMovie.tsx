
const PresentationMovie = () => {
  return (
    <section className="items-center mx-[8%] font-poppins flex flex-col mb-40">
        <div className='w-full p-4 bg-[#DDFFED] rounded-lg font-black border-2 border-black mb-20'>
            <h1 className='text-4xl text-center '>
            Zobacz krótką prezentację możliwości TheBill
            </h1>
        </div>
        <iframe
        className="rounded-lg w-full"
        style={{ 
          height: "calc(6/16 * 100vw)", 
          minHeight: "315px", 
          maxHeight: "calc(10/16 * 50%)" 
        }}
        src="https://www.youtube.com/embed/VK8vBwPSVLg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  )
}

export default PresentationMovie