// Завдання 1:
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ["jazz", "blues"];
styles.push("rock-n-roll");
//styles[1] = "classic";
styles.splice(styles.indexOf("blues"), 1, "classic");
//console.log(styles);
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
//logItems(styles);

// Завдання 2:
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(loginsArray) {
    const username = prompt("Будь ласка, введіть ваше ім'я користувача:");

    if (username === null || username.trim() === "") {
        alert("Введення скасовано або ім'я не введено.");
        return;
    }

    if (loginsArray.includes(username)) {
        alert(`Welcome, ${username}!`);
    } else {
        alert("User not found");
    }
}

//checkLogin(logins);

// Завдання 3:
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
function calculateAverage(...args) {
    if (args.length === 0) {
        return 0; // Якщо немає аргументів, повертаємо 0
    }

    let sum = 0;
    let count = 0;

    for (const arg of args) {
        if (typeof arg === "number") {
            sum += arg;
            count++;
        }
    }

    return count > 0 ? sum / count : 0; // Повертаємо середнє значення або 0, якщо немає чисел
}

// Приклад використання функції calculateAverage
//console.log(calculateAverage(10, 20, 30)); // 20
//console.log(calculateAverage(5, 15, 25, 35)); // 20
//console.log(calculateAverage(1, "a", 3, true, 5)); // 3
//console.log(calculateAverage()); // 0

//Завдання 4:
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
function sumAdjacentNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] + arr[i + 1]);
    }
    return result;
}

// console.log("Завдання 4: [" + sumAdjacentNumbers(someArr) + "]"); // [33, 45, 39, 17, 25, 27, 29]

// Завдання 5:
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return "Sory, it is not an array!";
    }

    if (numbers.length === 0) {
        return "Array is empty!";
    }

    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

//console.log("Завдання 5: [" + findSmallestNumber(numbers) + "]"); // 2

//Завдання 6:
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
function findLongestWord(string) {
    if (typeof string !== "string" || string.trim() === "") {
        return "Input must be a non-empty string!";
    }

    const words = string.split(" ");
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

//console.log(
//    "Завдання 6: [" +
//        findLongestWord("London is the capital of Great Britain") +
//        "]"
//); // 'capital'

// Завдання 7:
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

//console.log("Завдання 7: user = { ");
for (const key of Object.keys(user)) {
    //console.log(`     ${key}: ${user[key]}`);
}
//console.log(" }");

// Завдання 8:
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
};

let sum = 0;
for (const salary of Object.values(salaries)) {
    sum += salary;
}

//console.log("Завдання 8: sum = " + sum); // 1730

// Завдання 9:
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    exist() {
        return this.a !== undefined && this.b !== undefined;
    },
    sum() {
        if (this.exist()) {
            return this.a + this.b;
        }
        return "No such properties";
    },
    mult() {
        if (this.exist()) {
            return this.a * this.b;
        }
        return "No such properties";
    },
};

calculator.read(5, 10);
//console.log("Завдання 9: sum = " + calculator.sum()); // 15
//console.log("Завдання 9: mult = " + calculator.mult()); // 50
calculator.read(5);
//console.log("Завдання 9: sum = " + calculator.sum()); // No such properties

//Завдання 10:
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
    { name: "Яблуко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
    let totalPrice = 0;

    for (const fruit of fruits) {
        if (fruit.name === fruitName) {
            totalPrice += fruit.price * fruit.quantity;
        }
    }

    return totalPrice;
}

// Приклад використання функції calcTotalPrice
console.log(
    "Завдання 10: total price of Banana = " + calcTotalPrice(fruits, "Банан")
); // 1375
