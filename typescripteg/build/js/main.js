"use strict";
let username = 'anushka';
console.log(username);
// let a: number= 12;
// let b:number= 6;
// let c: number= 2; 
// console.log(a/b)
// console.log(c*b)
let myName = 'anushka';
let meaningOfLife;
let isLoading;
let album;
let aaa;
aaa = 'anushka';
aaa = 590;
myName = "Joshi";
meaningOfLife = 42;
isLoading = true;
album = true;
album = 1982;
album = "van halen";
// const sum = (a: number,b:number)=>{
//     return a+b
// }
let postId;
let isActive;
let re = /\w+/g;
let stringArr = ['one', 'two', 'three'];
let guitars = ['strat', 'les paul', 5105];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Jhon';
stringArr.push('two');
guitars[0] = 1984;
guitars.unshift('JIM');
let test2 = [];
let bands = [];
bands.push('van halen');
let myTuple = ['Dave', 42, true];
let mixed = ['jhon', 1, false];
mixed = myTuple;
// myTuple = mixed  not possible 
// it is a possibility that mixed may not have 3 values so it does not risk it 
// myTuple[3] = 42 
myTuple[1] = 42;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleobj = {
    prop1: 'Dave',
    prop2: true
};
//convert to more or less specific 
let a = 'hello';
let b = a; // less specific 
let c = a; // more specific 
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string unknown is used for forecasting or double casting  when u know u want to cast something speciafically 
10;
//wrong way will be 10 as string
// The DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
// img.src 
myImg.src;
