import SlimNav from "../../layout/SlimNav";
import SettingsRoutes from "./components/SettingsRoutes";



const Settings = () => {
  return (
    <section>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <SettingsRoutes/>
      </div>
    </section>
  );
};

export default Settings;
