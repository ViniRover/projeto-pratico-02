import { Route, Routes } from "react-router-dom";
import { ClientLogin } from "./pages/client-login";
import { ClientRegister } from "./pages/client-register";
import { Company } from "./pages/company";
import { CompanyLogin } from "./pages/company-login";
import { CompanyRegister } from "./pages/company-register";
import { LandingPage } from "./pages/lading-page";
import { NewEditProduct } from "./pages/new-edit-product";
import { Products } from "./pages/products";
import { Profile } from "./pages/profile";
import { Services } from "./pages/services";
import { ShopCart } from "./pages/shop-cart";

import './styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/company-login" element={<CompanyLogin />}/>
      <Route path="/client-login" element={<ClientLogin />}/>
      <Route path="/company-register" element={<CompanyRegister />}/>
      <Route path="/client-register" element={<ClientRegister />}/>
      <Route path="/home/perfil" element={<Profile />}/>
      <Route path="/home/servicos" element={<Services />}/>
      <Route path="/home/contratar" element={<Company />}/>
      <Route path="/home/produtos" element={<Products />}/>
      <Route path="/home/carrinho" element={<ShopCart />}/>
      <Route path="/home/produtos/new" element={<NewEditProduct isEditing={false}/>}/>
      <Route path="/home/produtos/edit" element={<NewEditProduct isEditing={true}/>}/>
    </Routes>
  );
}

export default App;
