//date 

let myDate = new Date()
//console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

let myownDate = new Date(2024,4,31); //(yy-mm-dd)
// console.log(myownDate.toDateString());
// console.log(myownDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myownDate.getTime()); // Using for compression time milliseconds 
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000)); //for Removing float points values



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // week days 
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());

// newDate.toLocaleString('Default',{
//     Weekday: "long"
// })
