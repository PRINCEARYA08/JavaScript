// var c = 300
let a = 300
if(true){
    let a = 10
    const b =20
    // console.log("INNER:",a);
}


// console.log(a);
//console.log(b);
//console.log(c);

function one(){
const username = "prince"

  function two(){ 
     const website = "youtube"
    console.log(username);
}

// console.log(website)

  two()
}
//one()

if(true){
    const username = "Prince"
    if(username === "Prince"){
        const website = "youtube"
        // console.log(username + " " + website);
    }
    // console.log(website);
}
// console.log(username);

// ==========+++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++===============


console.log(addone(5));
function addone(rum) {
    return rum + 1;
}
// console.log(addone(5));



// console.log(addtwo(5));  // in case of function expression we cannot call the function before its declaration because of hoisting
const addtwo = function(rum) {
    return rum + 2;
}
 
console.log(addtwo(5));