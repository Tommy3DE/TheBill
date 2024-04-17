import { Suspense, lazy } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserDataContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Day1Dir from "./loggedUser/documents/components/Day1Dir";
import MthPage from "./loggedUser/documents/components/MthPage";

const Home = lazy(() => import("./layout/pages/Home"));
const Cennik = lazy(() => import("./layout/pages/Cennik"));
const NewUser = lazy(() => import("./newUser/NewUser"));
const Oferta = lazy(() => import("./layout/pages/Oferta"));
const Pomoc = lazy(() => import("./layout/pages/Pomoc"));
const Blog = lazy(() => import("./layout/pages/Blog"));
const Login = lazy(() => import("./layout/pages/Login"));
const ONas = lazy(() => import("./layout/pages/Stopka/ONas"));
const PolitykaPryw = lazy(() => import("./layout/pages/Stopka/PolitykaPryw"));
const Regulamin = lazy(() => import("./layout/pages/Stopka/Regulamin"));
const PageNotFound = lazy(() => import("./layout/pages/PageNotFound"));
const BlogArticle = lazy(() => import("./layout/pages/Blog"));
const ScanEmail = lazy(() => import("./loggedUser/ScanEmail/ScanEmail"));
// const SyncMail = lazy(() => import("./loggedUser/syncMail/SyncMail"));
const ScanPeriod = lazy(() => import("./loggedUser/ScanEmail/ScanPeriod"));


const LoggedUserHome = lazy(() => import("./loggedUser/LoggedUserHome"));
const Settings = lazy(() => import("./loggedUser/Settings/Settings"));
const History = lazy(() => import("./loggedUser/history/History"));

function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <ToastContainer />
        <Router>
          <Suspense fallback={<img
              className="w-20 h-20 animate-spin mt-32 mx-auto"
              src="https://www.svgrepo.com/show/70469/loading.svg"
              alt="Loading icon"
            />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cennik" element={<Cennik />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/funkcje" element={<Oferta />} />
              <Route path="/pomoc" element={<Pomoc />} />
              <Route path="/blog" element={<Blog />}>
                <Route path=":articleId" element={<BlogArticle />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/o_nas" element={<ONas />} />
              <Route path="/regulamin" element={<Regulamin />} />
              <Route path="/polityka_prywatnosci" element={<PolitykaPryw />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/logged" element={<ProtectedRoute element={<LoggedUserHome />} />} />
              <Route path="/logged/settings" element={<ProtectedRoute element={<Settings />} />} />
              <Route path="/logged/history" element={<ProtectedRoute element={<History />} />} />
              <Route path="/logged/scanMail" element={<ProtectedRoute element={<ScanEmail />} />} />
              <Route path="/logged/scanMail/scanPeriod" element={<ProtectedRoute element={<ScanPeriod />} />} />
              <Route path="/logged/documents" element={<ProtectedRoute element={<Day1Dir />}/>} />
              <Route path="/logged/documents/:date" element={<ProtectedRoute element={<MthPage />} />} />
            </Routes>
          </Suspense>
        </Router>
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
