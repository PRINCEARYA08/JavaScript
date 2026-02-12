let marks = [85, 90, 78, 92, 88, 60, 75, 95, 80, 70];
let total = 0;
for (let i = 0; i < marks.length; i++) {

    console.log(marks[i]);
    total += marks[i];
}
console.log("Total Marks:", total);
let average = total / marks.length;
console.log("Average Marks:", average);