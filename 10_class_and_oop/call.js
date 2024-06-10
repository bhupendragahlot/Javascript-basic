function setUsername(username){
    this.usernmae =username;
    console.log("called")
}

function createUser(username,email,password) {
    setUsername.call(this,username);
    this.email =email;
    this.password = password;
}

const adduser = new createUser("bhupendra","bhupendra@gmail.com","1235456");
console.log(adduser);