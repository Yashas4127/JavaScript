"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
let x = 20; //automatically give its type
x = 30;
// x="Yashu" not possible
let val = "Yashas";
val = "Yashas H M";
let money; //Type is any 
money = 10;
money = "Yashu";
//We avoid these
console.log(money.toUpperCase());
let val2;
val2 = 10;
val2 = "Yashas";
//To apply any opertaion 1st we need to know the type of varible
if (typeof val2 === 'string') {
    console.log(val2.toUpperCase());
}
//Non primitive
let arr = [2, 4, 7, 8];
let arr1 = [1, 2, 3, 4];
let arr3 = [2, 3, "Yashas"];
// arr3.push(true) Gives error
let arr4 = [2, 3, "Yashas", true];
let tuple = ["Yashu", 19, 2000000];
//# sourceMappingURL=first.js.map