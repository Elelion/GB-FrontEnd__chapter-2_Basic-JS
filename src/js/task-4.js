'use strict';

/**
 * TODO: Закрепляем материал (можно НЕ проверять, для себя...). Задания ниже.
 */

/**
 * создаем объект
 *
 * Переменная будет содержать не сам объект, а указатель
 * на его область в памяти.
 */
let car = {
  make: "Audi",
  model: "A5",
  year: 2015,
  color: "red",
  passengers: 2,
  power: 225,
  odometer: 0,
  engineIsStarted: false,
  startEngine: function() {
    /**
     * В методах переменные engineIsStarted и odometer не являются локальными
     * или глобальными — это свойства объекта car. Именно для них в
     * JavaScript существует ключевое слово this: оно обозначает текущий
     * объект, с которым ведется работа.
     *
     * Можно представлять this как переменную, которая указывает на объект,
     * метод которого был только что вызван. Если вызвать метод startEngine
     * объекта car, то this будет указывать на объект car. При вызове любого
     * метода можно быть уверенными, что this в теле метода будет указывать
     * на объект, метод которого был вызван.

     */
    this.engineIsStarted = true;
  },
  stopEngine: function() {
    this.engineIsStarted = false;
  },
  haveRoadTrip: function(distance) {
    if (this.engineIsStarted) {
      this.odometer += distance;
    } else {
      alert("Сначала запустите двигатель!");
    }
  }
};

console.log(car.make);
car.startEngine();

// переопределяем св-во обхекта
car.power = 300;
console.log(car.power);

// создаем новое св-во объекта
car.odometer = 100;

/**
 * уничтожить св-во и его значение
 * Сам delete возвращает true при успешном удалении свойства,
 * а false вернется только в случае, когда свойство не было удалено.
 */
delete car.odometer;

for (let prop in car) {
  // prop - покажет название ключей, а car[prop] покажет их содержимое
  // console.log(prop + ": " + car[prop]);
}


/**/


// использование in
/*
// Массивы
let trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // true
3 in trees        // true
6 in trees        // false
"bay" in trees    // false (вы должны указать индекс элемента в массиве, а не значение в этом индексе)
"length" in trees // true (length является свойством Array)

// Уже существующие объекты
"PI" in Math      // true

// Пользовательские объекты
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // true
"model" in mycar // true
 */


/**/


// использование прототипов

// создаем ф-цию для работы с прототипом, см ниже
let carFunc = {
  start() {
    console.log('start');
  },

  stop() {
    console.log('stop');
  }
}

// ф-ция в виде класса
function Car(color, name, price) {
  this.color = color;
  this.name = name;
  this.price = price;

  this.move = function () {
    alert(this.name);
  };
}

// присваиваем методы ф-ции carFunc к ф-ции Car через прототип
Car.prototype = carFunc;

// затереть наследуемые методы
// Car.prototype = {};

// определить метод, если он не определен
// Car.prototype.move = function () { alert('test'); }

/**
 * при обращении к new Car, мы обращаемся не просто к ф-ции Car, а обращаемся
 * куда то выше, а именно к прототипу. Когда мы обращаемся к какому либо св-ву объекта
 * интерплитатор прогоняет всего св-ва объекта, и если там его не находит, то
 * стучится в прототип конструктора нашего объекта. И если там нет, то идет дальше
 * в прототип глобального объекта JS (все объекты создаются через г.объект в JS)
 *
 * __proto__ - готовый объект (когда он уже сгенерировался)
 * prototype - когда мы записываем какие то св-ва в сам конструктор
 *
 * свойство __proto__, которое является производным от свойства
 * prototype конструктора
 *
 * подробнее тут:
 * https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes
 */
let car1 = new Car('green', 'BMW', '500');
console.log(car1);

// вызываем метод унаследованный через протоип
car1.start();
car1.stop();


/**/


function sayName() {
  console.log(this.name);
}

// будет ошибка, тк тут мы еще не связали this и user
//sayName();

let user = {
  name: 'alex',
};

/**
 * Метод call() вызывает функцию с указанным значением this и индивидуально
 * предоставленными аргументами.
 *
 * т.е.
 * говорим что, sayName будет считать своим this объект user
 * те мы их как бы связываем
 */
sayName.call(user);


/**/


// пишем наш первый класс
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.incrementAge();
  }

  incrementAge() {
    //console.log(this.age +1);
    return this.age + 1;
  }
}

class Personal extends Person {
  constructor(name, age, gender, location, hobby) {
    // передаем в класс родителя
    super(name, age, gender);

    this.location = location;
    this.hobby = hobby;
  }

  sayName() {
    console.log(`my name is : ${this.name}`)
  }
}

let man1 = new Personal('Artem', 24, 'man');
console.log(man1);
console.log(man1.incrementAge());
man1.sayName();



console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №1
 * Написать функцию, преобразующую число в объект. Передавая на вход
 * число от 0 до 999, надо получить на выходе объект, в котором в
 * соответствующих свойствах описаны единицы, десятки и сотни.
 * Например, для числа 245 надо получить следующий
 * объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
 * Если число превышает 999, необходимо выдать соответствующее
 * сообщение с помощью console.log и вернуть пустой объект.
 */
function numberToObject(num) {
  let max = 999;

  if (num <= max) {
    let digit = {
      units: 0,
      tens: 0,
      hundreds: 0
    };

    if (num <= 9) {
      digit.units = num;
    } else {
      if (num <= max) {
        digit.units = Math.floor(num % 10);
        digit.tens = Math.floor(num / 10 % 10);
        digit.hundreds = Math.floor(num / 100 % 10);
      } else {
        console.log('Вы ввели число за диапазоном 0 - 999');
      }
    }

    console.log(digit);
  } else {
    console.log('Число слишком большое...');
    return null;
  }
}

//numberToObject(prompt('Введите число от 1 до 999: ', 1))
console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №2
 * Продолжить работу с интернет-магазином:
 * В прошлом домашнем задании вы реализовали корзину на базе массивов.
 * Какими объектами можно заменить их элементы?
 * Реализуйте такие объекты.
 * Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */
let cart = {
  0: {
    image: 'img0.jpeg',
    title: 'test prod',
    deal: 0,
    price: 0
  },

  'test': {
    image: 'img1.jpeg',
    title: 'test prod',
    deal: 0,
    price: 0
  }
};

// для отладки
// console.log('basic object: ');
// console.log(cart);
// console.log(cart['test']);

/**/

function randomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
}

function seederCart(val) {
  for (let i = 0; i < val; i++) {
    if (cart[i] === i) {
      console.log('id is exist: ' + i);
    } else {
      cart[i] = {
          image: `img_${i}.jpeg`,
          title: `name_${i}`,
          deal: randomNumber(1, 5),
          price: randomNumber(100, 500)
      }
    }
  }
}

function countBasketPrice(obj) {
  let sum = 0;

  for (let prop in obj) {
    sum += obj[prop]['price'];
  }

  return sum;
}

/**/

seederCart(5);
console.log('sum of cart: ' + countBasketPrice(cart));
console.log('----');

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание №3
 * * Подумать над глобальными сущностями. К примеру, сущность «Продукт»
 * в интернет-магазине актуальна не только для корзины, но и для каталога.
 * Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру
 * для различных модулей сайта, но в разных местах давал возможность
 * вызывать разные методы.
 */
let product = {
  image: 'img0.jpeg',
  title: 'test prod',
  description: 'desc...',
  fullDescription: 'full desc...',
  price: 0,
  type: function(format, name) {
    return format === 'img' ? 'img' : 'video';
  },
}

console.log(product.type('img'));

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание из портала GB №1.1
 * (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6
 * (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
 * конструктор Product, который принимает параметры name и price, сохраните их как
 * свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
 * который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
 * не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
 * (как объект transport в уроке).
 */
function Product(name, price) {
  this.name = name;
  this.price = price;

  // вариант 1
  /*
  this.make25PercentDiscount = function () {
    return this.price - (this.price * 25 / 100);
  }
  */
}

// вариант 2
let make25PercentDiscount = {
  Percent() {
    return this.price - (this.price * 25 / 100);
  }
}

// для варианта 2
Product.prototype = make25PercentDiscount;

let prod = new Product('test', 500);
console.log(`prod: ${prod}`);
// console.log(prod.make25PercentDiscount())
console.log(prod.Percent());

/**/

class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    console.log(this.make25PercentDiscount());
  }

  make25PercentDiscount() {
    return this.price - (this.price * 25 / 100);
  }
}

let pr = new Products('ttt', 1000);
console.log(`pr: ${pr}`);

/* ------------------------------------------------------------------------- */

/**
 * TODO: Задание из портала GB №1.2
 * (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по
 * аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
 *
 * а) конструктор Post, который принимает параметры author, text, date и сохраняет
 * их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
 * принимать текст и записывать его в свойство text объекта.
 *
 * б) конструктор AttachedPost, который принимает параметры author, text, date.
 * Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
 * дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
 * highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
 * Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
 * который будет назначать свойству highlighted значение true.
 */

class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    return this.text = text;
  }
}

class AttachedPost extends Post {
  constructor(author, text, date, highlighted = false) {
    super(author, text, date);

    this.highlighted = highlighted;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let post = new Post('Human', 'hello world', '13.01.2022');
console.log(post);
post.edit('there is no cow level');
console.log(post);

let att = new AttachedPost('werewoolf', 'GRrrr...', '01.01.2011');
console.log(att);
att.makeTextHighlighted();
console.log(att);