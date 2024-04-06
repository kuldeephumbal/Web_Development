import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let item = {name: 'kuldeep ', sername: 'humbal'};
function Greeting(item){
    return <h1>Hello {item.name}{item.sername}</h1>
}
root.render(Greeting(item));

