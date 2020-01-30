/*
This project was built by Corey Hedberg for the Software Development Mastermind program
*/

let now = new Date();

function day() {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
  let theDay = now.getDay();
  let nameOfDay = dayNames[theDay];

  console.log(nameOfDay);
}

// Only need for the console
// Remove when finished
console.log("From the day function");
day();

function date() {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let theMonth = now.getMonth();
  let nameOfMonth = monthNames[theMonth];
  let theDate = now.getDate();
  let theYear = now.getFullYear();

  console.log(nameOfMonth);
  console.log(theDate);
  console.log(theYear);
}

// Only need for the console
// Remove when finished
console.log("From the date function");
date();
