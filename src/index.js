import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';  // Your custom bootstrap theme
import App from './App';

// Optional: smooth scroll for better UX
document.documentElement.style.scrollBehavior = 'smooth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* You can add context providers or theme wrappers here in future */}
    <App />
  </React.StrictMode>
);

