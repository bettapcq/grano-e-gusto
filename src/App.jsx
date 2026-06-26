import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import RestaurantSchema from "./components/RestaurantSchema";

function App() {
  return (
    <BrowserRouter>
      {/* serve per schema.org */}
      <RestaurantSchema />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
