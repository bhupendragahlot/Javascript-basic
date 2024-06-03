const user = {
    username: "bhupendra",
    price :999,

    welcomemsg : function(){
        console.log(`wecome ${this.username}, in website`);
        console.log(this);
    }
}
// user.welcomemsg()
// user.username ="gahlot"
// user.welcomemsg()
// console.log(this);


// function chai() {
//     let username = "bhupendra";
// console.log(this.username);    
// }
// chai();


// const  chai2 = function(){
//     let username = "bhupendra";
//     console.log(this.username); 
// }
// chai2();

// const chai3 =() =>{
//     let username = "bhupendra";
//     console.log(`this is arrow function ${this.username}`); 
// }
// chai3();

// const addtwo =(num1,num2) =>{
//     return num1 + num2;
// }
// console.log(addtwo(7, 2));

// const addnum =(num1,num2) => num1 + num2;
// console.log(addnum(7,2));

const addnum2 =(num1,num2) =>({username:"bhupendra"}) 
console.log(addnum2(7,2));

