import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { NavigationPage } from "./pages/navigationPage";
import { LandingPage } from "./pages/landingPage";
import { MenuPage } from "./pages/menuPage";
import { AnimatePresence } from "framer-motion";
import { Contact } from "./components/contact/contact-form";
import { CartPage } from "./pages/cartPage";
import { FavouritesPage } from "./pages/favouritesPage";
import LoginPage from "./pages/loginPage";
import Register from "./pages/registerPage";
function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<NavigationPage />}>
        <Route index element={<LandingPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
