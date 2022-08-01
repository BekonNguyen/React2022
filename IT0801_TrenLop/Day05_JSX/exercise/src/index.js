import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';


import TableStudents from './components/Exercise_2';
import ProfileCard from './components/Exercise_3';
import SignInForm from './components/Exercise_4';


//Exercise_1
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h4 style={{ textAlign: "center" }}>{navigator.userAgent}</h4>);


// //Exercise_2
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<TableStudents />);

//Exercise_3
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<ProfileCard />);

// //Exercise_4
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<SignInForm />);