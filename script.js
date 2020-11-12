let hours;
let minutes;
let seconds;
let fulltime = "";
let whichTime;
const TIMEID = document.getElementById("time");
const REGULARTIMEBUTTON = document.getElementById("regular-time");
const MILITARYTIMEBUTTON = document.getElementById("military-time");

REGULARTIMEBUTTON.addEventListener("click", () => {
  // pending
});

MILITARYTIMEBUTTON.addEventListener("click", () => {
  // pending
});

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

  document.getElementById("day").innerHTML = nameOfDay;
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

  document.getElementById("date").innerHTML = fullDate;
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
