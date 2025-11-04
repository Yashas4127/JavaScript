//Function

// function greeting(){
//     console.log("Strike is coming on 18 oct");
//     return 10
// }
// console.log(greeting());
// greeting();

// function addNumber(num1,num2,num3=0){
//     const sum=num1+num2+num3;
//     console.log(`sum is ${sum}`);
// }

// rest operator
// function addNumber(...num){
//     // console.log(num);
//     let sum=0;
//     for (let n of num){
//         sum+=n;
//     }
//     console.log(`sum is ${sum}`);
// }

// addNumber(1,2);
// addNumber(6,7);
// addNumber(6,7,8,9);

// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10]

// const [first,second, ...num] = arr;
// console.log(first,second, num);

// const ans = [...arr,...arr2];
// const ans1 = [arr,arr2];
// console.log(ans);
// console.log(ans1);

// Function:expression

// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }

// const addNumber =function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));

//Arrow function
// const addNumber=(num1,num2)=>{
//     const sum=num1+num2;
//     console.log(sum);
// }
// const addNumber=(num1,num2)=> num1+num2;
// console.log(addNumber(4,0));

// let arr=[10,20,11,19,8]
// arr.sort((a,b)=>a-b);
// console.log(arr);

// if we  have single parameter , no need of this ()
// const sqNum=num=>num*num;
// console.log(sqNum(8));

// const greeting=()=>{
//     return {
//         name:"Yashas",
//         age:20
//     }
// }
// const greeting=()=>({name:"Yashas",age:20})
// console.log(greeting());

// IIFE

// (function greeting(){
    // console.log("Hello");
    // })();

// (()=>{
//     console.log("Hi");
// })();

// Call back function
// function greet(){
//     console.log("Hello Ji");
// }

// function dance(){
//     console.log("Iam dancing");
    
// }
// function meet(func){
//     console.log('Met some one');
//     func();
//     // code to exicute
//     console.log("Meeting done");
    
// }
// meet(greet);
// meet(dance);

// blinkit

// function blinkitOrderPlaced(){
//     console.log("We have started packing your Order -Blink It");
// }

// function zomatoOrderPlaced(){
//     console.log("We have started preparing your food -Zomato");
// }
// function payment(amt,callback){
//     console.log(`${amt} payment has initilized`);
//     console.log("Payment is recived");
//     callback();
//     // GST: Government
//     // Rider ko kitna payment dena
//     // company ko kitna 
// }

// payment(500,blinkitOrderPlaced);
// payment(700,zomatoOrderPlaced)












