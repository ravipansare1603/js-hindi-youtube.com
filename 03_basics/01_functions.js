// function sayMyNmme(){
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("V");
//     console.log("I");
//     console.log("N");
// }

// sayMyNmme()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
// function addTwoNumbers(number1, number2){
  
    // let result = number1 + number2
    // return result
    // return number1 + number2
    
// }

// const result = addTwoNumbers(3, 5)
// console.log("result:", result);




function loginUserMassege(username = "sam"){
    if(!username){
        console.log("please enter your username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassege("pravin"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))


const user = {
    username: "pravin",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 333
})


const myNewArray = [200, 400, 700, 900]

function returnsecondValue(getArray){
    return getArray[1]
}

// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200, 400, 600]));
