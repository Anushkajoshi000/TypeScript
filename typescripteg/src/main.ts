let username ='anushka'
console.log(username)

// let a: number= 12;
// let b:number= 6;
// let c: number= 2; 

// console.log(a/b)
// console.log(c*b)

let myName: string = 'anushka';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let aaa: string | number 
aaa= 'anushka'
aaa=590 

myName = "Joshi"
meaningOfLife = 42
isLoading = true
album = true 
album = 1982 
album ="van halen"

// const sum = (a: number,b:number)=>{
//     return a+b
// }

let postId: string | number 
let isActive: number| boolean | string
let re: RegExp = /\w+/g


let stringArr = ['one','two','three']
let guitars = ['strat','les paul', 5105]
let mixedData = ['EVH', 1984, true]

stringArr[0] = 'Jhon'
stringArr.push('two')
guitars[0]=1984
guitars.unshift('JIM')
let test2 = []
let bands : string[]=[]
bands.push('van halen')
let myTuple: [string, number, boolean]=['Dave', 42, true]
let mixed =['jhon',1,false]
mixed=myTuple  
// myTuple = mixed  not possible 
// it is a possibility that mixed may not have 3 values so it does not risk it 
// myTuple[3] = 42 
myTuple[1] = 42 


let myObj: object 
myObj = []
console.log(typeof myObj )
myObj=bands 
myObj ={}
const exampleobj= {
    prop1: 'Dave',
    prop2: true  
}

// interface Guitarist {
//     name?: string,
//     active: boolean,
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 5150, 'OU812']
// }

// let jp: Guitarist = {
//     active: true,
//     albums: ['I', 'II', 'IV']
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//     if (guitarist.name) {
//         return `Hello ${guitarist.name.toUpperCase()}!`
//     }
//     return 'Hello!'
// }

// console.log(greetGuitarist(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

// enum Grade {
//     U = 1,
//     D,
//     C,
//     B,
//     A,
// }

// console.log(Grade.U)

// functions 
// const add = (a: number, b: number): number => {
//     return a + b
// }

// const logMsg = (message: any): void => {
//     console.log(message)
// }

// logMsg('Hello!')
// logMsg(add(2, 3))

// let subtract = function (c: number, d: number): number {
//     return c - d
// }

// type mathFunction = (a: number, b: number) => number
// // interface mathFunction {
// //     (a: number, b: number): number
// // }

// let multiply: mathFunction = function (c, d) {
//     return c * d
// }

// logMsg(multiply(2, 2))

// // optional parameters 
// const addAll = (a: number, b: number, c?: number): number => {
//     if (typeof c !== 'undefined') {
//         return a + b + c
//     }
//     return a + b
// }

// default param value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//     return a + b + c
// }

// logMsg(addAll(2, 3, 2))
// logMsg(addAll(2, 3))
// logMsg(sumAll(2, 3))
// logMsg(sumAll(undefined, 3))

// Rest Parameters 
// const total = (a: number, ...nums: number[]): number => {
//     return a + nums.reduce((prev, curr) => prev + curr)
// }

// logMsg(total(10, 2, 3))

// const createError = (errMsg: string): never => {
//     throw new Error(errMsg)
// }

// const infinite = () => {
//     let i: number = 1
//     while (true) {
//         i++
//         if (i > 100) break
//     }
// }

// // custom type guard 
// const isNumber = (value: any): boolean => {
//     return typeof value === 'number'
//         ? true : false
// }

// // use of the never type 
// const numberOrString = (value: number | string): string => {
//     if (typeof value === 'string') return 'string'
//     if (isNumber(value)) return 'number'
//     return createError('This should never happen!')
// }
type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific 
let a: One = 'hello'
let b = a as Two // less specific 
let c = a as Three // more specific 

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

//TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//10 as string unknown is used for forecasting or double casting  when u know u want to cast something speciafically 
(10 as unknown) as string
//wrong way will be 10 as string
// The DOM 
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

// img.src 
myImg.src






