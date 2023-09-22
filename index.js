const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const modal = document.getElementById('myModal');
const modalConfirm = document.getElementById('modal-confirm');
const modalCancel = document.getElementById('modal-cancel');

let hrs = min = sec = ms = 0,
  startTimer;

btnStart.addEventListener('click', () => {
  btnStart.classList.add('start-active');
  btnStop.classList.remove('stop-active');

  startTimer = setInterval(() => {
    ms++; // ms=ms+1;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateDisplay();
  }, 10);

  // Show an alert when the timer starts
  alert('Timer started!');
});

btnStop.addEventListener('click', () => {
  // Show the modal when the "Stop" button is clicked
  modal.style.display = 'block';

  // Handle the "Yes" button in the modal
  modalConfirm.addEventListener('click', () => {
    clearInterval(startTimer);
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
    modal.style.display = 'none';
  });

  // Handle the "Cancel" button in the modal
  modalCancel.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

btnReset.addEventListener('click', () => {
  // Use the confirm dialog for reset confirmation
  const isConfirmed = confirm('Are you sure you want to reset the timer?');
  if (isConfirmed) {
    hrs = min = sec = ms = 0;
    clearInterval(startTimer);
    updateDisplay();
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
  }
});

function updateDisplay() {
  // Formatted Display
  phrs = hrs < 10 ? '0' + hrs : hrs;
  pmin = min < 10 ? '0' + min : min;
  psec = sec < 10 ? '0' + sec : sec;
  pms = ms < 10 ? '0' + ms : ms;
  // Output
  document.querySelector('.hrs').innerText = phrs;
  document.querySelector('.min').innerText = pmin;
  document.querySelector('.sec').innerText = psec;
  document.querySelector('.ms').innerText = pms;
}

