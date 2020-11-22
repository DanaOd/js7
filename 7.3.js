"use strict";

console.log("задача 7.3");

// ЗАДАЧА. Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//РЕШЕНИЕ

// 1. найду куда вставлять по итогу

const ulRef = document.querySelector("#gallery");
console.log(ulRef);

// 2. сделаю коллбек

const addImageToGalery = ({ url, alt }) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item__style");

  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;

  listItem.appendChild(image);
  console.log(listItem);

  return listItem;
}

// 3. сделаю map - переберу коллекцию картинок по коллбеку 

// const imagesList = images.map(addImageToGalery);

// console.log(imagesList);

// imagesList.forEach((item) => {
//   ulRef.append(item);
// });




// 4. используй шаблонные строки и insertAdjacentHTML() - добавлю в DOM за одну операцию вставки



const ul = document.querySelector("#gallery");

const listInnerText = images.map(({ alt, url }) => {
  return `
    <li>
      <img src=${url} alt=${alt} />
    </li>
  `;
}).join("\n");

ul.insertAdjacentHTML('afterend', listInnerText);

// console.log(ul, listInnerText)