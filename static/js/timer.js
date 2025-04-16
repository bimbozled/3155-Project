let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let duration = 25 * 60; // 25 minutes
let timer = duration;
let interval = null;
let isRunning = false;

function updateDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  let progress = (timer / duration) * 100; 
  document.querySelector(".fish-img").style.opacity = progress / 100;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      if (timer > 0) {
        timer--;
        updateDisplay();
      } else {
        clearInterval(interval);
        isRunning = false;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(interval);
  timer = duration;
  updateDisplay();
  isRunning = false;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
