






const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456567889n

// Reference (Non premitive)
// Array , objects , Functions

const heros =["shaktiman","naagraj","doga"]
let myObj ={
    name: "ujjwal",
    age:22,
}
                        
const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);


// ++++++++++++++++++++++++
// THERE ARE TWO TYPES OF MEMORY :-
// STACK (premitive ) , HEAP(Non premitive)

let myYoutubename = "ujjwal@googledotcom"

let anotherName = myYoutubename
console.log(anotherName);

anotherName ="chaiorhack"
console.log(myYoutubename);
console.log(anotherName);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hymus@google.com"
console.log(userOne.email);
console.log(userTwo.email);



