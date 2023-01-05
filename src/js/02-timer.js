import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  clockface: document.querySelector('.timer'),
};

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      //   console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

function updateClockface({ days, hours, minutes, seconds }) {
  refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
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
