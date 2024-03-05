import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var page = (<div>
<h1>Multiple line of html code in ReactJS</h1>
<p>Paragraph 1</p>  
<p>Paragraph 2</p>
<p>Paragraph 3</p>

<h2>Another heading</h2>
<p>Paragraph 4</p>
<p>Paragraph 5</p>
<p>Paragraph 6</p>
</div>
);
root.render(page);


