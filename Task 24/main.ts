// Define veriables
let apple = "apple";
let UpperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let Fruits = ["Apple","Banana","Orange"];

// Test for equality and inequality with string
console.log("is apple is equal to apple ?");
console.log(apple == apple);

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

// Test using Lowercase Funtion
console.log("Is APPLE is equal to apple after converting to lowercase ");
console.log(UpperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(UpperCaseApple.toLocaleLowerCase() != "apple");

// Numerical tests
// Equal to 
console.log("\n Is ten is equal to twenty?");
console.log(ten == 20);

// Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Graeter than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than 
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

// Greater than or equal to 
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests using "and" & Operators

// using && (And)
console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); 

console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using || (OR)
console.log("\n Twemty is greater than 50 OR 20 is Aqual to 20");
console.log(20  > 50 || 20 == 20);

console.log("\n Twemty is greater than 50 OR 20 is not Aqual to 20");
console.log(20  > 50 || 20 != 20);

// Test whether an item is include in array
console.log("\nIs Orange include in my fruits array");
console.log(Fruits.includes("Orange"));

// Not include
console.log("\nIs orange not include in my fruits array ");
console.log(!Fruits.includes("Orange"));
