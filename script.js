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
    "Friday",
    "Saturday"
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

/* Displays the current time on the website */
function time() {
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "AM";
  } else {
    timeOfDay = "PM";
  }

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let fullTime = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;

  document.getElementById("time").innerHTML = fullTime;

  // requestAnimationFrame(time);
  // setTimeout(time, 1000);
}

day();
date();
time();
// setInterval(time, 1000);
setTimeout(time, 1000);
