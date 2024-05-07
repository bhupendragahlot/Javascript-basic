let firstName= "bhupendra";
let lastName ="gahlot";

// console.log("hello "+firstName + lastName); 
console.log(`hello ${firstName} ${lastName}`); 

// second way of declaration strings

const hero= new String(` bhupendra-gahlot`);
console.log(hero[0]);
console.log(hero.length);
console.log(hero.charAt(2));
console.log(hero.indexOf('d'));
console.log(hero.toLocaleUpperCase());

console.log('this trim fun: '+hero.trim())
console.log(hero.replace('-', '_')); 
console.log(hero.includes("pen"));

// let newString = hero.substring(0,3);
// console.log(newString);
// let otherSting = hero.slice(-2,8);
// console.log(otherSting);