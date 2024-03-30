import SlimNav from "../layout/SlimNav"
import LoggedHome from "./layout/LoggedHome"
import { useState } from "react"
import NewUserHome from "./layout/newUserHome"

const LoggedUserHome = () => {
  const [newUser, setNewUser] = useState<boolean>(true)
  return (
    <div className="h-auto lg:h-screen w-full">
        <SlimNav/>
        
        {newUser ? <NewUserHome/> : <LoggedHome/>}
        <button className="z-10" onClick={()=>setNewUser(prev => !prev)}>
      chuj
        </button>
    </div>
  )
}

export default LoggedUserHome