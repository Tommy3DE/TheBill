import SlimNav from "../layout/SlimNav"
import LoggedHome from "./layout/LoggedHome"


const LoggedUserHome = () => {
  // const { isNewUser } = useAuth()
    return (
    <div className="h-auto lg:h-screen w-full">
        <SlimNav/>
        <LoggedHome/>
    </div>
  );
}

export default LoggedUserHome