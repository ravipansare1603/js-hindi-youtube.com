const name = "Pravin"
const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('pravin-pp')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    pravin    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pravin.com/pravin%20pansare"
console.log(url.replace('%20', '-'));

console.log(url.includes("panda"));

console.log(gameName.split('-'));




