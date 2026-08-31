import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Redirect www to non-www
if (window.location.hostname === 'www.keio-route.com') {
  window.location.replace('https://keio-route.com' + window.location.pathname + window.location.search);
}
