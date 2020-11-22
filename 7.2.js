"use strict";

console.log("задача 7.2");

// ЗАДАЧА. Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//РЕШЕНИЕ

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);

const ListOfIngredients = ingredients.map(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    console.log(li);
    return li;
}
)

ingredientsRef.append(...ListOfIngredients);

//РЕШЕНИЕ 2 - прячем в функцию создание:

// const makeListOfIngredients = ingredient => {
//   return ingredients.map(ingredient => {
//     const li = document.createElement("li");
//     li.textContent = ingredient;
//     return li;
// }
// )
// }

// const ListOfIngredients = makeListOfIngredients(ingredients);

// ingredientsRef.append(...ListOfIngredients);