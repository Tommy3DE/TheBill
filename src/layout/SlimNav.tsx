import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SlimNav = () => {
  return (
<section className="h-20 w-full flex flex-row justify-start bg-opacity-20 bg-[#92E3A9] ">
        <Link to="/logged" className="cursor-pointer mx-auto">
          <img src={logo} alt="logo" className="h-40 mt-2"/>
        </Link>
    </section>
  );
};

export default SlimNav;
