//------------------------1 завдання------------------
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// Створення масиву
let styles = ['jazz', 'blues'];

// Додавання елемента 'rock-n-roll' до кінця масиву
styles.push('rock-n-roll');

// Заміна елемента 'blues' на 'classic'
let index = styles.indexOf('blues');
if (index !== -1) {
  styles[index] = 'classic';
}

// Функція для виводу елементів масиву
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

// Виклик функції з масивом styles
logItems(styles);
//------------------------2 завдання------------------
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
  const userName = prompt("Enter your login:");

  if (array.includes(userName)) {
    alert(`Welcome, ${userName}!`);
  } else {
    alert("User not found");
  }
}

// Приклад використання
const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);

//------------------------3 завдання------------------
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage(...args) {
  // Фільтруємо тільки числові значення
  const numbers = args.filter(arg => typeof arg === 'number' && !isNaN(arg));

  // Перевірка: чи є хоч одне число
  if (numbers.length === 0) {
    return 'No valid numbers provided.';
  }

  // Обчислення суми та середнього значення
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return average;
}

// Приклади виклику
console.log(calculateAverage(10, 20, '30', null, 40)); // Виведе: 23.333...
console.log(calculateAverage('a', true, undefined));   // Виведе: "No valid numbers provided."

//------------------------4 завдання------------------
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function sumAdjacent(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }

  return result;
}

// Приклад використання
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
const newArr = sumAdjacent(someArr);
console.log(newArr); // [33, 45, 39, 17, 25, 27, 29]

//------------------------5 завдання------------------
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return 'Sorry, it is not an array!';
  }

  if (numbers.length === 0) {
    return 'Array is empty.';
  }

  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number' && numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
}

// Приклад використання
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers)); // Виведе: 2
console.log(findSmallestNumber('not an array')); // Виведе: 'Sorry, it is not an array!'

//------------------------6 завдання------------------
// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Приклад використання
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//------------------------7 завдання------------------
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

// 1. Додаємо поле mood
user.mood = 'happy';

// 2. Змінюємо hobby
user.hobby = 'skydiving';

// 3. Змінюємо premium
user.premium = false;

// 4. Виводимо ключі та значення у форматі '<ключ>:<значення>'
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

//------------------------8 завдання------------------
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;

for (const salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum); // 1730

//------------------------9 завдання------------------
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
const calculator = {
  a: null,
  b: null,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.a !== null && this.b !== null;
  },

  sum() {
    if (!this.exist()) {
      return 'No such propeties';
    }
    return this.a + this.b;
  },

  mult() {
    if (!this.exist()) {
      return 'No such propeties';
    }
    return this.a * this.b;
  }
};

// Приклад використання:
calculator.read(5, 10);
console.log(calculator.sum());  // 15
console.log(calculator.mult()); // 50

// Якщо не викликати read перед сумою або множенням:
const emptyCalc = {
  ...calculator,
  a: null,
  b: null
};
console.log(emptyCalc.sum()); // 'No such propeties'

//------------------------10 завдання------------------
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
function calcTotalPrice(fruits, fruitName) {
  let total = 0;

  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      total += fruit.price * fruit.quantity;
    }
  }

  return total;
}

// Приклад використання
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

console.log(calcTotalPrice(fruits, "Банан")); // 1375
