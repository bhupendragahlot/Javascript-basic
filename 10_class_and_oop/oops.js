const user= {
    username :"bhupendra",
    loincount: 8,
    signin:true,

    getUserDetails: function() {
        // console.log("got user details form database");
        console.log(`Username: ${this.username}`);
    }
}

console.log(user,username);
console.log(user.getUserDetails());