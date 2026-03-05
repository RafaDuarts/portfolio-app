import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioDetails from "../pages/PortfolioDetails";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<PortfolioDetails />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}