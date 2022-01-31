'use strict';

/**
 * TODO: Закрепляем материал (можно НЕ проверять, для себя...). Задания ниже.
 */

// при клике правой кнопкой мышки
document.addEventListener('contextmenu', (event) => {
  // отключаем дефолтные операции с event
  event.preventDefault();

  // выводим координаты
  console.log('X, Y: ' + event.clientX, event.clientY);

  console.log(event);
});


/**/


// событие при копировании
document.addEventListener('copy', (event) => {
  event.preventDefault();

  // получаем объект как текст который копирует пользователь
  let copiedText = document.getSelection().toString();

  // setData - задать данные для буфера, text/plain - обязательно для старых браузеров
  event.clipboardData.setData(
    'text/plain',
    copiedText + " - текст украден с localhost!");
  console.log(copiedText);
})

// событие при вырезании (вырезание это копирование и удаление)
document.addEventListener('cut', (event) => {
  event.preventDefault();

  let selection = document.getSelection();
  event.clipboardData.setData(
    'text/plain',
    selection.toString().toUpperCase());

  // удалить из документа (!ВАЖНО! - НЕ РАБОТАЕТ В SAFARI!)
  selection.deleteFromDocument();
  console.log(selection);
})


/**/


// событие при изменении ширины экрана
window.addEventListener('resize', (event) => {
  // target - указывает конкретный элемент на котором произошло событие
  console.log(event.target.innerWidth, event.target.innerHeight);
})

// событие при загрузке страницы
window.addEventListener('DOMContentLoaded', (event) => {
  // можем написать тут условие типа
  // if (event.target.innerWidth < 500) {...}
  console.log(event.target);
})

// событие при скролле
window.addEventListener('scroll', (event) => {
  console.log(window.pageYOffset);
})

// blur - событие при покидании елемента
document.querySelector('textarea').addEventListener('blur', (event) => {
  // задать стиль
  event.target.style.cssText = 'outline: 3px solid red;';

  // удалить стиль
  event.target.style.removeProperty('outline');
  console.log('Blur');
})

//события при сбросе формы
// let form = document.querySelector('form');
// form.addEventListener('reset', (event) => {
  // если нет, то очищение формы НЕ произойдет
  // if (!confirm('Уверен?')) {
  //   event.preventDefault();
  // }
// });

// срабатывает только ОДИН раз
// setTimeout()

// срабатывает ВСЕГДА
// setInterval()

// завершает setInterval , принимает ID setInterval
// clearInterval()

// событие при изменении значения input
// inputVar.addEventListener('input', (event) => {
//   spanVar.innerHTML = event.target.value;
// })


// удалить по клику на объект - его родителя / удалить родителя
/*
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    closeClickHandler(event);
  })
});

function closeClickHandler(event) {
  event.currentTarget.parentNode.style.display = 'none';
}
*/


/**/


// пишем плеер

const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTime = document.querySelector('.current-time');

let progressId = null;

playBtn.addEventListener('click', (event) => {
  // стучимся к API нашего видео и вызываем метод play
  video.play();
})

pauseBtn.addEventListener('click', (event) => {
  // стучимся к API нашего видео и вызываем метод play
  video.pause();

  // если на паузе - убиваем setInterval, что бы можно было перетягивать бегунок
  clearInterval(progressId);
})


// делаем прогресс пройденного времени

// при загрузки страницы, видео будет передавать свою длинну в наш бегунок
window.addEventListener('load', (event) => {
  timing.min = 0;
  timing.max = video.duration;
})

// ф-ция для изменения состояния
function changeProgress() {
  timing.value = video.currentTime;
  currentTime.innerText = video.currentTime;
}

// тем самым присваиваем id для нашего setInterval
progressId = setInterval(changeProgress, 100);

// завершаем наш таймер обновления времени, когда видео закончится
video.addEventListener('ended', (event) => {
  clearInterval(progressId)
})

// при изменении бегунка - меняем наше видео
timing.addEventListener('change', (event) => {
  video.currentTime = timing.value;
  video.play();

  // возобнавляем наш interval, что бы бегунок снова бегал при просмотре
  progressId = setInterval(changeProgress, 100);
})

// когда зажимаем наш бегунок и тащим его
timing.addEventListener('mousedown', (event) => {
  video.pause();
  clearInterval(progressId);
})
// end: делаем прогресс пройденного времени


// делаем звук
volume.addEventListener('change', (event) => {
  video.volume = volume.value;
})


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

