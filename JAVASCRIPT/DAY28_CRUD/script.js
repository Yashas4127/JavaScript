// const newE=document.createElement("h2")
// newE.innerText="Strike is comming"
// newE.id="second"

// const h1=document.getElementById("first")
// h1.after(newE)
// // h1.before(newE)

// const newE2=document.createElement("h3")
// newE2.innerText="Diwali Ho gaya"
// newE2.id="third";
// newE2.style.textAlign="center"
// // newE2.className="diwali";
// // newE2.className+="holi";

// newE2.classList.add("Diwali")
// newE2.classList.add("holi")
// newE2.style.backgroundColor="white"
// newE2.style.fontSize="30px"
// newE2.style.color="black"
// h1.before(newE2)

// newE2.setAttribute("hello","ji")

// const list= document.createElement("li")
// list.textContent="Milk"
// const list2= document.createElement("li")
// list2.textContent="Cake"
// const list3= document.createElement("li")
// list3.textContent="Halwa"
// const list4= document.createElement("li")
// list4.textContent="Panner"

// const ul=document.getElementById("listing")
// ul.append(list)
// ul.append(list2)
// ul.prepend(list3)

// list.after(list4)
const fragment=document.createDocumentFragment()

const arr=["Milk","Halwa","Panner","Tea"]
const ul1=document.getElementById("listing")
for(let num of arr){
    const list= document.createElement("li")
    list.textContent=num
    fragment.append(list) //Best method
}

ul1.append(fragment)

const s1=document.getElementById("first")
// s1.remove()