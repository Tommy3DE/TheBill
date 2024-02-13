const Movie = () => {
    return (
      <section className="items-center font-playFair flex flex-col ">
        <h1 className="text-5xl text-center font-black mb-20 mt-40">
          Podnieś swoją efektywność
        </h1>
  
        <div className="w-full bg-[#51FFBF] bg-opacity-40 px-10">
          <h1 className="text-5xl text-center my-5">
            Przekonaj się sam, jak proste jest korzystanie z
            <p className="text-[#1A9367]">
                OneBill
            </p>
          </h1>
          <div className="w-full flex justify-center">
            <iframe
              className="w-full rounded-3xl my-10 p-2"
              style={{
                height: "calc(6/16 * 100vw)",
                minHeight: "15px",
                maxHeight: "60vh", 
              }}
              src="https://www.youtube.com/embed/VK8BwPSVLg" // Upewnij się, że link jest poprawny
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  

export default Movie;
