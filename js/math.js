//STEP 1: Create app prompts user for number. Regardless whether negative or positive number, display positive ver of number in console

let userNumber = parseFloat(prompt("Enter number: "));

if (!isNaN(userNumber)) {

    let positiveNumber = Math.abs(userNumber);

    console.log("Positive version of number is:", positiveNumber);
} else {
    console.error("Enter valid number.");
}

//STEP 2: Create app prompts user for floating point value (decimal). Store result of input in var, round up to nearest whole number

let userInput = parseFloat(prompt("Enter floating-point value (decimal): "));

if (!isNaN(userInput)) {
    let roundedNumber = Math.ceil(userInput);

    console.log("Rounded up value is: ", roundedNumber);
} else {
    console.error("Enter valid floating-point value.");
}

//STEP 3: Create app prompts user for floating point value (decimal). Store result of input in var, round it down to nearest whole number

let userInput = parseFloat(prompt("Enter floating-point value (decimal): "));

if (!isNaN(userInput)) {
    let roundedNumber = Math.floor(userInput);

    console.log("Rounded down value is: ", roundedNumber);
} else {
    console.error("Enter valid floating-point value.");
}

//STEP 4: Create app prompts user for 5 numbers. Ask them to comma delimit each number (e.g. 1,2,3,4,5). Store result of input in var

let numberString = prompt("Enter 5 comma-separated numbers (e.g., 1,2,3,4,5): ");

if (numberString) {
    let numbers = numberString.split(",").map(parseFloat);
    let largest = Math.max(...numbers);
    let smallest = Math.min(...numbers);

    console.log("Largest number is:", largest);
    console.log("Smallest number is:", smallest);
} else {
    console.error("Enter 5 comma-separated numbers.");
}

//STEP 5: Create app prompts user for number. Find square root of number and display result in console window

let userNumber = parseFloat(prompt("Enter number: "));

if (!isNaN(userNumber)) {
    if (userNumber >= 0) {
        let squareRoot = Math.sqrt(userNumber);

        console.log("Square root of", userNumber, "is:", squareRoot);
    } else {
        console.error("Square root cannot be calculated for negative numbers.");
    }
} else {
    console.error("Enter valid number.");
}