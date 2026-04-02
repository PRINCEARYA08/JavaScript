console.log("Step 9 - Index 9");
let map = [12, 7, 9, 14, 5];
for (let i = 0; i < map.length; i++) {
    if (map[i] % 2 != 0) {
        console.log(map[i]);
    }
}
for (let i = map.length - 1; i >= 0; i--) {
    console.log(map[i]);
}