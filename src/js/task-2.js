'use strict';

/**
 * TODO: Практикум.
 * Угадай число
 */

let random = 0,
  userAnswer = 0,
  counter = 0;

/**
 * позволяет получить случайное число в диапазоне
 * от (min-0.5) до (max+0.5)
 *
 * @param min
 * @param max
 * @returns {number}
 */
function randomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
}

/**
 * запрашивает число у пользователя
 *
 * @returns {number}
 */
function getUserNumber() {
  return Number(prompt('Введите число: ', 1));
}

/**
 * проверяет угадал ли пользователь число или нет
 *
 * @param answerNumber
 * @param randomNumber
 */
function checkResult(answerNumber, randomNumber) {
  while (answerNumber !== randomNumber) {
    console.log('Вы НЕ угадали число ;(');

    if (answerNumber > randomNumber) {
      console.log('Попробуй число по меньше...');
    } else {
      console.log('Попробуй число по больше...');
    }

    answerNumber = getUserNumber();
  }

  userAnswer = answerNumber;
  counter++;
}

/**
 * запускаем игру
 */
function startGame() {
  random = randomNumber(1, 3);
  userAnswer = getUserNumber();

  checkResult(userAnswer, random);

  console.log('Вы угадали число!, это: ' + random);
  console.log('random' + random);
  console.log('userAnswer' + userAnswer);
}

/**/

startGame();

while (counter === 1) {
  const continueGameAnswerUser = confirm('Поиграем еще ?');

  if (continueGameAnswerUser) {
    startGame();
  } else {
    console.log('Игра завершена');
  }

  counter--;
}

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №1
 * Почему код дает именно такие результаты?
 */
/*
let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - тк инкремент стоит перед переменной (сначала плюсуется +1)
d = b++; alert(d);           // 1 - тк инкремент в конце, с начала выведет, потом увеличит
c = (2+ ++a); alert(c);      // 5 - (2 + 1) + (1 + 1) = 5
d = (2+ b++); alert(d);      // 4 - тк b++ отработает после alert
alert(a);                    // 3 - тк ++a, ++a и исходная 1 = 3
alert(b);                    // 3 - аналогично
*/

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №2
 * Чему будет равен x в примере ниже?
 */
/*
var a = 2;
var x = 1 + (a *= 2); // 1 + (2 * 2) = 1 + (4) = 5
*/

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №3
 * Объявить две целочисленные переменные a и b и задать им произвольные
 * начальные значения. Затем написать скрипт, который работает по следующему
 * принципу:
 *
 * - если a и b положительные, вывести их разность;
 * - если а и b отрицательные, вывести их произведение;
 * - если а и b разных знаков, вывести их сумму;
 *
 * ноль можно считать положительным числом.
 */

/**
 * скрипт с арифмитическими действиями
 *
 * @param a
 * @param b
 */
function scriptTask3(a, b) {
  let sum = 0;

  if (a >= 0 && b >= 0) {
    sum = a - b;
  }

  if (a < 0 && b < 0) {
    sum = a + b;
  }

  if ((a < 0 || a >= 0) && (b < 0 || b >= 0)) {
    sum = a + b;
  }

  console.log(sum);
}

let a = 1,
  b = -2;
scriptTask3(a, b);

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * ### 4. Присвоить переменной а значение в
 * промежутке [0..15]. С помощью оператора switch организовать вывод
 * чисел от a до 15.
 */
// берем ф-цию что описана уже выше
let a1 = randomNumber(1, 15);

/**
 * выводим переданное число
 *
 * @param number
 */
function outputNumber(number) {
  console.log(number);
}

switch (a1) {
  case 1: {
    console.log('ха, мелочь....')
    break;
  }

  case 7: {
    console.log('уже, ни че, нормально...');
    break;
  }

  default:
    outputNumber(a1);
}

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * ### 5. Реализовать основные 4 арифметические
 * операции в виде функций с двумя параметрами. Обязательно использовать
 * оператор return.
 */

/**
 * проверяем является ли число - числом, а не строкой итп
 *
 * @param a
 * @param b
 * @returns {boolean}
 */
function checkForIntegerNumber(a, b) {
  return Number.isInteger(a) && Number.isInteger(b);
}

/**
 * сложение
 *
 * @param a
 * @param b
 * @returns {*}
 */
function addition(a, b) {
  if (checkForIntegerNumber(a, b)) {
    return a + b;
  }
}

/**
 * вычитание
 *
 * @param a
 * @param b
 * @returns {number}
 */
function subtraction(a, b) {
  if (checkForIntegerNumber(a, b)) {
    return a - b;
  }
}

/**
 * умножить
 *
 * @param a
 * @param b
 * @returns {number}
 */
function multiplication(a, b) {
  if (checkForIntegerNumber(a, b)) {
    return a * b;
  }
}

/**
 * деление
 *
 * @param a
 * @param b
 * @returns {number}
 */
function division(a, b) {
  if (checkForIntegerNumber(a, b)) {
    return a / b;
  }
}

console.log(addition(5, 4));
console.log(subtraction(5, 4));
console.log(multiplication(5, 4));
console.log(division(5, 4));

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * ### 6. Реализовать функцию с
 * тремя параметрами: function mathOperation(arg1, arg2, operation),
 * где arg1, arg2 – значения аргументов, operation – строка с названием
 * операции. В зависимости от переданного значения операции выполнить
 * одну из арифметических операций (использовать функции из пункта 3) и
 * вернуть полученное значение (использовать switch).
 */

/**
 * выполняет арифметические операции
 *
 * принимает паараметры для operation
 * subtraction
 * multiplication
 * division
 * и addition если operation НЕ задан
 *
 * @param arg1
 * @param arg2
 * @param operation
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'subtraction':
      console.log(subtraction(arg1, arg2));
      break;

    case 'multiplication':
      console.log(multiplication(arg1, arg2));
      break;

    case 'division':
      console.log(division(arg1, arg2));
      break;

    default:
      console.log(addition(arg1, arg2));
  }
}

mathOperation(3, 2, 'multiplication');

console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * ### 7. *Сравнить null и 0.
 * Попробуйте объяснить результат.
 */

/**
 0 - это number
 null - это свободная ячейка в памяти ожидающее какое либо значение
 0 != null
 */

/* ------------------------------------------------------------------------- */

/**
 * ### 8. *С помощью рекурсии организовать
 * функцию возведения числа в степень. Формат: function power(val, pow),
 * где val – заданное число, pow – степень.
 */

/**
 * те ф-ция power будет вызываться столько раз, сколько указано в
 * переменной pow, НО каждую итерацию будет уменьшаться на -1, пока не
 * достигнет 1
 * данная запись аналогична примеру с for, что ниже
 *
 * @param val
 * @param pow
 * @returns {number|*}
 */
function power(val, pow) {
  if (pow === 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

/**/

/**
 * аналог рекурсии через for
 *
 * @param val
 * @param pow
 */
function powerWithUseFor(val, pow) {
  let result = val;

  for (let i = 1; i < pow; i++) {
    result *= val;
  }

  return console.log(result);
}

/**/

/**
 * аналог рекурсии через Math...
 *
 * @param val
 * @param pow
 */
function powerWithUseMath(val, pow) {
  return console.log(Math.pow(val, pow));
}

/**/

/**
 * аналог рекурсии через фитчи ES6
 *
 * @param val
 * @param pow
 */
function powerWithUseES6(val, pow) {
  return console.log(val ** pow);
}

/**/

console.log(power(3, 2)); //9
powerWithUseFor(3, 3); //27
powerWithUseMath(3, 4); //81
powerWithUseES6(3, 5); //243


console.log('----');