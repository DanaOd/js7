"use strict";

console.log("задача 7.6");

// ЗАДАЧА 6
// Напиши скрипт, который бы при потере фокуса на инпуте, 
//   проверял его содержимое на правильное количество символов.

//   Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid

const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", event => {
  const dataLength = Number(inputRef.dataset.length);
  console.log(length, typeof(length));
  
  if (event.currentTarget.value.length === dataLength) {
    inputRef.classList.add(".valid");
    console.log("введено 6 символов");
  }
  else {
    console.log("введено неверное число символов");
  inputRef.classList.add(".invalid");
  }
})