import { Route, Routes } from "react-router-dom";
import { CompanyLogin } from "./pages/company-login";
import { LandingPage } from "./pages/lading-page";

import './styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/company-login" element={<CompanyLogin />}/>
    </Routes>
  );
}

export default App;
