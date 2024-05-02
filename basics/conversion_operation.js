let regNo = "12217388A";


console.log( typeof regNo);
console.log( typeof (regNo));

let regNoInNo = Number(regNo) //now string converted in number 

console.log( typeof regNoInNo);
console.log("your regNo: " ,  typeof regNoInNo);
console.log(regNoInNo);

console.log("/////////////////////////////////////////////////");


let score = null
let score2 = Number(score)
console.log(typeof score2)
console.log( score2)


console.log("/////////////////////////////////////////////////");


let A = undefined
let A2 = Number(A)
let A3 = String(A)
console.log(typeof A2)
console.log( A2)
console.log( A3)



// *********************** operation ********************

let value = 3

let negValue = -value
console.log(negValue);

let str1 = "hey"
let str2 = "bhupendra"
let str3 = str1 + str2

console.log(str3)
console.log( str1 + str2)

let gamecount = 100
gamecount++

console.log(gamecount);