import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


inputEl = document.querySelector('datetime-picker'),
startBtn = document.querySelector('[data-start]'),
daysEl = document.querySelector('[data-days]'),
hoursEl = document.querySelector('[data-hours]'),
minutesEl = document.querySelector('[data-minutes]'),
secondsEl = document.querySelector('[data-seconds]'),


startBtn.disabled = true;
let selectedDate = null;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
    onClose(selectedDates) {
        const dateNow = Date.now();
        selectedDate = selectedDates[0].getTime();
        if (dateNow >= selectedDate) {
            return Notiflix.Notify.failure('Please choose a date in the future');
        }
        startBtn.disabled = false;
        return selectedDate;
  },
};


flatpickr(inputEl, options);

startBtn.addEventListener('click', () => {
    const IntervalId = setInterval(() => {
        const timerTimeNow = Date.now();
        const deltaTime = selectedDate - timerTimeNow;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
        
        if (deltaTime <= 1000) {
        clearInterval(IntervalId);
        }
    }, 1000);
    
})


function pad(value) {
    return String(value).padStart(2, 0);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
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