const element = React.createElement("h1",{id:"first",className:"Yashas",style:{fontSize:"30px",backgroundColor:"black",color:"white"}},"Hello Coder Army");
const element1 = React.createElement("h2",{id:"second",className:"Yashas",style:{fontSize:"30px",backgroundColor:"black",color:"white"}},"Honey is money");

// ReactDOM.render(element,document.getElementById('root')); only in react 17 and below
// element : 50 card pade hue hai

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
// Reactroot.render(element);
// Reactroot.render(element1);

//CDN: Content delivery network

{/* <div> h1 h2 */}
const div1=React.createElement("div",{},[element,element1])
Reactroot.render(div1)



