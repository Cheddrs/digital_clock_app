let hours;
let minutes;
let seconds;
let fulltime = "";
let whichTime;
const DAY = document.getElementById("day");
const DATE = document.getElementById("date");
const TIMEID = document.getElementById("time");
const TIMEBUTTON = document.getElementById("time-button");

TIMEBUTTON.innerHTML = "Click To View Military Time";
whichTime = true;

TIMEBUTTON.addEventListener("click", () => {
  whichTime = true ? false : true;

  whichTime === true
    ? (TIMEBUTTON.innerHTML = "Click To View Military Time")
    : (TIMEBUTTON.innerHTML = "Click To View Regular Time");
  console.log(whichTime);
});
// TODO: one button to toggle between the two different times

function displayDay(now) {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let theDay = now.getDay();
  let nameOfDay = dayNames[theDay];

  DAY.innerHTML = nameOfDay;
}

function displayDate(now) {
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
    "December",
  ];
  let theMonth = now.getMonth();
  let nameOfMonth = monthNames[theMonth];
  let theDate = now.getDate();
  let theYear = now.getFullYear();

  let fullDate = `${nameOfMonth} ${theDate}, ${theYear}`;

  DATE.innerHTML = fullDate;
}

function displayTime(now) {
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  let timeOfDay = hours < 12 ? "AM" : "PM";

  let displayHours =
    hours == 0
      ? (hours = 12)
      : hours > 12
      ? (hours = hours - 12)
      : hours < 10
      ? (hours = `0${hours}`)
      : hours;

  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  } else if (hours < 10) {
    hours = "0" + hours;
  }

  let fullTime = `${hours}:${displayMinutes}:${displaySeconds} ${timeOfDay}`;

  TIMEID.innerHTML = fullTime;
}

function renderClock() {
  const currentDate = new Date();

  displayDay(currentDate);
  displayDate(currentDate);
  displayTime(currentDate);
}

renderClock();
setInterval(renderClock, 1000);

console.log(whichTime);
