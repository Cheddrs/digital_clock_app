let whichTime
const DAY = document.getElementById("day")
const DATE = document.getElementById("date")
const TIME = document.getElementById("time")
const TIMEBUTTON = document.getElementById("time-button")

TIMEBUTTON.innerHTML = "Click To View Military Time"
whichTime = true
// true = Standard Time
// false = Military Time

TIMEBUTTON.addEventListener("click", () => {
  whichTime = !whichTime
  whichTime === true
    ? (TIMEBUTTON.innerText = "Click To View Military Time")
    : (TIMEBUTTON.innerText = "Click To View Standard Time")
})

function displayDay(now) {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  let theDay = now.getDay()
  let nameOfDay = dayNames[theDay]

  DAY.innerText = nameOfDay
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
  ]
  let theMonth = now.getMonth()
  let nameOfMonth = monthNames[theMonth]
  let theDate = now.getDate()
  let theYear = now.getFullYear()

  let fullDate = `${nameOfMonth} ${theDate}, ${theYear}`

  DATE.innerText = fullDate
}

function displayTime(now) {
  let standardHours = now.getHours()
  let militaryHours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  let timeOfDay = standardHours < 12 ? "AM" : "PM"
  let displayMinutes = minutes < 10 ? `0${minutes}` : minutes
  let displaySeconds = seconds < 10 ? `0${seconds}` : seconds

  if (standardHours === 0) {
    standardHours = 12
  }

  if (standardHours > 12) {
    standardHours = standardHours - 12
  }

  if (standardHours < 10) {
    standardHours = `0${standardHours}`
  }

  militaryHours = militaryHours < 10 ? `0${militaryHours}` : militaryHours

  let standardTime = `${standardHours}:${displayMinutes}:${displaySeconds} ${timeOfDay}`

  let militaryTime = `${militaryHours}:${displayMinutes}:${displaySeconds}`

  whichTime === true
    ? (TIME.innerText = standardTime)
    : (TIME.innerText = militaryTime)
}

function renderClock() {
  const CURRENTDATE = new Date()

  displayDay(CURRENTDATE)
  displayDate(CURRENTDATE)
  displayTime(CURRENTDATE)
}

renderClock()
setInterval(renderClock, 1000)
