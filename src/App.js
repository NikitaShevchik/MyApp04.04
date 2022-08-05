import React, { useState } from 'react';
import { nanoid } from 'nanoid'; // Библиотека позволяющая генерировать случайные сроки (для айди)

function App() {
  const users = [
    { id: id(), name: 'user1', surn: 'surn1', age: 30 },
    { id: id(), name: 'user2', surn: 'surn2', age: 31 },
    { id: id(), name: 'user3', surn: 'surn3', age: 32 },
  ];

  let [name, setName] = useState()
  console.log(name)

  // State

  function id() {
    return nanoid()
  }
  // Библиотека наноид позволяет генерировать случайный айди который мы добавляем элекентам, 
  // а затем с помощью метода мап мы можем присваивать уникальные айди в массиве с 
  // объектами или просто объектам. По типу баз данный ноСКЛ, где айди является случайно 
  // сгенирированая строка. Коллизий не должно возникнуть. В базах данных типа СКЛ айди это число.

  const rows = users.map(function (item) {
    return <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.surn}</td>
      <td>{item.age}</td>
    </tr>;
  });

  return <table>
    <thead>
      <tr>
        <td>Имя</td>
        <td>Фамилия</td>
        <td>Возраст</td>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
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