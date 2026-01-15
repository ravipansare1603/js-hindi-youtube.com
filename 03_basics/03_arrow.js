const user = {
    username: "pravin",
    price: "999",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "pravin"
//     console.log(this);
    
// }

// chai()

// const chai = function() {
//     let username = "pravin"
//     console.log(this.username);
// }

const chai = () => {
    let username = "pravin"
    console.log(this);
}






chai()