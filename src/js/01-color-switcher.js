function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

let intervalId = null;
refs.buttonStop.disabled = true;

refs.buttonStart.addEventListener('click', startChangingcolor);
refs.buttonStop.addEventListener('click', stopChangingColor);


function startChangingcolor(){
    refs.buttonStop.disabled = false;
    refs.buttonStart.disabled = true;

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    
};


function stopChangingColor() {
    refs.buttonStop.disabled = true;
    refs.buttonStart.disabled = false;

    clearInterval(intervalId);  
};