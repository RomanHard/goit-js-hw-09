import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let isActive;
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  dateDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
// --- flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    hendleSelectedDate(selectedDate);
  },
};

const fp = flatpickr('#datetime-picker', { options });

/// - timer обробка

const hendleSelectedDate = selectedDate => {
  let timerId = null;

  const selectedDateUTC = selectedDate.getTime();

  const onStartBtnClick = () => {
    if (isActive) {
      return;
    }
    isActive = true;
    refs.startBtn.setAttribute('disabled', 'disabled');
    timerId = setInterval(() => {
      if (selectedDateUTC > Date.now()) {
        const timerTimeUTC = selectedDateUTC - Date.now();
        updateClockface(timerTimeUTC);
      } else {
        clearInterval(timerId);
        isActive = false;
      }
    }, 1000);
  };

  if (Date.now() > selectedDateUTC) {
    Notiflix.Notify.warning('Please choose a date in the future');
  } else {
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.addEventListener('click', onStartBtnClick);
  }
};

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
function convertMs(mtimerTimeUTCs) {
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
