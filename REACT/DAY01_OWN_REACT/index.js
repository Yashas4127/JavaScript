//Create element through JS

// const header1=document.createElement("h1")
// header1.innerText="Hello coder army"
// header1.style.backgroundColor="blue"
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2=document.createElement("h2")
// header2.innerText="Kaise he sab log"
// header2.style.backgroundColor="black"
// header2.style.fontSize="30px";
// header2.style.color="white";

// const root=document.getElementById("root")
// root.append(header1)
// root.append(header2)

//React:Object
//ReactDom:Object

const root=document.getElementById("root")
const React={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);
        if(typeof children==='object'){
            for(let num of children){
                element.append(num)
            }
        }
        else
        element.innerText=children;
        for (let key in styles) {
            element.style[key]=styles[key]
            
        }
        return element;
    }
}

const ReactDom={
    render:function(element,root){
        root.append(element)
    }
}

const header1=React.createElement("h1",{fontSize:"30px",backgroundColor:"blue",color:"White"},"Hello coder army");
const header2=React.createElement("h2",{fontSize:"30px",backgroundColor:"black",color:"White"},"Kaise he sab log");

ReactDom.render(header1,root)
ReactDom.render(header2,root)

//Unordered List
//Html
//Css
//Javascript
const l1=React.createElement("li",{},"Html")
const l2=React.createElement("li",{},"Css")
const l3=React.createElement("li",{},"Javascript")
const ul=React.createElement("ul",{fontSize:"30px",backgroundColor:"blue",color:"White"},[l1,l2,l3])
ReactDom.render(ul,root)





