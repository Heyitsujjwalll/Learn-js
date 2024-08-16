//objects literals

// Object.create  * constructore

const mySym = Symbol("key1")

const JsUser = {
    name : "hymus",
    "full name" : "Hymus gaming",
    [mySym] : "myKey1",
    age : 22,
    location : "Bhopal",
    email : "ujjwal@amazon.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday','Saturday']
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hymysgaming@google.com"
Object.freeze(JsUser)
JsUser.email ="hymusgaming@micro.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello js user");
    
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




