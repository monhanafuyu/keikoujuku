import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import { KeioFit } from './pages/KeioFit';
import { Shiteikou } from './pages/Shiteikou';
import { Sougougata } from './pages/Sougougata';
import { General } from './pages/General';
import { Coaching } from './pages/Coaching';
import { ColumnList } from './pages/ColumnList';
import { ColumnDetail } from './pages/ColumnDetail';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keio-fit" element={<KeioFit />} />
          <Route path="/keio-fit/" element={<KeioFit />} />
          <Route path="/shiteikou" element={<Shiteikou />} />
          <Route path="/shiteikou/" element={<Shiteikou />} />
          <Route path="/sougougata" element={<Sougougata />} />
          <Route path="/sougougata/" element={<Sougougata />} />
          <Route path="/general" element={<General />} />
          <Route path="/general/" element={<General />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/coaching/" element={<Coaching />} />
          <Route path="/column" element={<ColumnList />} />
          <Route path="/column/" element={<ColumnList />} />
          <Route path="/column/:id" element={<ColumnDetail />} />
          <Route path="/column/:id/" element={<ColumnDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
