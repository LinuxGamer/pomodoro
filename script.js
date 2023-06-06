// Get timer elements
const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');

let countdown;
let isTimerRunning = false;
let workTime = parseInt(workTimeInput.value, 10);
let breakTime = parseInt(breakTimeInput.value, 10);

function startTimer(duration) {
  let timer = duration * 60;
  let minutes;
  let seconds;

  countdown = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeDisplay.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      timeDisplay.textContent = '00:00';
      alert('Time is up!');
      if (isTimerRunning) {
        startBreakTimer();
      } else {
        startWorkTimer();
      }
    }
  }, 1000);
}

function startWorkTimer() {
  workTime = parseInt(workTimeInput.value, 10);
  startTimer(workTime);
}

function startBreakTimer() {
  breakTime = parseInt(breakTimeInput.value, 10);
  startTimer(breakTime);
}

function stopTimer() {
  clearInterval(countdown);
}

// Event listeners
startButton.addEventListener('click', () => {
  if (isTimerRunning) {
    stopTimer();
    startButton.textContent = 'Start';
  } else {
    startWorkTimer();
    startButton.textContent = 'Stop';
  }
  isTimerRunning = !isTimerRunning;
});

resetButton.addEventListener('click', () => {
  stopTimer();
  timeDisplay.textContent = workTimeInput.value + ':00';
  startButton.textContent = 'Start';
  isTimerRunning = false;
});
