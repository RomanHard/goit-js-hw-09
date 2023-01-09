import Notiflix from 'notiflix';

const ref = {
  delay: document.querySelector('label[name]'),
};
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
