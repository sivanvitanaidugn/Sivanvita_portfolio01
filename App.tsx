
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import OriginSparksPage from './pages/OriginSparksPage.tsx';
import CodeChroniclesPage from './pages/CodeChroniclesPage.tsx';
import BehindTheSyntaxPage from './pages/BehindTheSyntaxPage.tsx';
import GetInTouchPage from './pages/GetInTouchPage.tsx';
import AboutMePage from './pages/AboutMePage.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/origin-sparks" element={<OriginSparksPage />} />
        <Route path="/code-chronicles" element={<CodeChroniclesPage />} />
        <Route path="/behind-the-syntax" element={<BehindTheSyntaxPage />} />
        <Route path="/get-in-touch" element={<GetInTouchPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;