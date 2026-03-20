//Immediately Invoked Function Expressions IIFE

(function chai(){
// name iife because there having any name

    console.log(`DB CONNECTED`);
})();


( (name) => {
// unname iffe

    console.log(`DB CONNECTED TWO ${name}`)
})('prince');