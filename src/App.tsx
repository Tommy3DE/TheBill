import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserDataContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Day1Dir from "./loggedUser/documents/components/Day1Dir";
import MthPage from "./loggedUser/documents/components/MthPage";
import ResetPassPage from "./layout/pages/ResetPassPage";
import { FormDataProvider } from "./context/FormDataProvider";
import HistoryScan from "./loggedUser/history/components/HistoryScan";
import HistoryDownload from "./loggedUser/history/components/HistoryDownload";
import HistoryCorrespondence from "./loggedUser/history/components/HistoryCorrespondence";
import ChangePlan from "./loggedUser/Settings/components/ChangePlan";
import ChangePayment from "./loggedUser/Settings/components/ChangePayment";
import CancelSub from "./loggedUser/Settings/components/CancelSub";
import ForgotPassPage from "./layout/pages/ForgotPassPage";

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
const ScanEmail = lazy(() => import("./loggedUser/ScanEmail/ScanEmail"));
const AutoScan = lazy(() => import("./loggedUser/AutoScan"));
const ScanPeriod = lazy(() => import("./loggedUser/ScanEmail/ScanPeriod"));
const Subscription = lazy(
  () => import("./loggedUser/Settings/components/Subscription")
);
const SettingsAcc = lazy(
  () => import("./loggedUser/Settings/components/SettingsAcc")
);
const PaymentPage = lazy(() => import("./newUser/PaymentPage"));
const BlogArticle1 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle1")
);
const BlogArticle2 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle2")
);
const BlogArticle3 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle3")
);
const BlogArticle4 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle4")
);
const BlogArticle5 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle5")
);
const BlogArticle6 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle6")
);
const BlogArticle7 = lazy(
  () => import("./layout/pages/Blog/BlogArticles/BlogArticle7")
);

const LoggedUserHome = lazy(() => import("./loggedUser/LoggedUserHome"));
const Settings = lazy(() => import("./loggedUser/Settings/Settings"));
const History = lazy(() => import("./loggedUser/history/History"));

function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <ToastContainer />
        <Router>
          <Suspense
            fallback={
              <img
                className="w-20 h-20 animate-spin mt-32 mx-auto"
                src="https://www.svgrepo.com/show/70469/loading.svg"
                alt="Loading icon"
              />
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resetPass" element={<ResetPassPage />} />
              <Route path="/cennik" element={<Cennik />} />
              <Route
                path="/newUser"
                element={
                  <FormDataProvider>
                    <NewUser />
                  </FormDataProvider>
                }
              />
              <Route
                path="/newUser/paymentPage"
                element={
                  <FormDataProvider>
                    <PaymentPage />
                  </FormDataProvider>
                }
              />
              <Route path="/funkcje" element={<Oferta />} />
              <Route path="/forgotPass" element={<ForgotPassPage />} />
              <Route path="/pomoc" element={<Pomoc />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/1" element={<BlogArticle1 />} />
              <Route path="/blog/2" element={<BlogArticle2 />} />
              <Route path="/blog/3" element={<BlogArticle3 />} />
              <Route path="/blog/4" element={<BlogArticle4 />} />
              <Route path="/blog/5" element={<BlogArticle5 />} />
              <Route path="/blog/6" element={<BlogArticle6 />} />
              <Route path="/blog/7" element={<BlogArticle7 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/o_nas" element={<ONas />} />
              <Route path="/regulamin" element={<Regulamin />} />
              <Route path="/polityka_prywatnosci" element={<PolitykaPryw />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/logged/automate"
                element={<ProtectedRoute element={<AutoScan />} />}
              />
              <Route
                path="/logged/subscription"
                element={<ProtectedRoute element={<Subscription />} />}
              />
              <Route
                path="/logged"
                element={<ProtectedRoute element={<LoggedUserHome />} />}
              />
              <Route
                path="/logged/settings"
                element={<ProtectedRoute element={<Settings />} />}
              />
              <Route
                path="/logged/history"
                element={<ProtectedRoute element={<History />} />}
              />
              <Route
                path="/logged/scanMail"
                element={<ProtectedRoute element={<ScanEmail />} />}
              />
              <Route
                path="/logged/scanMail/scanPeriod"
                element={<ProtectedRoute element={<ScanPeriod />} />}
              />
              <Route
                path="/logged/documents"
                element={<ProtectedRoute element={<Day1Dir />} />}
              />
              <Route
                path="/logged/documents/:date"
                element={<ProtectedRoute element={<MthPage />} />}
              />
              <Route
                path="/logged/history/scan"
                element={<ProtectedRoute element={<HistoryScan />} />}
              />
              <Route
                path="/logged/history/download"
                element={<ProtectedRoute element={<HistoryDownload />} />}
              />
              <Route
                path="/logged/history/correnspondence"
                element={<ProtectedRoute element={<HistoryCorrespondence />} />}
              />
              <Route
                path="/logged/settings/accountant"
                element={<ProtectedRoute element={<SettingsAcc />} />}
              />
              <Route path="/logged/subscription/cancel-sub" element={<ProtectedRoute element={<CancelSub />} />} />
              <Route path="/logged/subscription/change-payment-data" element={<ProtectedRoute element={<ChangePayment />} />} />
              <Route path="/logged/subscription/change-plan" element={<ProtectedRoute element={<ChangePlan />} />} />

            </Routes>
          </Suspense>
        </Router>
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
