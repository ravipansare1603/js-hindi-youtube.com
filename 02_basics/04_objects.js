// const tinderUser = new Object()    // This is singleton object 
const tinderUser = {}  // this is non singleton object

tinderUser.id = "123abc",
tinderUser.name = "sammay",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pravin",
            lastname: "Pansare"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }

const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

    
