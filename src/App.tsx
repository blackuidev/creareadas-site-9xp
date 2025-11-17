import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx'; // Import Shop page
import About from './pages/About.tsx'; // Import About page
import Header from './components/layout/Header.tsx'; // Import Header

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> {/* Flex container for full height */}
        <Header /> {/* Render Header here */}
        <main className="flex-grow"> {/* Main content area takes remaining space */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} /> {/* New route */}
            <Route path='/about' element={<About />} /> {/* New route */}
            {/* You can add a NotFound page route here as well */}
          </Routes>
        </main>
        {/* You can add a Footer component here if needed */}
      </div>
    </BrowserRouter>
  );
}

export default App;
