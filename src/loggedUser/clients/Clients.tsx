import SlimNav from "../../layout/SlimNav";
import ClientsRoutes from "./components/ClientsRoutes";

const Clients = () => {
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <ClientsRoutes />
      </div>
    </div>
  );
};

export default Clients;
