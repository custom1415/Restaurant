import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { NavigationPage } from "./pages/navigationPage";
import { LandingPage } from "./pages/landingPage";
import { MenuPage } from "./pages/menuPage";
import { AnimatePresence } from "framer-motion";
import { Contact } from "./components/contact/contact-form";
function App() {
  const location = useLocation();
  
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<NavigationPage />}>
        <Route index element={<LandingPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
