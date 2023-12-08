import SlimNav from "../../layout/SlimNav";
import ClientsRoutes from "./components/ClientsRoutes";

const Clients = () => {
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <ClientsRoutes />
    </div>
  );
};

export default Clients;
