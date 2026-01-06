//STEP 1
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
var favoriteMovies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows"];
console.log(favoriteMovies[1]);

//STEP 2
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
var movies = new Array(5);
movies[0] = "The Royal Tenenbaums";
movies[1] = "Airplane!";
movies[2] = "The Lord of The Rings";
movies[3] = "Reservoir Dogs";
movies[4] = "What We Do in the Shadows";
console.log(movies[0]);

//STEP 3
// Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
movies[2] = "Twins";
console.log(movies.length);

//STEP 4
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
var moviesLiteral = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows"];
delete moviesLiteral[0];
console.log(moviesLiteral);

//STEP 5
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
var movies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
for (var index in movies) {
    console.log(movies[index]);
}

//STEP 6
//  Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
var movies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
for (var movie of movies) {
    console.log(movie);
}

//STEP 7
// Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
var movies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
movies.sort();
for (var movie of movies) {
    console.log(movie);
}

//STEP 8
// Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
var movies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
var leastFavMovies = ["Avengers", "Avatar", "Cats"];
console.log("Movies I like:");
console.log(" ");
for (var movie of movies) {
    console.log(movie);
}
console.log(" ");
console.log("Movies I regret watching:");
console.log(" ");
for (var movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
var favMovies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
var leastFavMovies = ["Avengers", "Avatar", "Cats"];
var movies = favMovies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies);

//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
var favMovies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
var leastFavMovies = ["Avengers", "Avatar", "Cats"];
var movies = favMovies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies[movies.length - 1]);


//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window
var favMovies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
var leastFavMovies = ["Avengers", "Avatar", "Cats"];
var movies = favMovies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies[0]);

//STEP 12
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
var favMovies = ["The Royal Tenenbaums", "Airplane!", "The Lord of The Rings", "Reservoir Dogs", "What We Do in the Shadows", "Twins", "Ghostbusters"];
var leastFavMovies = ["Avengers", "Avatar", "Cats"];
var movies = favMovies.concat(leastFavMovies);
var leastFavIndices = [];
for (var i = 0; i < movies.length; i++) {
    if (leastFavMovies.includes(movies[i])) {
        leastFavIndices.push(i);
    }
}
console.log("Indices of least favorite movies: " + leastFavIndices);
for (var index of leastFavIndices) {
    // not sure if this is exactly what was meant, but could add a new movie from another list here
    movies[index] = favMovies[index];
}

//STEP 13
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
var movies = [["The Royal Tenenbaums", 1], ["Airplane!", 2], ["The Lord of The Rings", 3], ["Reservoir Dogs", 4], ["What We Do in the Shadows", 5]];
var movieNames = movies.filter(function(item) {
    if (typeof item[0] === 'string') {
        console.log(item[0]);
    }
});

//STEP 14
// Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
// Employees:
// ZAK
// JESSICA
// MARK
// FRED
// SALLY
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(empArray) {
    console.log("Employees:");
    console.log(" ");
    for (var emp of empArray) {
        console.log(emp);
    }
};
showEmployee(employees);

//STEP 15
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// Expected Result: [58, "abcd", true]
function filterValues(arr) {
    return arr.filter(function(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
function getRandomItem(arr) {
    var randomIndex = Math.round(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log(getRandomItem([1,2,3,4,5,6,7,8,9,10]));

//STEP 17
// Write a JavaScript function to get the largest number from a numeric array.
function getLargestNumber(arr) {
    return Math.max.apply(null, arr);
}
console.log(getLargestNumber([1,2,3,4,5,6,7,8,9,10]));