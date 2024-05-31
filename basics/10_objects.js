// //singleton
// // Object.create

// //object literals

// const mysyb= Symbol("key1");

// const jsuser ={
// //  key : "values";
//     name:"bhupendra",
//     [mysyb]: "newkey1",
//     age:22,
//     location:"Kota",
//     email:"gahlot@gmil.com",
//     isLOgIn : false,
//     lastLogIn : ["Monday","Saturday"]
// }

// console.log(jsuser.email);
// console.log(jsuser["email"])
// console.log(jsuser[mysyb])

// jsuser.name = "bhupendragahlot";

// console.log(jsuser["name"]);

//////////////////////////////////////////////////////

// const instaUser = new Object() // singleton object
const instaUser = {} // same but not singleton objects

instaUser.id = "123a";
instaUser.name = "bhupendra";
instaUser.islogin = false

// console.log(instaUser);

const newuser = {
    email: "gahlot@google.com",
    fullname: {
        userfullname: {
            firstname: "bhupendra",
            lastname: "gahlot"
        }
    }
}
// console.log(newuser.fullname);
// console.log(newuser.fullname.userfullname);
// console.log(newuser.fullname.userfullname.firstname);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[  // in array objects
    {
        id: 1,
        name: "bhupendra"
    },
    {
        id: 2,
        name: "shiv"
    },
]

console.log(users[1].name);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('name')); // for find keys
