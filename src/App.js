import React from 'react';

function App() {
  const prods = [
    { id: 1, name: 'product1', cost: 100 },
    { id: 2, name: 'product2', cost: 200 },
    { id: 3, name: 'product3', cost: 300 },
  ];

  const res = prods.map(function (item) {
    return <li key={item.id}>{item.name} {item.cost}$</li>
  })

  return <ul>
    {res}
  </ul>;
}
// Вывод массива объектов в виде HTML таблицы

//Вывод массива объектов в JSX

// Теги в массивах и циклах JSX

// Объект Event в React

// Навешивание событий в JSX

// Вспомогательные функции 

// Тернарный оператор ternary operator
export default App;



// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. 
// С ее помощью выведите на экран сумму цифр числа 123.