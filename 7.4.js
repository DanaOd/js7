"use strict";

console.log("задача 7.4");

// ЗАДАЧА 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const spanEl = document.getElementById("value");
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
console.log(spanEl, incrementBtnEl, decrementBtnEl);

let counterValue = Number(spanEl.textContent);
console.log(counterValue);
console.log(typeof counterValue);


incrementBtnEl.addEventListener("click",  () => {
    console.log("сработал инкремент");
  counterValue += 1;
  spanEl.textContent = counterValue;
  

  })

decrementBtnEl.addEventListener("click", () => {
    console.log("сработал декремент");
  counterValue -= 1;
    spanEl.textContent = counterValue;


})
  
const increment = () => {
  
 };

// const decrement = () => { };