import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClickCount from './components/ClickCount';
import ClickChangeName from './components/ClickCount';
import Counter from './components/Counter';


// //Demo_1
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App/>);


// Demo_2
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);