import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SlimNav = () => {
  return (
    <section className=" font-poppins  border-b-[14px] border-[#1A9367]">
      <div className="h-auto w-full items-center mt-[2%]">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="mx-auto mb-8"/>
        </Link>
      </div>
    </section>
  );
};

export default SlimNav;
