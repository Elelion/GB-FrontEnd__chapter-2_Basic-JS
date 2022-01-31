'use strict';

const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/*
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let text = document.querySelector('.text');
let links = document.querySelectorAll('.nav-link');

links.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    clickHandler(event, index);
  })
})

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event
 */
function clickHandler(event, index) {
  // здесь вызывайте changeText и changeActiveClass, и передавайте им объект события.

  changeActiveClass(event);
  changeText(event, index);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
function changeActiveClass(event) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }

  event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
function changeText(event, index) {
  text.innerHTML = texts[`text${index + 1}`];
}