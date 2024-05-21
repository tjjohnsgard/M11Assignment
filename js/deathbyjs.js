//STEP 1: Write function returns passed string with letters in alphabetical order. Assume punctuation & num symbols

function sortLetters(str) {
    let lettersOnly = str.replace(/[^a-zA-Z]/g, "");
    let sortedLetters = lettersOnly.split("").sort();

    return sortedLetters.join("");
}

let inputString = "webmaster";
let sortedString = sortLetters(inputString);

console.log("Original string:", inputString);
console.log("Sorted letters:", sortedString);

//STEP 2: Write function accepts string as parameter and converts first letter of each word of string to upper case

function capitalizeFirstLetters(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

let inputString = "the quick brown fox";
let capitalizedString = capitalizeFirstLetters(inputString);

console.log("Original string:", inputString);
console.log("Capitalized:", capitalizedString);

//STEP 3: Write function that accepts a string as a parameter and counts the number of vowels within the string

function countVowels(str) {
    let lowerCaseStr = str.toLowerCase();
    let vowelRegex = /[aeiouy]/gi;
    let matches = lowerCaseStr.match(vowelRegex);

    return matches ? matches.length : 0;
}

let inputString = "The quick brown fox";
let vowelCount = countVowels(inputString);

console.log("Original string:", inputString);
console.log("Number of vowels:", vowelCount);

//STEP 4: Write function that generates a string id (specified length) of random characters

function generateRandomStringId(length) {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let randomString = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        randomString += charSet.charAt(randomIndex);
    }
    return randomString;
}

let idLength = 8;
let randomId = generateRandomStringId(idLength);

console.log("Generated random ID:", randomId);

//STEP 5: Write function accepts a list of country names as input and returns the longest country name as output

function findLongestCountry(countries) {
    let longestCountry = "";
    let maxLength = 0;

    for (let country of countries) {
        if (country.length > maxLength) {
            longestCountry = country;
            maxLength = country.length;
        }
    }
    return longestCountry;
}

let countries = ["Australia", "Germany", "United States of America"];
let longestCountryName = findLongestCountry(countries);

console.log("Longest country name:", longestCountryName);