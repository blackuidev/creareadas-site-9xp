import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.tsx'; // Import ThemeProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> is often used for development checks, keep it if present
  // <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  // </React.StrictMode>
);
