/* Displays the current day */
function day() {
  let nowDay = new Date();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let theDay = nowDay.getDay();
  let nameOfDay = dayNames[theDay];

  document.getElementById("day").innerHTML = nameOfDay;
}

/* Displays the current date */
function date() {
  let nowDate = new Date();
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
  let theMonth = nowDate.getMonth();
  let nameOfMonth = monthNames[theMonth];
  let theDate = nowDate.getDate();
  let theYear = nowDate.getFullYear();

  let fullDate = nameOfMonth + " " + theDate + "," + " " + theYear;

  document.getElementById("date").innerHTML = fullDate;
}

/* Displays the current time */
function time() {
  let nowTime = new Date();
  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();
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
}

day();
setInterval(day, 1000);
date();
setInterval(date, 1000);
time();
setInterval(time, 1000);

// TODO: Get it down to one function.
