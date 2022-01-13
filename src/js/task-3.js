'use strict';

/**
 * в JS все является объектами, а те же массивы – это разновидность объектов
 */
let user = {};
user.name = 'test';
user.age = 30;
user.say = function () {
  alert('hi piece');
}

/**/

let images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
];

/**
 * foreach лучше использовать для простых одномерных массивов
 */
images.forEach(function (element) {
  console.log('element: ' + element);
})

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №1
 * С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

// Получаем количество чисел которые нам надо вывести
let count = 100;

// Определяем базовое число
let currentNumber = 2;

//... до тех пор пока кол-во требуемых для отображения чисел не достигнет нуля
while(count !== 0) {
  if (isNatural(currentNumber)) {
    console.log(currentNumber);
  }

  count--;
  currentNumber++;
}

/**
 * Определяем функцию которая проверяет натурайное ли число или нет
 *
 * @param number
 * @returns {boolean}
 */
function isNatural(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №2 & №3
 * 2:
 * С этого урока начинаем работать с функционалом интернет-магазина.
 * Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
 * стоимости корзины в зависимости от находящихся в ней товаров.
 *
 * 3:
 * Товары в корзине хранятся в массиве. Задачи:
 * - Организовать такой массив для хранения товаров в корзине;
 * - Организовать ф-цию countBasketPrice, которая будет считать стоимость корзины.
 */
let cart = [
  {
    image: 'img.jpeg',
    title: 'test prod',
    deal: 0,
    price: 0
  },
];

// для отладки: ручное добавление
cart.push(
  {
    image: 'img111.jpeg',
    title: 'test111 prod',
    deal: 1,
    price: 500,
  },
);

// для отладки
// alert(cart[0]["title"]);
// alert(cart[1]["title"]);

function randomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
}

function seederCart(val) {
  for (let i = 0; i < val; i++) {
    cart.push(
      {
        image: `img_${i}.jpeg`,
        title: `name_${i}`,
        deal: randomNumber(1, 5),
        price: randomNumber(100, 500),
      },
    );
  }
}

function countBasketPrice(array) {
  let sum = 0;

  // рукописный for за место foreach
  for (let val of array.values()) {
    sum += val['price'];
  }

  return sum;
}

/**/

seederCart(5);
console.log('sum of cart: ' + countBasketPrice(cart));

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №4
 * 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
 * Выглядеть это должно так:
 * for(...){// здесь пусто}
 */
for (let i = 0; i < 9; i++, console.log(i)) {}

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №5
 * 5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как
 * показано на рисунке:
 * x
 * xx
 * xxx
 * xxxx
 * xxxxx
 */
let rows = 5;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j <= i; j = j + 1) {
    console.log(" * ");
  }
  console.log("<br>");
}

