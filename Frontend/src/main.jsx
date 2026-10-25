import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Oya CSS file eka thiyana thana anuwa meka wenas karanna
// 'src/index.css' nam './index.css' kiyala danna
import './styles/global.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);