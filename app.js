const salutContainer = document.querySelector('.salut');
const timeContainer = document.querySelector('.time');
const dayContainer = document.querySelector('.day');
const spinnerLoading = document.querySelector('.loading');

const showDay = () => {
  const date = new Date();
  const weeksDay = date.getDay();
  const weeksDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

  const day = weeksDays[weeksDay];
  dayContainer.textContent = `${day}...`;
}

const showTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  timeContainer.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

}

const showSalut = () => {
  const date = new Date();
  const hours = date.getHours();
  const saluts = {
    morning: 'Bom dia!',
    afternoon: 'Boa Tarde!',
    night: 'Feliz Noite!'
  }

  if(hours <= 11){
    salutContainer.textContent = saluts.morning;
  } if(hours <= 17){
    salutContainer.textContent = saluts.afternoon;
  } if(hours <= 23){
    salutContainer.textContent = saluts.night;
  } 
}

showDay();

setTimeout(()=>{
spinnerLoading.remove();
}, 1000)

setInterval(showTime, 1000)
showSalut();
