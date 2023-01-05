import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  dateDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateClockface({ days, hours, minutes, seconds });
      //   console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

function updateClockface({ days, hours, minutes, seconds }) {
  refs.dateDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataSeconds.textContent = `${seconds}`;
}

// ------- преоборазовуємо цифри 1 = 01.  5=05.
function pad(value) {
  return String(value).padStart(2, '0');
}

// -------  Підрахунок мілісікунди в дні.часи.минути.секунди
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
