import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConstructionGate } from './components/ConstructionGate';
import './index.css';

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConstructionGate>
      <App />
    </ConstructionGate>
  </React.StrictMode>
);
