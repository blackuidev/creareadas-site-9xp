import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Set Home as the default route */}
        <Route path='*' element={<NotFound />} /> {/* Catch-all for 404 pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;