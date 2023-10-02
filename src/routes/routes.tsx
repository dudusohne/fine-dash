import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Repositories } from '../pages/Repositories';
import { Home } from '../pages/Home';
import { NotFound404 } from '../pages/NotFound404';
import { About } from '../pages/About/index';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}
