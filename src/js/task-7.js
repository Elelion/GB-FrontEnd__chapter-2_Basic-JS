'use strict';

/**
 * TODO: Закрепляем материал (можно НЕ проверять, для себя...). Задания ниже.
 */

/**
 * слайдер берем тут - https://swiperjs.com
 * ставим JQ
 * npm i jquery
 */

// получить data-атрибуты
/*
<button data-id="1" data-value="btn1">Кнопка 1</button>
<button data-id="2" data-value="btn2">Кнопка 2</button>
<button data-id="3" data-value="btn3">Кнопка 3</button>
*/

let buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(event.target.dataset.value);
  })
})


/**/


// создание ссылок
let url = "https://picsum.photos/200/300";
let targetAttr = "_blank";
let linkText = "ссылка";

let body = document.querySelector('body');
body.insertAdjacentHTML('beforebegin', `<a href=${url} target=${targetAttr}>${linkText}</a>`);

// или так
for (let i = 1; i <= 3; i++) {
  body.insertAdjacentHTML('beforebegin', `<img src=https://picsum.photos/200/300?random=${i} alt=pic${i}>`);
}


/**/


// воспроизвести звук, где файл notification.mp3 - лежит в корне
let audioElement = new Audio('notification.mp3');
audioElement.play();


/**/


// работа с объектом / объектами см в task-7 / 4 / 1


/**/


// эмуляция загрузки
let div = document.querySelector('div');

function changeProgress(percent) {
  div.style.background = `linear-gradient(90deg, rgba(38,255,162,1) ${percent}%, rgba(255,255,255,1) ${percent}%)`;
}

function beginFill(to, from = 1) {
  let timerId = setInterval(() => {
    if (from < to) {
      changeProgress(from++);
    } else {
      clearInterval(timerId);
    }
  }, 20);
}

beginFill(50);



console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №1
 *
 */

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №2
 *
 */

console.log('----');

/* ------------------------------------------------------------------------- */

