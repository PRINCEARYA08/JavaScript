let prize = [100, 200, 150, 300, 250];

for (let i = 0; i < prize.length; i++) {

    console.log("Before Discount", prize[i]);

}
for (let i = 0; i < prize.length; i++) {

    let offer = prize[i] / 10;
    prize[i] -= offer;


}
console.log("after Discount", prize);