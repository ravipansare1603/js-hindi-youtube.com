// singleton
// Object.create

// object literals

const MySym = Symbol("key1")

const JsUser = {
    name: "Pravin",
    "full name": "pravin pansare",
    [MySym]: "MyKey1",
    age: 18,
    email: "pravin@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[MySym]);
// console.log(typeof [MySym]);

JsUser.email = "pravin@youtube.com"
// Object.freeze(JsUser)
JsUser.email = "pravin@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
