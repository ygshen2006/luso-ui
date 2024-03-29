import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './lib/bootstrap/bootstrap.min.css';
import './lib/modal-video/css/modal-video.min.css';
import './lib/leaflet/leaflet.css';
import './lib/owl.carousel2/assets/owl.carousel.min.css';
import './lib/owl.carousel2/assets/owl.theme.default.min.css';
import './lib/template/style.default.css';
import './lib/template/style.violet.css';
import 'font-awesome/css/font-awesome.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
reportWebVitals();
