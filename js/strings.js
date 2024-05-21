//STEP 1: Create app prompts user for their name. Find length of characters in person’s name

var name = prompt("What is your name? ");

var nameLength = name.length;

alert("Your name, " + name + ", is " + nameLength + " characters long.");

//STEP 2: Create app prompt user for name. Prompt user for num val, find letter in str base on num

let name = prompt("Enter your name: ");

if (name) {
    let position = parseInt(prompt("Enter number to find letter (between 1 and " + name.length + "):"));

    if (!isNaN(position) && position > 0 && position <= name.length) {
        let letterIndex = position - 1;

        let letter = name.charAt(letterIndex);
        alert("Letter at position " + position + " is '" + letter + "'.");
    } else {
        alert("Enter valid number between 1 and " + name.length + ".");
    }
} else {
    alert("Enter your name.");
}

//STEP 3: Create app prompts user for first name. Prompt user for last name using second prompt

let firstName = prompt("Enter your first name:");

if (firstName) {
    let lastName = prompt("Enter your last name:");

    if (lastName) {
        let fullName = firstName + " " + lastName;
        alert("Your name is: " + fullName);
    } else {
        alert("Please enter your last name.");
    }
} else {
    alert("Please enter your first name.");
}

//STEP 4: Create app store “The quick brown fox jumps over the lazy dog” in var. Disp in alert index of “fox”

let text = "The quick brown fox jumps over the lazy dog";

let foxIndex = text.indexOf("fox");

if (foxIndex !== -1) {
    alert("Word 'fox' is found at index " + foxIndex + ".");
} else {
    alert("Word 'fox' is not found in the text.");
}

//STEP 5: Create app stores “The quick brown fox jumps over the lazy fox” in var. Find and display in alert

let text = "The quick brown fox jumps over the lazy fox";

function findLastOccurrence(text, searchString) {
    let lastIndex = -1;
    let currentIdx;
    while ((currentIdx = text.indexOf(searchString, lastIndex + 1)) !== -1) {
        lastIndex = currentIdx;
    }
    return lastIndex;
}

let lastFoxIndex = findLastOccurrence(text, "fox");

if (lastFoxIndex !== -1) {
    alert("Last 'fox' is found at index " + lastFoxIndex + ".");
} else {
    alert("Word 'fox' is not found in text.");
}

//STEP 6: Create app store “The quick brown fox jumped over the lazy dog” in var. Prompt user for full name

let text = "The quick brown fox jumped over the lazy dog";

let fullName = prompt("Enter your full name: ");

if (fullName) {
    let replacedText = text.replace("the lazy dog", fullName);

    alert("The original text is modified:\n" + replacedText);
} else {
    alert("Enter your full name.");
}

//STEP 7: Create app store “The quick brown fox jumps over the lazy dog” in var. Prompt user for word. Search

let text = "The quick brown fox jumps over the lazy dog";

let searchWord = prompt("Enter word to search for: ");

if (searchWord) {
    searchWord = searchWord.toLowerCase();

    let lowercaseText = text.toLowerCase();

    let wordIndex = lowercaseText.indexOf(searchWord);

    if (wordIndex !== -1) {
        alert("Word '" + searchWord + "' is found at index " + wordIndex + ".");
    } else {
        alert("Word '" + searchWord + "' is not found in the text.");
    }
} else {
    alert("Enter word to search for.");
}

//STEP 8: Create app store “The quick brown fox jumps over the lazy dog” in var 'old_string'. Use slice()

let oldString = "The quick brown fox jumps over the lazy dog";

let newString = oldString.slice(31);

alert(newString.toUpperCase());

//STEP 9: Create app store “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” in var. Make sure add space

let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";

let trimmedText = text.trim();

alert(trimmedText.toLowerCase());

//STEP 10: Create app store “the quick brown fox jumps over the lazy dog” in var. User forgot to cap 1st letter

let sentence = "the quick brown fox jumps over the lazy dog";

if (sentence) {
    let capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    alert("Capitalized sentence is: " + capitalizedSentence);
} else {
    alert("Enter a sentence.");
}