import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import Home from './pages/Home.tsx';
import Index from './pages/Index.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;