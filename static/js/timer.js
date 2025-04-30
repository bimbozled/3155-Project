console.log("timer.js loaded");
document.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer-display');
  const startBtn = document.getElementById('start-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resetBtn = document.getElementById('reset-btn');
  const timeSelect = document.getElementById('time-select');

  let duration = 0; 
  let timer = 0; 
  let interval = null; 
  let isRunning = false; 

  // Initialize timer with the currently selected value
  function initializeTimer() {
    // Get selected minutes and convert to seconds
    const selectedMinutes = parseInt(timeSelect.value);
    console.log("initializeTimer called with selectedMinutes:", selectedMinutes);
    
    duration = selectedMinutes * 60;
    timer = duration;
    updateDisplay();
  }

  // Update the timer display
  function updateDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    console.log("Display updated to:", timerDisplay.textContent); // Debug log
  }

  // Start the timer
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

  // Pause the timer
  function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
  }

  // Reset the timer to the selected time
  function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    initializeTimer(); // Re-initialize with current selection
  }

  // Event listener for time change
  timeSelect.addEventListener('change', function() {
    console.log("Time selection changed to:", this.value); // Debug log
    
    // If the timer is running, stop it before changing the duration
    if (isRunning) {
      clearInterval(interval);
      isRunning = false;
    }

    // Re-initialize the timer with the new selected time
    initializeTimer();
  });

  // Event listeners for start, pause, and reset buttons
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);

  // Initialize timer on page load
  initializeTimer();
});
