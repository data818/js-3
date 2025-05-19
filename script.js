// data type string
let myName = "data";

let greeting = "Hello";
let greeting2 = `Hello`;

let fullText = `${greeting} ${myName}! welcome,back`;

console.log(fullText.toUpperCase());
console.log(fullText.toLowerCase());

let userName = prompt("დაწერეთ მხოლოდ სახელი");

if (userName && userName.includes(" ")) {
  console.log("არ უნდა შეიცავდეს space-ს");
} else {
  console.log(`hello,${userName}`);
}

// console.log(greeting.lastIndexOf("o"));
// console.log(greeting.includes("Hello"));
// if (greeting.includes("Hello")) {
//   console.log("შეიცავს სიტყვა hello");
// } else {
//   console.log("ეს წინადადება არ შეიცავს hello");
// }

// let textLenght = fullText.length - 1;
// console.log(fullText[textLenght]);

// console.log(greeting + " " + myName);

// console.log(`${greeting} ${myName}! welcome,back`);
