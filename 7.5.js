"use strict";

console.log("задача 7.5");

// ЗАДАЧА 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет
// его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");
console.log(inputRef, outputRef);

inputRef.addEventListener("input", event => {
  
  outputRef.textContent = event.currentTarget.value;
  console.log("начали ввод");
})