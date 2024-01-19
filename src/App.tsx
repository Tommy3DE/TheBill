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
import MthPage from "./loggedUser/documents/components/MthPage";
import ScanEmail from "./loggedUser/ScanEmail/ScanEmail";
import SyncMail from "./loggedUser/syncMail/SyncMail";
import ScanPeriod from "./loggedUser/ScanEmail/ScanPeriod";
import AppSettings from "./loggedUser/Settings/components/AppSettings";
import DefinedAddresses from "./loggedUser/Settings/components/DefinedAddresses";
import Login from "./layout/pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/funkcje" element={<Oferta />} />
          <Route path="/pomoc" element={<Pomoc />} />
          <Route path="/logged" element={<ProtectedRoute element={<LoggedUserHome />}/>} />
          <Route path="/logged/settings" element={<ProtectedRoute element={<Settings />}/>} />
          <Route path="/logged/history" element={<ProtectedRoute element={<History />}/>} />
          <Route path="/logged/documents" element={<ProtectedRoute element={<Day1Dir />}/>} />
          <Route path="/logged/clients" element={<ProtectedRoute element={<Clients />}  />} />
          <Route path="/logged/scanDoc" element={<ProtectedRoute element={<Scan />}  />} />
          <Route path="/logged/documents/:date" element={<ProtectedRoute element={<MthPage />} />} />
          <Route path="/logged/scanMail" element={<ProtectedRoute element={<ScanEmail />} />} />
          <Route path="/logged/syncMail" element={<ProtectedRoute element={<SyncMail />} />} />
          <Route path="/logged/scanMail/scanPeriod" element={<ProtectedRoute element={<ScanPeriod />} />} />
          <Route path="/logged/settings/definedAddress" element={<ProtectedRoute element={<DefinedAddresses />} />} />
          <Route path="/logged/settings/appSettings" element={<ProtectedRoute element={<AppSettings />}/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
