// variable ko kaise banate hai

let name = "Rohit";
let age = 20;

if(true)
    {
    let c = 90;
}

age = 30;
// console.log(c);  it gives error
console.log(name , age);

const account = 1234;
// account = 23;

console.log(account);




// old tarika
var a = 10;
var a = 20;

if(true){
   var a = 20;
}

function fun(){
    var c = 20;
}

var b = 30;
// console.log(c); it gives erorr


// data types

// primitive data type

// number,string,boolean,undefined, null, bigint, symbol


// number

let a1 = 10;
let b1 = 2.36;
console.log(a1,b1);
console.log(typeof b1);


// string
let c = "Strike is coming";
let d = "Anjali";
console.log(c, d); 
console.log(typeof d);  
    


// boolean
let login = true;
let f = false;
console.log(typeof f);
console.log(login, f);

//undefined
let user;
console.log(user);

//bigint
let num=1728834893473984738972723202;
console.log(num);

// null
let weather1 = null;
console.log(typeof weather1);

let weather = function weather2(){}
console.log(weather);

// 25
// null
// undefined


// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(typeof id2);
console.log(id2==id1);

// Non Primitive Data type
// array, object, function

let arr1 = [10,20,11,"Rohit",true];
console.log(typeof arr1);

console.log(arr1);

// Rohit 12312 18 gen

let user1 = {
    name:"Yashas",
    account:12312,
    age:18,
    category:'gen'
}

console.log(typeof user1);

let s = function add(){
    console.log("Hello");
}

console.log(typeof s);




// Primitive data type is immutable

let a2 = 10;
let b2 = a;

b2 = 20;
console.log(a2,b2);

let str = "Rohit";
str = "Mohan";

console.log(str);


// Non primitive data type mutable

let arr = [10,20,30,40];

arr.push(90);
arr[0] = 70;
console.log(arr);

let obj ={
    name:"Mohan",
    age:20
}

let obj2 = obj;
obj2.name = "Rohan";
console.log(obj);
