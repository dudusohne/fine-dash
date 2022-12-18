import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeRepos } from "../pages/HomeRepos";
import { Repo } from "../pages/Repos";
import { Home } from "../pages/Home";
import { NotFound404 } from "../pages/NotFound404";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<HomeRepos />} />
        <Route path="/repo/*" element={<Repo />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}
