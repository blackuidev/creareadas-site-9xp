import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import About from './pages/About.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto mt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;