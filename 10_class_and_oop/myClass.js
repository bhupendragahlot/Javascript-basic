// ES6

class User{
    constructor(username,email,password){
        this.username =username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    } 
}

const newuser = new User("bhupendra","bhupendra@gmail.com",1232456);

console.log(newuser.encryptPassword());
console.log(newuser.changeUsername());
