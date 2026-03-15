let obj = {
    item: "laptop",
    price: 45000,
    brand: "hp",
    color: "black"
};

// to create object use = let obj = {key: value};   
// type 1 to create object
console.log("Item name is : ", obj.item, "there price: ", obj.price, "there brand: ", obj.brand, " or color: ", obj.color);
// to access object properties use = obj.propertyName


// tyepe 2 to create object
let output = `The item name is ${obj.item} and there price is ${obj.price}`;
console.log(output);


//\n use for new line in string
let sap = "This is line one.\nThis is line two. \nUse with escape sequence.";
console.log(sap);

//\t use for tab space in string
let sap2 = "This is line one.\tThis is line two. \tUse with escape sequence.";
console.log(sap2);
console.log(sap2.length); // length of the string is 62

// use \\ to print backslash in string
let path = "C:\\Users\\ASUS\\OneDrive\\Desktop\\JavaScript";
console.log(path);

// use \' to print single quote in string
let singleQuote = 'It\'s a beautiful day.';
console.log(singleQuote);