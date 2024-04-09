import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./layout/pages/Home";
import Cennik from "./layout/pages/Cennik";
import NewUser from "./newUser/NewUser";
import Oferta from "./layout/pages/Oferta";
import Pomoc from "./layout/pages/Pomoc";
import LoggedUserHome from "./loggedUser/LoggedUserHome";
import Settings from "./loggedUser/Settings/Settings";
import History from "./loggedUser/history/History";
// import { Documents } from "./loggedUser/documents/Documents";
import Blog from './layout/pages/Blog'
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
import { ToastContainer } from "react-toastify";
import BlogArticle1 from "./layout/pages/Blog/BlogArticles/BlogArticle1";
import BlogArticle5 from "./layout/pages/Blog/BlogArticles/BlogArticle5";
import BlogArticle2 from "./layout/pages/Blog/BlogArticles/BlogArticle2";
import BlogArticle3 from "./layout/pages/Blog/BlogArticles/BlogArticle3";
import BlogArticle4 from "./layout/pages/Blog/BlogArticles/BlogArticle4";
import ONas from "./layout/pages/Stopka/ONas";
import PolitykaPryw from "./layout/pages/Stopka/PolitykaPryw";
import Regulamin from "./layout/pages/Stopka/Regulamin";
import PageNotFound from "./layout/pages/PageNotFound";
import { UserDataProvider } from "./context/UserDataContext";
import PaymentPage from "./newUser/PaymentPage";

function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/funkcje" element={<Oferta />} />
          <Route path="/pomoc" element={<Pomoc />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/1" element={<BlogArticle1 />} />
          <Route path="/blog/2" element={<BlogArticle2 />} />
          <Route path="/blog/3" element={<BlogArticle3 />} />
          <Route path="/blog/4" element={<BlogArticle4 />} />
          <Route path="/blog/5" element={<BlogArticle5 />} />
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
          <Route path="/newUser/paymentPage" element={<PaymentPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/o_nas" element={<ONas />}/>
          <Route path="/regulamin" element={<Regulamin />}/>
          <Route path="/polityka_prywatnosci" element={<PolitykaPryw />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
