import sqr from "../../assets/icons/Vector.png";
import hands from "../../assets/lapy.png";
import sqrline from "../../assets/icons/Content.png";

const Information = () => {
  return (
    <section className="mt-20 items-center mx-[8%] font-poppins">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-[40%]">
          <p>Simplify</p>
          <h2 className="text-4xl mt-6 font-extrabold">
            Efficiently manage your invoices with ease
          </h2>
          <div className="flex flex-row mt-3">
            <button className="border-black p-5 border-2 ">Get Started</button>
            <div className="flex flex-row p-5">
              <button className="ml-5"> Learn more {"  "} </button>
              <img src={sqr} alt="sqr" className="h-4 ml-2 mt-1 w-3" />
            </div>
          </div>
          <img src={hands} alt="hands" className="mt-5" />
        </div>
        <div className="flex flex-col ml-5">
          <div className="flex flex-row">
            <img src={sqrline} alt="line"  className=" h-5/6" />
            <div className="w-full ml-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Streamline Invoicing</h2>
              <p className=" mt-8 text-lg">
                TheBill is a user-friendly invoice management tool designed to
                simplify your workflow.
              </p>
            </div>
          </div>
          <div className="flex flex-row my-4">
            <img src={sqrline} alt="line" className=" h-5/6" />
            <div className="w-full ml-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Automate Payments</h2>
              <p className=" mt-8 text-lg">
              With TheBill, you can automate payment reminders and easily track outstanding invoices.
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-4">
            <img src={sqrline} alt="line"  className=" h-5/6" />
            <div className="w-full ml-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Generate Reports</h2>
              <p className=" mt-8 text-lg">
              Effortlessly generate detailed reports to gain insights into your business finances.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img src={sqrline} alt="line"  className=" h-5/6" />
            <div className="w-full ml-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Secure Data</h2>
              <p className=" mt-8 text-lg">
              Rest assured that your sensitive financial data is protected with advanced security measures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
