import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  startBtn: document.querySelector('button'),
};

const formInputValue = {};

const insudeFormInput = event => {
  if (event.target.name === 'delay') {
    formInputValue.delay = Number(event.target.value);
  }
  if (event.target.name === 'step') {
    formInputValue.step = Number(event.target.value);
  }
  if (event.target.name === 'amount') {
    formInputValue.amount = Number(event.target.value);
  }
};

const onClickSubmitBtn = e => {
  e.preventDefault();
  let delay = formInputValue.delay;
  let position = 0;
  for (let i = 0; i < formInputValue.amount; i += 1) {
    delay += formInputValue.step;
    position += 1;
    createPromise(position, delay);
  }
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  });
  promise.catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

refs.form.addEventListener('input', insudeFormInput);
refs.startBtn.addEventListener('click', onClickSubmitBtn);
