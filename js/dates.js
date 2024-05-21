//STEP 1: Create application gets the number of days in a month. Display that result within the console window

let today = new Date();
let month = today.getMonth();
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let days = daysInMonth[month];

console.log("Current month (" + (month + 1) + ") has", days, "days.");

//STEP 2: Create application gets month name from particular date. Display result within the console window

let date = new Date();
let month = date.getMonth();
let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let monthName = monthNames[month];

console.log("Month name is:", monthName);

//STEP 3: Create application tests whether a date is a weekend. Display that result within the console window

let date = new Date();
let dayOfWeek = date.getDay();
let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);

console.log("Is it the weekend? " + isWeekend);

//STEP 4: Create application gets yesterday’s day of week. If today is Tuesday, console should display Monday

let today = new Date();
let yesterday = new Date(today.getTime() - (1000 * 60 * 60 * 24));
let yesterdayDayOfWeek = yesterday.getDay();
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let yesterdayDay = dayNames[yesterdayDayOfWeek];

console.log("Yesterday's day of the week:", yesterdayDay);

//STEP 5: Create app gets current day of week. Only first letter of day. If today is Tuesday, display letter T

let today = new Date();
let dayOfWeek = today.getDay();
let dayInitials = ["S", "M", "T", "W", "T", "F", "S"];
let firstLetter = dayInitials[dayOfWeek];

console.log("Today's first letter of the day:", firstLetter);