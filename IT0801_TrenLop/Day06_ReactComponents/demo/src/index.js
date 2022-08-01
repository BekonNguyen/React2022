import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import HelloFunctionComp from './components/HelloFunctionComp';
import FormInput from './components/Form';
import HelloCC from './components/HelloCC';




const container = document.getElementById('root');
const root = createRoot(container);
// root.render (<HelloFunctionComp className="App" />);
// root.render (<FormInput />);
root.render (<App />);