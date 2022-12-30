import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Repositories } from "../pages/Repositories";
import { Home } from "../pages/Home";
import { NotFound404 } from "../pages/NotFound404";
import { Intro } from "../pages/Intro";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}
