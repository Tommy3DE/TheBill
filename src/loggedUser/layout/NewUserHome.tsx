import sync from "../../assets/iconsLogged/sync.png";

const NewUserHome = () => {
  return (
    <div className="h-full w-screen bg-yellow-100">
      <img src={sync} alt="sync" />
      <p>Witaj Zacznimy od połączenia Twojej skrzynki mailowej z kontem <span className="text-[#1A9367]">OneBill</span></p>
      <p>Dzięki temu będziesz mógł skanować swoją skrzynkę w poszukiwaniu faktur.</p>

      <button className="bg-[#1A9367] text-white py-3 px-1 font-playFair">+ DODAJ SKRZYNKĘ</button>
    </div>
  )
}

export default NewUserHome