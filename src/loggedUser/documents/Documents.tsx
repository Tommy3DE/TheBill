import SlimNav from "../../layout/SlimNav";
import DocsRoutes from "./components/DocsRoutes";

export const Documents = () => {
  return (
    <div className="h-auto lg:h-screen w-full">
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
      <DocsRoutes />
      </div>
    </div>
  );
};
