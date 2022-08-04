import React from 'react';

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  let res = arr.map(function (item, index) {
    return <li key={index}>{item}</li>
  })

  return <ul>
    {res}
  </ul>;
}
//Вывод массива объектов в JSX


// Теги в массивах и циклах JSX


// Объект Event в React

// Навешивание событий в JSX

// Вспомогательные функции 

// Тернарный оператор ternary operator
export default App;



// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. 
// С ее помощью выведите на экран сумму цифр числа 123.