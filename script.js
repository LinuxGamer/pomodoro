// Get timer elements
const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let countdown;
let isTimerRunning = false;

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
    }
  }, 1000);
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
    startTimer(25); // Set timer duration in minutes
    startButton.textContent = 'Stop';
  }
  isTimerRunning = !isTimerRunning;
});

resetButton.addEventListener('click', () => {
  stopTimer();
  timeDisplay.textContent = '25:00';
  startButton.textContent = 'Start';
  isTimerRunning = false;
});
