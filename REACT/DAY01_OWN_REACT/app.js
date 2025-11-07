const element = React.createElement("h1",{},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root')); only in react 17 and below
// element : 50 card pade hue hai

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
Reactroot.render(element);

//CDN: Content delivery network