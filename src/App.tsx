import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./layout/pages/Home";
import Cennik from "./layout/pages/Cennik";
import NewUser from "./newUser/NewUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cennik" element={<Cennik/>}/>
          <Route path='/newUser' element={<NewUser/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
