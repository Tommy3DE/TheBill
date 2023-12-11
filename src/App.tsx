import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./layout/pages/Home";
import Cennik from "./layout/pages/Cennik";
import NewUser from "./newUser/NewUser";
import Oferta from "./layout/pages/Oferta";
import Pomoc from "./layout/pages/Pomoc";
import Navbar from "./layout/Navbar";
import LoggedUserHome from "./loggedUser/LoggedUserHome";
import Settings from "./loggedUser/Settings/Settings";
import History from "./loggedUser/history/History";
// import { Documents } from "./loggedUser/documents/Documents";
import Clients from "./loggedUser/clients/Clients";
import Scan from "./loggedUser/scan/Scan";
import Day1Dir from "./loggedUser/documents/components/Day1Dir";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/funkcje" element={<Oferta />} />
          <Route path="/pomoc" element={<Pomoc />} />
          <Route path="/logowanie" element={<Navbar />} />
          <Route path="/logged"  element={<LoggedUserHome/>} />
          <Route path="/logged/settings" element={<Settings/>} />
          <Route path='/logged/history' element={<History/>} />
          <Route path="/logged/documents" element={<Day1Dir/>} />
          <Route path="/logged/clients" element={<Clients/>} />
          <Route path="/logged/scanDoc" element={<Scan/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
