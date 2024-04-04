import ReturnBtn from "../../components/ReturnBtn";
import SlimNav from "../../layout/SlimNav";
import SettingsRoutes from "./components/SettingsRoutes";

const Settings = () => {
  return (
    <section className="mx-auto">
      <SlimNav />
      <div className="max-w-[1980px]">
        <SettingsRoutes />
        <div className="flex justify-center">
                  <ReturnBtn route="/logged" />
        </div>
      </div>
    </section>
  );
};

export default Settings;
