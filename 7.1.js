"use strict";

console.log("задача 7.1");

// ЗАДАЧА. Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
// (тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

//РЕШЕНИЕ

// 1.  Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Получится 'В списке 3 категории.'.

const ulRef = document.querySelector("#categories");
console.log(ulRef);

const childrenRef = ulRef.children;
console.log(childrenRef);

// let numberofChildren = childrenRef.length - 1;
console.log(`В списке ${childrenRef.length} категорий`);

//2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
// (тега h2) и количество элементов в категории(всех вложенных в него элементов li).


const childsRef = document.querySelectorAll(".item");
console.log(childsRef);
//это у меня массив из 3х элементов ли

const childsTitle = childsRef.firstElementChild;
const childsUl = childsRef.lastElementChild;

console.log(childsTitle);



//ПОПЫТКА НАПИСАТЬ ФУНКЦИЮ
// const showTitleAndSubcategories = childsRef.map(({h2, })

// )
