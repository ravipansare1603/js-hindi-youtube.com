// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 6476342587256357n



// Reference (Non Primitive)

// Array, objects, Functions

const heros = ["shahrukh" , "nagraj" , "salman"];
let myObj = {
    name : "Pravin",
    age : 20,
}

const myFunction = function(){
    console.log("Hollo world");
}



// console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "pravinpansaredotcom"

let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "pravin@google.com"

console.log(userOne.email);
console.log(userTwo.email);
