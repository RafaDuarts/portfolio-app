import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioDetails from "../pages/PortfolioDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<PortfolioDetails />} />
      </Routes>
    </BrowserRouter>
  );
}