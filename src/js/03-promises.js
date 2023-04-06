import Notiflix from 'notiflix'

const formEl = document.querySelector('form');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let inDelay = Number(formEl.delay.value);
  let promiseId = 1;
  const amount = Number(formEl.amount.value);
  
  while (promiseId <= amount) {
    createPromise(promiseId, inDelay)
      .then(x => Notiflix.Notify.success(x))
      .catch(e => Notiflix.Notify.failure(e));
    
    inDelay += Number(formEl.step.value);
    promiseId += 1;
  }
  
})

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    console.log('Promises are generating');

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  }); 
}

