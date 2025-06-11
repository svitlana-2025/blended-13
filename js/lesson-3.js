//------------------1 завдання--------------------
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);

console.log(squares); // [1, 4, 9, 16, 25]

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const allValues = data.flatMap(item => item.values);

console.log(allValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const hasUnder20 = people.some(person => person.age < 20);

console.log(hasUnder20); // true

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
const number = [2, 4, 6, 8, 10];

const allEven = number.every(num => num % 2 === 0);

console.log(allEven); // true

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
const Number = [2, 1, 6, 8, 9, 10, 12];

const firstOdd = Number.find(num => num % 2 !== 0);

console.log(firstOdd); // 1

