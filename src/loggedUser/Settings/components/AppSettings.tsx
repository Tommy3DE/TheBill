import SlimNav from "../../../layout/SlimNav";

const AppSettings = () => {
  return (
    <section>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <div className="w-full flex justify-center items-center">
        <div className=" flex flex-col justify-center border-2 rounded lg:w-1/2 w-[98%] lg:mt-[10%] mt-[35%] text-2xl">
          <div className="flex flex-row justify-between py-2">
            <p>Imię i Nazwisko</p>
            <p>Jan Kowalski</p>
          </div>
          <div className="flex flex-row justify-between bg-slate-200 py-2">
            <p>Firma</p>
            <p>Polex</p>
          </div>
          <div className="flex flex-row justify-between py-2">
            <p>NIP</p>
            <p>148869420</p>
          </div>
          <div className="flex flex-row justify-between bg-slate-200 py-2">
            <p>Pakiet</p>
            <p>Premium</p>
          </div>
          <div className="flex flex-row justify-between py-2">
            <p>Mail</p>
            <p>jan@gmail.com</p>
          </div>
          <div className="flex flex-row justify-between bg-slate-200 py-2">
            <p>Księgowy</p>
            <p>jan@nowak.pl</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AppSettings;
