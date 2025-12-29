const accountId = 144553
let accountEmail = "pravin@google.com"
var accountPassward = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pp@pp.com"
accountPassward = "21212121"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassward, accountCity, accountState])