//? 0immediately invoked expressions IIFE


// function db() {
//     console.log(`db connection `);
// }
// db();


// (function db() {                     // IIFE function
//     console.log(`db connection `);
// })
// ();

// ( () => {                             // iife arrow function 
//     console.log(`DB connected two `);
// })();

( (name) =>{                           // function with parameters 
    console.log( `hello ${name}`);
})(`bhupendra`);
