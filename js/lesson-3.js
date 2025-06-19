// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => num * num);
console.log("Завдання 1");
console.log("Squares of numbers:");
console.log(squares); // [1, 4, 9, 16, 25]
console.log("-----------------------------------------------------------");
const doubleArr = [];
numbers.forEach((num) => doubleArr.push(num ** 2));
console.log(doubleArr);
console.log("-----------------------------------------------------------");

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];

const allValues = data.flatMap((item) => item.values);
console.log("Завдання 2");
console.log("All values:");
console.log(allValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("-----------------------------------------------------------");

// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
    { name: "John", age: 27 },
    { name: "Jane", age: 31 },
    { name: "Bob", age: 19 },
];
const hasUnderage = people.some((person) => person.age < 20);
console.log("Завдання 3");
console.log("Has underage person:");
console.log(hasUnderage); // true
console.log("-----------------------------------------------------------");

// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbersEven = [2, 4, 6, 8, 10];
const allEven = numbersEven.every((num) => num % 2 === 0);
console.log("Завдання 4");
console.log("Are all numbers even?");
console.log(allEven); // true
console.log("-----------------------------------------------------------");

// Завдання 5:
// Знайдіть перше непарне число

const numbersOdd = [2, 1, 6, 8, 9, 10, 12];
const firstOdd = numbersOdd.find((num) => num % 2 !== 0);
console.log("Завдання 5");
console.log("First odd number:");
console.log(firstOdd); // 1
console.log("-----------------------------------------------------------");

// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];
const sortedNumbers = numbersArray.sort((a, b) => a - b);
console.log("Завдання 6");
console.log("Sorted numbers:");
console.log(sortedNumbers); // [1, 2, 3, 4, 5]
console.log("-----------------------------------------------------------");

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ["banana", "orange", "apple", "pear"];
const sortedArray = stringArray.toSorted();
console.log("Завдання 7");
console.log("Sorted string Array:");
console.log(sortedArray);
console.log("-----------------------------------------------------------");

// Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
    { name: "John", age: 27 },
    { name: "Jane", age: 31 },
    { name: "Bob", age: 19 },
];

const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log("Завдання 8");
console.log("Sorted users:");
console.log(sortedUsers);
console.log("-----------------------------------------------------------");

// Завдання 9:
