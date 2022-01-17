'use strict';

/**
 * TODO: Закрепляем материал (можно НЕ проверять, для себя...). Задания ниже.
 */

/**
 * DOM - хранится в document
 */
function my_initiation() {
  let content2 = document.getElementById("div2");
  content2.innerHTML = "Совершенно новая информация";
}

// onload срабатывает после того, как скрипт был загружен и выполнен.
Window.onload = my_initiation();


/**/


// создать элемент

// указываем элемент к которому привяжем наш создающий элемент
let div2 = document.getElementById("div2");

// создаем элемент
let div = document.createElement('div');
div.className = 'my_create_div';
div.innerHTML = '<h1>creating div</h1>';

// appendChild(elem) — добавляет элемент elem в конец дочерних элементов parentElem
div2.appendChild(div);


/**/


// изменить стиль
div2.style.color = 'blue';

// получить класс элемента
let classValue = div2.classList;
console.log(classValue);


/**/


let elem = document.querySelector("#clock")
console.log(elem.classList); // DOMTokenList ["example_for", "you"]
elem.classList.add("ok", "understand"); // Добавим классы
console.log(elem.classList); // DOMTokenList ["example", "for", "you", "ok", "understand"]
elem.classList.toggle("you"); // Переключим классы
elem.classList.toggle("he");
console.log(elem.classList); // DOMTokenList ["example", "for", "ok", "understand", "he"]

// Проверим класс
console.log(elem.classList.contains("example")); // true
console.log(elem.classList.contains("lol"));           // false

// И удалим классы
elem.classList.remove("example", "for", "understand", "he");
console.log(elem.classList);


/**/


/**
 * console.log
 * console.dir
 *
 * log выводит только представление toString, тогда как dir выводит
 * навигационное дерево.
 */


/**/


let test = document.getElementById('ttt');

// Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
console.log(test.classList);
console.log(test);


/**/


// поиск по атрибутам
let search = document.querySelector('[aria-valuenow="50"]');
console.log(search);


/**/


// получить все input из формы с action="/feedback"
let inputs = document.querySelectorAll('form[action="/feedback"] input')
console.log(inputs);

/**
 * работа с foreach
 *
 * принимает:
 * item – очередной элемент массива.
 * i – его номер.
 * arr – массив, который перебирается.
 */
inputs.forEach(function (input) {
  console.log(input.type);
})

// или

inputs.forEach((input) => console.log(input.type));


/**/


// используется редко - вывести все формы
let forms = document.forms;
console.log(forms);

// получить все картинки с текущего документа <img...>
let images = document.images;
console.log(images);

// получить <a> у которых есть href, если href нет то они не попадут
let links = document.links;
console.log(links);


/**/


// получить елемент
let title = document.querySelector('.mt-0');

// получить родительский тег, те тег в котором находится наш title
console.log(title.parentNode);

// возвращает дочерние элементы каждого элемента в наборе совпавших элементов
console.log(title.children);

// подробнее: https://learn.javascript.ru/traversing-dom


/**/


// создаем тег <p></p>
let paragraph = document.createElement('p');

// размещаем наш тег ПЕРЕД закрывающим тегом body
document.body.appendChild(paragraph);

// размещаем наш тег ПЕРЕД кнопкой
document.body.insertBefore(paragraph, document.querySelector('button'));

// задаем текст нашему элементу
paragraph.innerHTML = 'Hello world!!!';
console.log(paragraph);

// удаляем наш элемент
let elem1 = document.querySelector('.btn-outline-dark');
elem1.remove();

// вставляем span до - перед - после итп кнопки
/**
 * beforebegin
 * <button>
 *
 * afterbegin
 *    кнопка
 * beforeend
 *
 * </button>
 * afterend
 */
let test1 = document.querySelector('button');
test1.insertAdjacentHTML('beforebegin', '<span>test</span>');


/**/


let cl = document.querySelector('button');
// получить имя класса у элемента
console.log(cl.className);

// добавить класс
cl.classList.add('new__class');

// удалить класс
cl.classList.remove('new__class');

// ЕСЛИ заданного класса НЕТ, то он добавится, ЕСЛИ класс уже есть, то он удалится
cl.classList.toggle('new__class');



// находим элемент по атрибуту и выводим его св-ва
let dismiss = document.querySelector('[data-dismiss="modal"]');
console.log(dismiss.getAttribute('data-dismiss'));
console.log(dismiss.getAttribute('aria-label'));

// добавить атрибут
let dismissed = document.querySelector('h1');
dismissed.setAttribute('data-one', 'один');
dismissed.setAttribute('data-two', 'два');

// изменить  шв
let titles = document.querySelector('#title');
titles.id = 'new__id';

/**/


// вешаем событие на найденную кнопку - по клику
let btnEvent = document.querySelector('button');
btnEvent.addEventListener('click', function () {
  alert('111');
});

// проверяем есть ли класс у кнопки (true / false)
btnEvent.classList.contains('class__name');

// запустится, когда документ загрузится, так что он увидит все элементы
function ready() {
  alert('DOM готов');
}
document.addEventListener("DOMContentLoaded", ready);

// браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
window.onload = function() {
  alert('Страница загружена');
}




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

