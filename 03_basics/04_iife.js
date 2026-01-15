// Immediately Invoked Function Expressions


(function chai(){
    console.log(`DB CONNECTED`);
})();    //named iife

( (name) => {
     console.log(`DB CONNECTED TWO ${name}`);
})("pravin")  // unnamed iife