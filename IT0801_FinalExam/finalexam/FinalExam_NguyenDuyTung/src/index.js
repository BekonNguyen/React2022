import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createRoot } from 'react-dom/client'; 
import MyNote from './components/ManageNote';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyNote />);

