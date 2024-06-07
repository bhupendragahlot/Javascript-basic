// const user= {
//     username :"bhupendra",
//     loincount: 8,
//     signin:true,

//     getUserDetails: function() {
//         // console.log("got user details form database");
//         console.log(`Username: ${this.username}`);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loincount,islogin){
    this.username= username;
    this.loincount = loincount;
    this.islogin = islogin;
    this.get=function(){
        console.log(`welcome ${this.username}`);
    }
    // return this
}

const userone=new User("bhupendra",10,true);
const usertwo=new User("gahlot",15,true);
console.log(userone.constructor);
// console.log(usertwo);

