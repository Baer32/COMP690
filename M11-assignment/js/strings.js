//STEP 1
// Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.
let uname = prompt("What is your name?");
alert("The length of your name is: " + uname.length);

//STEP 2
// Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
// prompting the user to use a 1 based index instead of a 0 based index for human readability
let userName = prompt("What is your name?");
let position = parseInt(prompt("Enter a number to find the letter in your name at that position (starting from 1):"));
alert("The letter at position " + position + " is: " + userName.charAt(position - 1));

//STEP 3
// Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
alert("Your name is: " + firstName.concat(" ", lastName));

//STEP 4
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
let text = "The quick brown fox jumps over the lazy dog";
let index = text.indexOf("fox");
alert("The index of the word 'fox' is: " + index);

//STEP 5
// Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
let text2 = "The quick brown fox jumps over the lazy fox";
let lastIndex = text2.lastIndexOf("fox");
alert("The last index of the word 'fox' is: " + lastIndex);

//STEP 6
// Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
let text3 = "The quick brown fox jumped over the lazy dog";
let fullName = prompt("Please enter your full name:");
let updatedText = text3.replace("the lazy dog", fullName);
alert(updatedText);

//STEP 7
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
let text4 = "The quick brown fox jumps over the lazy dog";
let userWord = prompt("Please enter a word to search for in the text:");
let foundIndex = text4.indexOf(userWord);
alert("The index of the word '" + userWord + "' is: " + foundIndex);

//STEP 8
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.slice(31);
alert(new_string.toUpperCase());

//STEP 9
// Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
let text5 = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(text5.trim().toLowerCase());

//STEP 10
// Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
let text6 = "the quick brown fox jumps over the lazy dog";
let capitalizedText = text6.charAt(0).toUpperCase() + text6.slice(1);
alert(capitalizedText);
