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

console.log(loginUserMassege("pravin"))