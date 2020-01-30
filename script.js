/*
This project was built by Corey Hedberg for the Software Development Mastermind program
*/

let now = new Date();

/* Displays the current day on the website. */
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

  document.getElementById("day").innerHTML = nameOfDay;
}

/* Displays the current date on the website. */
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

  let fullDate = nameOfMonth + " " + theDate + "," + " " + theYear;

  document.getElementById("date").innerHTML = fullDate;
}
