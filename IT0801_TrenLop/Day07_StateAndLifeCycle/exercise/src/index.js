import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import Calculator from './components/Calc';
import ListStudents from './App';
import FormAdd from './components/FormAdd';
import TodoCard from './App';
import CardManage from './components/CardManage';

// //Exercise_1
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App/>);


// //Exercise_2
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Calculator />);

// //Exercise_3
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

// // Exercise_5
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot (container);
// root.render (<ListStudents />);

//Exercise_4

const container = document.getElementById('root');
const root = ReactDOM.createRoot (container);
root.render(<CardManage />);