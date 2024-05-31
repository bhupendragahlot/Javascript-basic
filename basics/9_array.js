const marvel_heros = ["thor","ironmen","spidermen"];
const dc_hero = ["supermen","flash","batmen"];
const cartoon = ["tom","jerry","parmen","oggey"]
// marvel_heros.push(dc_hero);
// console.log(marvel_heros);

// const all_hero = marvel_heros.concat(dc_hero) // concat
// console.log(all_hero)

// const all_hero_new =[...dc_hero,...marvel_heros,...cartoon]; //spread 
// console.log(all_hero_new);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("bhupenra"));
console.log(Array.from("bhupendra"));


let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1,num2,num3));
