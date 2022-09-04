import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeRepos } from "../pages/home-repos/home-repos";
import { Repo } from "../pages/repo";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRepos />} />
        <Route path="/repos/*" element={<Repo />} />
      </Routes>
    </Router>
  );
}
