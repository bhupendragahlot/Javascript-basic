
function myfun1( num1, num2){ //myfun1(perameters)
//   let result=   num1 + num2;
//   return result
return num1 + num2
}

// myfun1(3,5);  //myfun(arguments)
// const result =  myfun1(3,5);
// console.log("result is: ", result);


function loginusermsg(username){
    if(username === undefined){ 
        console.log("plz enter a username");
        return;
    }
    return ` welcome ${username} jast logged in`
}
// loginusermsg("bhupendra");
// console.log(loginusermsg("bhupebdra"));



/////////////////////////////////////////////////////////////////////////////////////////
// video 20


function addCartPrice(...num1){ // three dots(...) is called rest operater
    return num1
}
// console.log(addCartPrice(100,200,300,400))


const user = {
    username:"bhupendra",
    price :999
}

function handle_Obj(any_obj){
    console.log(`username is ${any_obj.username} and price is ${any_obj.price}`);
}
// handle_Obj(user)
handle_Obj({
    username:"bhupendra",
    price :999
})

const mynewArr =[200,300,400]

function returnSecondValue(getarr){

    return getarr[1]
}
console.log(returnSecondValue(mynewArr))