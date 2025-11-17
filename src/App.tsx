import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Header from './components/layout/Header.tsx';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header /> {/* Place the Header here */}
        <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Add other routes here */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;