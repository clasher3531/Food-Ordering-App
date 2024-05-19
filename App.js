import React from "react";
import ReactDOM from "react-dom/client";
var div1 = React.createElement('div', {id: 'div1'}, 
                [React.createElement('div', {id: 'div1Child1'}, 
                [React.createElement('h1', {}, 'Iam an h1 tag'), React.createElement('h2', {}, 'I am an h2 tag')]),
                React.createElement('div', {id: 'div1Child2'}, 
                [React.createElement('h1', {}, 'Iam an h1 tag'), React.createElement('h2', {}, 'I am an h2 tag')])])

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div1); // job is to convert heading object into h1 tag and append into root