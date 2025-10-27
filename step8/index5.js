let price = [100, 200, 300, 400, 500];

for (let p of price) {
    offer = p - (p * 10) / 100;
    console.log(`Price after 10% discount on ${p} is: ${offer}`);
}