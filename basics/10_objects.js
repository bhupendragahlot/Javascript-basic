//singleton
// Object.create

//object literals

const mysyb= Symbol("key1");

const jsuser ={
//  key : "values";
    name:"bhupendra",
    [mysyb]: "newkey1",
    age:22,
    location:"Kota",
    email:"gahlot@gmil.com",
    isLOgIn : false,
    lastLogIn : ["Monday","Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"])
console.log(jsuser[mysyb])

jsuser.name = "bhupendragahlot";

console.log(jsuser["name"]);