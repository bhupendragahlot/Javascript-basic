// //var c = 300
let a = 300

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
   // console.log("inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

/////////////////////////////////////////////////////////////////

function one() {
    const username = "bhupendra"

    function two() {
        const websites = "youtube"
        console.log(username);
    }
    // console.log(websites);
    two();
}

one();


if (true) {
    const username= "bhupendra"
    if(username === "bhupendra"){
    const   websites = "youtube"
    console.log(username + websites);
    }
   // console.log(websites);
}
// console.log(username);




function addone(num){
    return num + 1;
}
addone(5);

const addtwo = function(num){
    return num + 2;
}
addtwo(5);