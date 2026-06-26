import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import RestaurantSchema from "./components/RestaurantSchema";
import PrivacyPage from "./pages/PrivacyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <CookieBanner />
      {/* serve per schema.org */}
      <RestaurantSchema />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
