// Type of memorys:
// 1. stack -> in primitive datatype always use stack
// 2. heap -> in NON-primitive datatype always use Heap

let Name= "bhupendra-Gahlot";
let firstname = Name;

firstname= "bhupendra";

console.log(Name);
console.log(firstname);


/////////////////////////////////////////////

let studentOne={
    name : "bhupendra",
    Email:"bhupendra@gmail.com"
}

let studentTwo = studentOne;

studentTwo.Email="Bhupendra11@gmail.com"
console.log(studentTwo.Email);
console.log(studentOne.Email);
