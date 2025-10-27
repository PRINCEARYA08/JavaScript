// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Sum using for loop: " + sum);

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arr) {
    sum += num;
}
console.log("Sum using for...of loop: " + sum);