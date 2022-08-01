import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';
import StudentInfo from './components/StudentInfoComponent';


// //Exercise_1
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

//Exercise_2
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<StudentInfo/>);



