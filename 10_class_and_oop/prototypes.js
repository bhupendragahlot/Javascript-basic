let myName = "bhupendra    ";

// console.log(myName.trueLength);


let myheros =["thor","spidermen"];

let heroPower={
    thor:"hammer",
    spidermen:"sling",

    getspiderpower:function(){
        console.log(`spider power is ${this.spidermen}`);
    }

}

Object.prototype.bhupendra = function(){
    console.log(`bhupendra is present in all object`);
}
Array.prototype.gahlot=function(){
    console.log(`gahlot is have power`);
}

// myName.bhupendra();
// myName.gahlot();
// heroPower.gahlot();


// inheritance

const user={
    name:"bhupendra",
    email:"bhupendra@gmail.com"
}

const teacher={
    makevideo:true 
}
const teachingsupport={
    fulltime:false
}
const TASupport={
    makeAssignment:`js assignment`,
    fulltime:true,
    __proto__: teachingsupport
}

teacher.__proto__=user // old syntax 

// modern syntax 
Object.setPrototypeOf(teachingsupport,teacher)

let anotherUsername="gahlot  "

String.prototype.trueLanght = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`ture lenght is: ${this.trim().length}`);
}

anotherUsername.trueLanght()
"bhupendra".trueLanght()
"gahlot".trueLanght()