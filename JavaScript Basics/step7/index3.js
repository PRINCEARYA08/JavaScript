// String methods to manipulate and analyze text data.

let text = "Hello, welcome to the world of JavaScript.";

// 1. toUpperCase() - Converts the string to uppercase.
let upperText = text.toUpperCase();
console.log(text);
console.log("Uppercase:" + upperText);

// 2. toLowerCase() - Converts the string to lowercase.
let lowerText = text.toLowerCase();
console.log("Lowercase:" + lowerText);

// 3. slice() - Extracts a section of the string.
let slicedText = text.slice(10, 15);
console.log("Sliced Text:" + slicedText);

// 4. substring() - Extracts a section of the string.
let substringText = text.substring(7, 14);
console.log("Substring Text:" + substringText);

// 5. replace() - Replaces a specified value with another value.
let replacedText = text.replace("JavaScript", "programming");
console.log("Replaced Text:" + replacedText);

// 6. includes() - Checks if the string contains a specified value.
let hasWorld = text.includes("world");
console.log("Contains 'world':" + hasWorld);

// 7. split() - Splits the string into an array of substrings.
let wordsArray = text.split(" ");
console.log("Words Array:", wordsArray);
// 8. trim() - Removes whitespace from both ends of the string.
let spacedText = "   Hello World!   ";
let trimmedText = spacedText.trim();
console.log("Trimmed Text:" + trimmedText);

// 9. charAt() - Returns the character at a specified index.
let charAtIndex5 = text.charAt(5);
console.log("Character at index 5:" + charAtIndex5);

// 10. indexOf() - Returns the index of the first occurrence of a specified value.
let indexOfWelcome = text.indexOf("welcome");
console.log("Index of 'welcome':" + indexOfWelcome);

// These methods are useful for various string manipulations in JavaScript.

let str1 = "   Learn JavaScript with Apna College!   ";
let str2 = "Master JavaScript Programming.   ";

let combinedStr = (str1).concat(str2);

console.log(combinedStr);