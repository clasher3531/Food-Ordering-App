// {/* <div id="div1">
//     <div id="div1Child1">
//         <h1></h1>
//         <h2></h2>
//     </div>
//     <div id="div1Child2">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div> */}


var div1 = React.createElement('div', {id: 'div1'}, 
                [React.createElement('div', {id: 'div1Child1'}, 
                [React.createElement('h1', {}, 'Iam an h1 tag'), React.createElement('h2', {}, 'I am an h2 tag')]),
                React.createElement('div', {id: 'div1Child2'}, 
                [React.createElement('h1', {}, 'Iam an h1 tag'), React.createElement('h2', {}, 'I am an h2 tag')])])

// var heading = React.createElement('h1', {
//     id:"heading", abc:'xyz'
// }, 'Hello World From React!');

console.log(div1); // javscript object
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div1); // job is to convert heading object into h1 tag and append into root