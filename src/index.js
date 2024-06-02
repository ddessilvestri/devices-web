import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DevicesApp } from './DevicesApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DevicesApp />
);
