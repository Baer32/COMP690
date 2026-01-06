//STEP 1
// Create an application that gets the number of days in a month. Display that result within the console window.
let month = parseInt(prompt("Enter a month number (1-12):"));
let year = parseInt(prompt("Enter a year (e.g., 2024):"));
let daysInMonth = new Date(year, month, 0).getDate();
console.log("The number of days in month " + month + " of year " + year + " is: " + daysInMonth);

//STEP 2
// Create an application that gets the month name from a particular date. Display that result within the console window.
let dateInput = prompt("Enter a date (YYYY-MM-DD):");
let date = new Date(dateInput);
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[date.getMonth()];
console.log("The month name for the date " + dateInput + " is: " + monthName);

//STEP 3
// Create an application that tests whether a date is a weekend. Display that result within the console window.
let testDateInput = prompt("Enter a date to test (YYYY-MM-DD):");
let testDate = new Date(testDateInput);
let dayOfWeek = testDate.getDay();
let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
console.log("The date " + testDateInput + " is a weekend: " + isWeekend);

//STEP 4
// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let yesterdayName = daysOfWeek[yesterday.getDay()];
console.log("Yesterday was: " + yesterdayName);

//STEP 5
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
let currentDayName = daysOfWeek[today.getDay()];
let firstLetter = currentDayName.charAt(0);
console.log("The first letter of today (" + currentDayName + ") is: " + firstLetter);
