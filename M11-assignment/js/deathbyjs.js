//STEP 1
// Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
function alphabetizeString(str) {
    return str.split('').sort().join('');
}

//STEP 2
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//STEP 3
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(str) {
    const vowels = 'AEIOU';
    let count = 0;
    for (let char of str.toUpperCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//STEP 4
// Write a JavaScript function that generates a string id (specified length) of random characters.
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.round(Math.random() * characters.length));
    }
    return result;
}

//STEP 5
// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
function findLongestCountryName(countries) {
    let longestName = '';
    for (let country of countries) {
        if (country.length > longestName.length) {
            longestName = country;
        }
    }
    return longestName;
}

// alternitively we can make a second array of character lengths and find the max length and its index to return the country name
function findLongestCountryNameAlt(countries) {
    let lengths = countries.map(country => country.length);
    let maxLength = Math.max(...lengths);
    let index = lengths.indexOf(maxLength);
    return countries[index];
}

// we could even sort the list to return a list of the countries by length
function sortCountriesByLength(countries) {
    return countries.sort((a, b) => b.length - a.length);
}