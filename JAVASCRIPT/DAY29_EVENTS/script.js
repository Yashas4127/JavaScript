// function handle(){
//     const id =document.getElementById("first")
//     id.textContent="Strike is comming"
// }


// const id =document.getElementById("first")
// id.onclick=function handle(){
//     id.textContent="Hi guys"
// }

// const id =document.getElementById("first")
// id.addEventListener("click",()=>{
//      id.style.backgroundColor="brown"
// })

// id.addEventListener("mouseleave",()=>{
//      id.textContent="Strike is comming"
// })

// const c1=document.getElementById("child1")
// c1.addEventListener("click",()=>{
//     c1.textContent="Iam Clicked"
// })

// const p=document.getElementById("parent")
// // console.log(p.children);
// p.addEventListener("click",(e)=>{
//     console.log(e.target); 
//     e.target.textContent="I am clicked"
// })

// for(let num of p.children){
//     num.addEventListener("click",()=>{
//     num.textContent="Iam Clicked"
// })}

// const b= document.getElementById("body")
// b.addEventListener("click",()=>{
//     console.log("B is clicked");
    
// })

// const gp= document.getElementById("grandparent")
// gp.addEventListener("click",(e)=>{
//     console.log(e.target);
//     // console.log("Gp is clicked");
// },true)
// const p= document.getElementById("parent")
// p.addEventListener("click",()=>{
//     console.log("P is clicked");
// })
// const c= document.getElementById("child")
// c.addEventListener("click",()=>{
//     console.log("C is clicked");
// },true)

// Cpature phase on hai: Top se down aaoge 
// Cpature phase of hai: Down to up (Bubbling)

const p=document.getElementById("parent")
function handleclick(e){
    console.log(e.target); 
    e.target.textContent="I am clicked"
    p.removeEventListener("click",handleclick)
}
p.addEventListener("click",handleclick)






