let names = ["alice", "bob", "charlie", "david", "eve", "frank"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// this is array iteration using for loop
// we are accessing each element of array using index number


for (name of names) {
    console.log(name);
}
// this is array iteration using for...of loop
// we are accessing each element of array directly without using index number