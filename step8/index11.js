let marks = prompt("Enter your marks: ");

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 75 && marks < 90) {
    console.log("Grade B");
} else if (marks >= 50 && marks < 75) {
    console.log("Grade C");
} else if (marks >= 35 && marks < 50) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// Example of nested if-else
// let number = 10;

// if (number > 0) {
//     console.log("The number is positive.");
//     if (number % 2 === 0) {
//         console.log("The number is even.");
//     } else {
//         console.log("The number is odd.");
//     }
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }