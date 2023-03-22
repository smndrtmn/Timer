let time = 0;
const clock = document.getElementsByClassName("clock");
buttonToggleStart = true;
var IntervalID;

function updateTime() {
  time++;
  clock[0].textContent = time;
}

function Timer() {
  if (buttonToggleStart) {
    IntervalID = setInterval(updateTime, 1000);
      buttonToggleStart = false;
      document.getElementById("button1").textContent = "Stop"
  } else {
    clearInterval(IntervalID);
      buttonToggleStart = true;
      document.getElementById("button1").textContent = "Start"
  }
}
