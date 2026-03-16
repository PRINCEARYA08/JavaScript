// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Prince",
    age: 18,
    [mySym]:"key1",   // key
    location: "Bhopal",
    email:"princearya@amazon.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"],
    "full name":"Prince Arya"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])// symbol 

JsUser.email = "Prince@gpt.com"
// Object.freeze(JsUser)
JsUser.email =  "prince@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());