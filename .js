
let marks = parseInt(prompt("Enter student marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} 
else if (marks >= 80 && marks <= 89) {
    console.log("Grade: A");
} 
else if (marks >= 70 && marks <= 79) {
    console.log("Grade: B");
} 
else if (marks >= 60 && marks <= 69) {
    console.log("Grade: C");
} 
else if (marks >= 50 && marks <= 59) {
    console.log("Grade: D");
} 
else {
    console.log("Grade: Fail");
}




let number = parseInt(prompt("Enter an integer:"));

if (number % 2 === 0) {
    console.log(number + " is Even");
} 
else {
    console.log(number + " is Odd");
}



let tableNumber = parseInt(prompt("Enter a number:"));

console.log("Multiplication Table of " + tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}



let n = parseInt(prompt("Enter a number (N):"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of first " + n + " natural numbers is: " + sum);



let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let num3 = parseInt(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Largest number is: " + num1);
} 
else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest number is: " + num2);
} 
else {
    console.log("Largest number is: " + num3);
