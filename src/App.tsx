import Navbar from "./layout/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./layout/pages/Home";
import Cennik from "./layout/pages/Cennik";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cennik" element={<Cennik/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
