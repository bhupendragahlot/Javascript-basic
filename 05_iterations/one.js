// const isUserlogin = true
// const temperature =41;

// if(temperature < 50){
// console.log("less then 50");
// }else{
// console.log("temperature is gerater then 50");
// }

// console.log("Execute");


// const balance = 1000;
// if (balance > 500) console.log("test");

//////////////////////////////////////////////////////////////////////////

// Array 

// const arr =[1,2,3,4,5] ;
// for(const num of arr){
//     console.log(num);
// }

// const username =  "bhupendra";
// for (const name of username ){
//     console.log(`each char is ${name}`);
// }



// maps

const map = new Map();
map.set('in', "india");
map.set('usa',"united States of America");
map.set('fr',"france");

// console.log(map);

// for (const [key,value] of map){
//     console.log(key, ':-',value);

// }

const myobj ={
    'game' : 'NFS',
    'game2' : 'spiderman'
}

for (const [key,value] of myobj) {
    console.log(key, ':-', value);
}