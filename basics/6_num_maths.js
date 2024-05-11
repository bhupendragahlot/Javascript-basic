const num = 4000;
console.log(num);
console.log(typeof(num));

const num2=new Number(5000);
console.log(num2);
console.log(typeof(num2));
console.log(num2.toString().length);
console.log(num2.toFixed(2));

var num3 = 123.8966;
console.log(num2.toPrecision(2));
console.log(num2.toPrecision(3));

const hund = 100000000000;
console.log(hund.toLocaleString()); // for converting us standard 
console.log(hund.toLocaleString('en-IN')); // for converting Indian standards 
