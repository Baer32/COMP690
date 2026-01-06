//STEP 1
// Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
let userInput = prompt("Please enter a number:");
let number = parseFloat(userInput);
console.log("The positive version of your number is: " + Math.abs(number));

//STEP 2
// Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
let floatInput = prompt("Please enter a floating point number (decimal):");
let floatNumber = parseFloat(floatInput);
console.log("The number rounded up to the nearest whole number is: " + Math.ceil(floatNumber));

//STEP 3
// Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
let floatInput2 = prompt("Please enter a floating point number (decimal):");
let floatNumber2 = parseFloat(floatInput2);
console.log("The number rounded down to the nearest whole number is: " + Math.floor(floatNumber2));

//STEP 4
// Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
let numbersInput = prompt("Please enter 5 numbers, separated by commas (e.g., 1,2,3,4,5):");
let numbersArray = numbersInput.split(",").map(Number);
let maxNumber = Math.max(...numbersArray);
let minNumber = Math.min(...numbersArray);
console.log("The largest number is: " + maxNumber);
console.log("The smallest number is: " + minNumber);

//STEP 5
// Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.
let numberInput = prompt("Please enter a number to find its square root:");
let num = parseFloat(numberInput);
console.log("The square root of " + num + " is: " + Math.sqrt(num));
