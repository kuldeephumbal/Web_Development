import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output = React.createElement("h1", {align: "center"}, "Hello World! , html element created without using JSX in ReactJS.");
root.render(output);


