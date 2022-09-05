import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeRepos } from "../pages/HomeRepos/HomeRepos";
import { Repo } from "../pages/Repos/Repos";

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
