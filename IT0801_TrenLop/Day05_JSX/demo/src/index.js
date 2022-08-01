import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import Hello from './Components/Hello';



// // C1:  Use React.creatElement
// const text = "This is my test with createElement";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// React.createElement("h1", { style: { textAlign: "center" } }, text)
// );

//C2: Use ReactDOM
const agent = navigator.userAgent ;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h4 style={{ textAlign: "center" }}>{agent}</h4>);

// //C3: React 18 + JSX 
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Hello />);
