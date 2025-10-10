const students = {
    name: "John",
    age: 21,
    isEnrolled: true,
};
for (let key in students) {
    console.log(key + ": " + students[key]);
}