let whichTime;
const DAY = document.getElementById("day");
const DATE = document.getElementById("date");
const TIME = document.getElementById("time");
const TIMEBUTTON = document.getElementById("time-button");

TIMEBUTTON.innerHTML = "Click To View Military Time";
whichTime = true;
// true = regular time
// false = standard time

TIMEBUTTON.addEventListener("click", () => {
  whichTime = !whichTime;
  whichTime === true
    ? (TIMEBUTTON.innerText = "Click To View Military Time")
    : (TIMEBUTTON.innerText = "Click To View Standard Time");
});

// Configures and displays the day of the week on the page.
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

  DAY.innerText = nameOfDay;
}

// Configures and displays the date on the page.
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

  DATE.innerText = fullDate;
}

// Configures and displays the time on the page.
function displayTime(now) {
  let standardHours = now.getHours();
  let militaryHours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeOfDay = standardHours < 12 ? "AM" : "PM";
  let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  let displayHours =
    standardHours == 0
      ? (standardHours = 12)
      : standardHours > 12 || standardHours <= 22
      ? (standardHours = `0${standardHours - 12}`)
      : standardHours < 10
      ? (standardHours = `0${standardHours}`)
      : standardHours;

  let standardTime = `${displayHours}:${displayMinutes}:${displaySeconds} ${timeOfDay}`;

  let militaryTime = `${militaryHours}:${displayMinutes}:${displaySeconds}`;

  whichTime === true
    ? (TIME.innerText = standardTime)
    : (TIME.innerText = militaryTime);
}

function renderClock() {
  const CURRENTDATE = new Date();

  displayDay(CURRENTDATE);
  displayDate(CURRENTDATE);
  displayTime(CURRENTDATE);
}

renderClock();
setInterval(renderClock, 1000);
