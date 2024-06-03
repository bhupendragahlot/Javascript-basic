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


function chai() {
console.log(this);    
}
chai();
