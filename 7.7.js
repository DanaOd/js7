"use strict";

console.log("задача 7.7");

// ЗАДАЧА 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const rangeRef = document.getElementById("font-size-control");
const targetSpan = document.getElementById("text");


const onInput = event => {
  targetSpan.style.fontSize = `${event.currentTarget.value}px`;
  console.log(targetSpan.style.fontSize);
}

rangeRef.addEventListener("input", onInput);


