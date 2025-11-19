import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
// Removed other page imports not relevant to YouTube clone

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<VideoDetail />} />
          <Route path="/results" element={<SearchPage />} />
          {/* Add placeholders for other navigation items from sidebar if desired */}
          <Route path="/explore" element={<div className="p-4"><h2>Explore Page (Coming Soon)</h2></div>} />
          <Route path="/library" element={<div className="p-4"><h2>Library Page (Coming Soon)</h2></div>} />
          <Route path="/history" element={<div className="p-4"><h2>History Page (Coming Soon)</h2></div>} />
          <Route path="/channel/:id" element={<div className="p-4"><h2>Channel Page (Coming Soon)</h2></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
