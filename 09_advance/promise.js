const promiseOne = new Promise(function (resolve, reject) {
    //do an asunc task
    //DB calls, cryptography, network 

    setTimeout(function () {
        console.log('async task is complite');
        resolve()
    }, 1000)
});


promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("async 2 resolved");
})


const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "bhupendra", email: "bhupendra@gamil.com" })
    }, 1000)
})

PromiseThree.then(function (user) {
    console.log(user);
})



const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "bhupendra", password: "123" })
        }
        else {
            reject('ERROR:Something went wrong')
        }
    }, 1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
})

