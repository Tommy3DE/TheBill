import SlimNav from "../../layout/SlimNav";
import ReturnBtn from "../../components/ReturnBtn";

const SyncMail = () => {
  return (
    <section className="">
      <SlimNav />
    <div className=" flex justify-center mt-[20%]">
            <ReturnBtn  route="/logged"/>
    </div>
    </section>
  );
};

export default SyncMail;
