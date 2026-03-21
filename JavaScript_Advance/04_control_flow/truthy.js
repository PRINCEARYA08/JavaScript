// const userEmail = "paryay@.ai"
// const userEmail = ""
// if(userEmail){
//     console.log("Got email id")
// }
// else{
//     console.log("Don't have user email ")
// }

// falsy values in js
// false, 0, -0, 0n, "", null, undefined, NaN

// truthy values in js
// true, {}, [], " ", 1, -1, 3.14, "false", "0", "null", "undefined", "NaN", function(){}, Symbol(), Infinity, -Infinity



// if(userEmail.length === 0){
//     console.log("array is empty")
// }
    
// const emptyObj = {} 
 
// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty")
// }

// nullish coalescing Operator (??): null undifined

let val1;
val1= 5??10
val1= null??10
val1= undefined??10
val1= null??20??10
console.log(val1)
// 10

// Terniary operator

const iceTeaPrice = 100
iceTeaPrice <=80  ? console.log("less than 80"): console.log("more than 80")