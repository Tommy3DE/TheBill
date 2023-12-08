import SlimNav from "../../layout/SlimNav";
import DocsRoutes from "./components/DocsRoutes";

export const Documents = () => {
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <DocsRoutes />
    </div>
  );
};
