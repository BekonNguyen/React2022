import React from 'react';
import ReactDOM from 'react-dom/client';
import CountClick from './components/CountClick';
import './index.css';
import {createRoot} from 'react-dom/client';
import App from './App';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render (<CountClick/>);

//Demo_1 + 2 +3
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
