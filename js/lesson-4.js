//Blended lesson-4
//Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic
// має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний
// текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р)
// - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і
// дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити
// H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// отримай body елемент і виведи його в консоль
const body = document.querySelector("body");
console.log(body);
// Отримання елемента з id="title"
const title = document.querySelector("#title");
console.log(title);
// Отримання елемента з класом "list"
const list = document.querySelector(".list");
console.log(list);
// Отримання всіх елементів з атрибутом data-topic
const topic = document.querySelectorAll("[data-topic]");
console.log(topic);
// Виведення першого елемента з атрибутом data-topic
const firstTopic = document.querySelector("[data-topic]:first-child");
console.log(firstTopic);
// Отримання останього елемента з атрибутом data-topic
const lastTopic = document.querySelector("[data-topic]:last-child");
console.log(lastTopic);
// Отримання елемента h1
const h1 = document.querySelector("h1");
console.log(h1);
// Отримання сусіднього елемента для h1
const nextElement = h1.nextElementSibling;
console.log(nextElement);
// Отримання всіх заголовків h3
const h3 = document.querySelectorAll("h3");
console.log(h3);
// Додавання класу "active" до кожного заголовка h3
h3.forEach((item) => item.classList.add("active"));
// Отримання елемента li з атрибутом data-topic="navigation"
const navigationItem = document.querySelector('[data-topic="navigation"]');
console.log(navigationItem);
// Додавання атрибуту style з жовтим фоном до елемента
navigationItem.setAttribute("style", "background-color: yellow;");
// Зміна тексту елемента p всередині елемента з атрибутом data-topic="navigation"
const navigationParagraph = navigationItem.querySelector("p");
navigationParagraph.textContent = "Я змінив тут текст!";
// Створення константи currentTopic і пошук елемента з відповідним атрибутом
const currentTopic = "manipulation";
const currentTopicElement = document.querySelector(
    `[data-topic="${currentTopic}"]`
);
console.log(currentTopicElement);
// Зміна кольору фону елементу
currentTopicElement.setAttribute("style", "background-color: blue;");
// Пошук заголовка з класом "completed"
const completedHeader = document.querySelector(".completed");
console.log(completedHeader);
// Видалення елемента li, який містить заголовок з класом "completed"
completedHeader.remove();
// Додавання нового елемента p перед h1
const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
h1.insertAdjacentElement("beforebegin", newParagraph);
// Додавання нового елемента списку в кінець списку
const newListItem = document.createElement("li");
const newListItemHeader = document.createElement("h3");
newListItemHeader.textContent = "Властивість innerHTML";
const newListItemParagraph = document.createElement("p");
newListItemParagraph.textContent =
    "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newListItem.appendChild(newListItemHeader);
newListItem.appendChild(newListItemParagraph);
list.appendChild(newListItem);
// Використання insertAdjacentHTML для додавання нового елемента
const newListItem2 = document.createElement("li");
newListItem2.insertAdjacentHTML(
    "afterbegin",
    `<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`
);
list.appendChild(newListItem2);
// Очищення списку
//list.innerHTML = "";

// --------------------------------- Завдання 2 ---------------------------------
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функція для генерації випадкового числа від 1 до 100
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Створення контейнера div з класом number-container
const numberContainer = document.createElement("div");
numberContainer.classList.add("number-container");
// Додавання контейнера до документу
document.body.appendChild(numberContainer);
// Створення заголовка для нового списку
const addHeader = document.createElement("h3");
// Встановлення тексту заголовку
addHeader.textContent = "Завдання 2: Динамічне створення блоків з числами";
// Додавання заголовку до контейнера
numberContainer.parentNode.insertBefore(addHeader, numberContainer);

// Створення 100 блоків div з класом number
for (let i = 0; i < 100; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = randomNumber();
    // Додавання класу even або odd в залежності від парності числа
    if (number.textContent % 2 === 0) {
        number.classList.add("even");
    } else {
        number.classList.add("odd");
    }
    // Додавання блоку до контейнера
    numberContainer.appendChild(number);
}

// -------------------------- Завдання 3 --------------------------
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector("form");
const input = document.querySelector("input");
const checkbox = document.querySelector("input[type='checkbox']");
const span = document.querySelector("span");

input.addEventListener("input", () => {
    if (input.value.length > 6) {
        input.classList.add("success");
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        input.classList.remove("success");
    }
    // Оновлення тексту в span
    span.textContent = input.value || "Anonymous";
});

form.addEventListener("focus", () => {
    input.style.outline =
        input.value === "" ? "3px solid red" : "3px solid green";
    // if (input.value === "") {
    //     input.style.outline = "3px solid red";
    // } else {
    //     input.style.outline = "3px solid green";
    // }
});

form.addEventListener("blur", () => {
    input.style.outline =
        input.value === "" ? "3px solid red" : "3px solid lime";
    // if (input.value === "") {
    //     input.style.outline = "3px solid red";
    // } else {
    //     input.style.outline = "3px solid lime";
    // }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = input.value.trim();
    const isChecked = checkbox.checked;
    if (userName === "" || !isChecked) {
        alert("Будь ласка, заповніть ім'я та увімкніть чекбокс.");
        return;
    } else {
        const userData = { userName };
        console.log(userData);
        // Очищення інпуту та чекбоксу
        input.value = "";
        checkbox.checked = false;
        span.textContent = "Anonymous";
        // Скидання стилів
        input.style.outline = "";
        input.classList.remove("success", "error");
    }
});

// Додавання початкового тексту в span
span.textContent = "Anonymous";

// -------------------------- Завдання 4 --------------------------
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector(".box");
const decreaseButton = document.querySelector("#decrease");
const increaseButton = document.querySelector("#increase");

decreaseButton.addEventListener("click", () => {
    box.style.width = `${box.offsetWidth - 20}px`;
    box.style.height = `${box.offsetHeight - 20}px`;
});
increaseButton.addEventListener("click", () => {
    box.style.width = `${box.offsetWidth + 20}px`;
    box.style.height = `${box.offsetHeight + 20}px`;
});