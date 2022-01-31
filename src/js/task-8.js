'use strict';
/*jshint esversion: 6 */

/**
 * TODO: Закрепляем материал (можно НЕ проверять, для себя...). Задания ниже.
 */


/**
 * 'use strict'; - фиксит большинство проблем в JS, тк JS изначально не
 * расчитывал на то, что бы быть таким популярным, и не расчитывался на то
 * что в нем происходит сейчас, разработчики пофиксили эти проблемы путем
 * 'use strict'
 *
 * Строгий режим вносит в семантику JavaScript некоторые изменения.
 * Он не даёт системе закрывать глаза на ошибки, выдавая соответствующие
 * исключения. Это приводит к остановке выполнения программ.
 */

let a = 10;

function showA() {
  console.log(this.a);
}

/**
 * выведет undefind или ошибку тк this будет обращатся к локальной зоне видимости
 * ф-ции родителя. А тк let a имеет зону видимости window, то в showA() мы ее
 * не увидим
 */
//showA();


/**/


/**
 * this - является ссылкой на объект в нутри которого находится метод
 */


/**/


function showName() {
  console.log('this: ' + this); // undefined
  console.log('userName: ' + this.userName); // TypeError: undefined is not an object (evaluating 'this.userName')
}

const user1 = {
  userName: 'Alex',
}

//showName(user1); // error
// call - передает контекст для this
showName.call(user1); // this: [object Object] + userName: Alex

//**

function addInfo(age, position) {
  this.age = age;
  this.position = position;
}

let user = {
  userName: 'test',
}

// через call дополняем наш объект user
addInfo.call(user, 30, 'msk');
console.log(user); // {userName: "test", age: 30, position: "msk"}

// apply - то же самое что и call, только аргументы передаются в виде массива
addInfo.apply(user, [30, 'ptr']);
console.log(user); // {userName: "test", age: 30, position: "ptr"}


/**/


let user2 = {
  userName: 'John',
  sayHello() {
    console.log('this: ' + this);
    console.log('this.userName: ' + this.userName);
  }
}

console.log('user2.userName: ' + user2.userName); // John
user2.sayHello(); // John

/**
 * setTimeout - находится в window, а тк мы передали метод sayHello как callback
 * то this у sayHello - станет не объект user2, а объект window
 * а тк в window нету userName, то будет - this.userName: undefined
 *
 * а если мы забиндим наш user2 то все будет как надо
 * bind(указываем от чего привязываем контекст)
 */
console.log('setTimeout: ');
setTimeout(user2.sayHello, 1000);
setTimeout(user2.sayHello.bind(user2), 2000);


/**/


let user3 = {
  userName: 'John',

  /**
   * this - будет window, тк setTimeout имеет свою область видимости и находится
   * в window
   */
  sayHello() {
    setTimeout(function () {
      console.log('setTimeout.this: ' + this);
      console.log('setTimeout.this.userName: ' + this.userName);
    }, 1000);
  },

  /**
   * this - уже будет наш userName, тк стрелочная ф-ция меняет контекст у this
   * те как бы биндит его к текущему контексту, и пока мы не переопределим
   * контекст через bind, контекст будет определен к текущему контексту
   */
  sayArrayFunc() {
    setTimeout( () => {
      console.log('setTimeout.arr.this: ' + this);
      console.log('setTimeout.arr.this.userName: ' + this.userName);
    }, 1000);
  }
}

console.log('user3: ');
user3.sayHello();


user3.sayArrayFunc();


/**/


/**
 * Колбэк-функция (или обратный вызов) - это функция, переданная в другую
 * функцию в качестве аргумента, которая затем вызывается по завершению
 * какого-либо действия.
 */
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  let name = prompt('Please enter your name.');
  return callback(name);
}

processUserInput(greeting);


/**/


// анонимная ф-ция, вызывается сразу
(function () {
  console.log('anonimus func');
})();
