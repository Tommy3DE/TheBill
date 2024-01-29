import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SlimNav = () => {
  return (
<section className="h-20 w-full flex flex-row justify-start  bg-[#5ffa9d] border-y-4 border-[#1A9367]">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="mt-7 lg:ml-10 h-40"/>
        </Link>
    </section>
  );
};

export default SlimNav;
