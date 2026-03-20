#!/usr/bin/env node

// if 

// if( 2 != 3 ){
// console.log("executed")
// }

const temprature = 30;
 
// if( temprature > 35 ){
//     console.log("temprature is high")
// }

// else if( temprature === 30 ){
//     console.log("temprature is 30")
// }


// else{
//     console.log("temprature is not high")
// }


// const score = 200

// if(score >100){
//     // var power = "fly"
//     // const power = "fly"
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
//  console.log(`User power: ${power}`);


// const balance = 1000

// // if(balance>500) console.log("test1"), console.log("test2")

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");

// }
// else if(balance<900){
// console.log("less than 750");
// }
// else{
//     console.log("less than 120")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard & 2==2){
    console.log("allowd to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
}