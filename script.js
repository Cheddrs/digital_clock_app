function displayDayOnScreen(now) {
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

function displayDateOnScreen(now) {
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

  let fullDate = `${nameOfMonth} ${theDate}, ${theYear}`;

  document.getElementById("date").innerHTML = fullDate;
}

function displayTimeOnScreen(now) {
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

  let fullTime = `${hours}:${minutes}:${seconds} ${timeOfDay}`;

  document.getElementById("time").innerHTML = fullTime;
}

function renderClock() {
  const currentDate = new Date();

  displayDayOnScreen(currentDate);
  displayDateOnScreen(currentDate);
  displayTimeOnScreen(currentDate);
}

renderClock();
setInterval(renderClock, 1000);
