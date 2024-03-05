import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var output = <div>
    <h1>Expression in ReactJS</h1>
    <p>Sum of A and B is {A + B}</p>
    <p>Product of A and B is {A * B}</p>
    <p>Division of A and B is {A / B}</p>
    <p>Subtraction of A and B is {A - B}</p>
    <p>Modulus of A and B is {A % B}</p>
    <p>Exponential of A and B is {A ** B}</p>
    <p>Increment of A++ is {A++}</p>
    <p>Decrement of B-- is {B--}</p>
    <p>Increment of ++A is {++A}</p>
    <p>Decrement of --B is {--B}</p>
</div>;
root.render(output);


