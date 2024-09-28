// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';  
import reportWebVitals from './reportWebVitals';

// Get the root container
const rootContainer = document.getElementById('root');
const existingRoot = rootContainer._reactRootContainer;

if (existingRoot) {
  // If an existing root exists, call render() on it to update
  existingRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // If no existing root, create a new root and render App
  createRoot(rootContainer).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();

