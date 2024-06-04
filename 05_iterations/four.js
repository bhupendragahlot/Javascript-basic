// const myobj ={
//    js:'javascript',
//    cpp : 'c++',
//    rb : 'ruby',
//    py : 'python' 
// }

// for (const key in myobj) {
//    console.log(`${key} shortcut is for, ${myobj[key]}`);    
//     }


// const program = ["js","rb","py","java","cpp"]

// for (const k in program) {
//     console.log(program[k]);
        
//     }
// console.log("with for of loop:-");
// for (const k of program) {
   
//     console.log(k);
// }


const map = new Map();
map.set('in', "india");
map.set('usa',"united States of America");
map.set('fr',"france");

for (const key in map) {
    console.log(key);
    }
