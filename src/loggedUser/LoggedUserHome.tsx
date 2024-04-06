import SlimNav from "../layout/SlimNav"
import LoggedHome from "./layout/LoggedHome"
// import NewUserHome from "./layout/newUserHome"
// import { useAuth } from "../context/AuthContext"

const LoggedUserHome = () => {
  // const { isNewUser } = useAuth()
    return (
    <div className="h-auto lg:h-screen w-full">
        <SlimNav/>
        
        {/* {isNewUser ? <NewUserHome/> : <LoggedHome/>} */}
        {/* <NewUserHome/> */}
        <LoggedHome/>
    </div>
  );
}

export default LoggedUserHome