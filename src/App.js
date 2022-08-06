import React, { useState } from 'react';
import { nanoid } from 'nanoid'; // Библиотека позволяющая генерировать случайные сроки (для айди)

function App1() {
  const users = [
    { id: id(), name: 'user1', surn: 'surn1', age: 30 },
    { id: id(), name: 'user2', surn: 'surn2', age: 31 },
    { id: id(), name: 'user3', surn: 'surn3', age: 32 },
  ];

  let [name, setName] = useState('Nik'); // деструктиризация
  let [cost, setCost] = useState('1000');
  let [inCart, setInCart] = useState(false) // логический стейт
  let [count, setCount] = useState(0)

  let [user, setUser] = useState('Nikita');
  let [surn, setSurn] = useState('Shevchik');
  let [age, setAge] = useState(22);
  let [ban, setBan] = useState(false)

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

  // реактивность - изменение по нажатию на кнопку (грубо говоря)
  return <div>
    <div>
      <p>{user}</p>
      <p>{surn}</p>
      <p>{age}</p>
      <p>{!ban ? 'Забаненый' : 'Не забаненый'}</p>
      <button onClick={() => setUser('Oleg')}>Поменять имя</button>
      <button onClick={() => setSurn('Olegov')}>Поменять фамильку</button>
      <button onClick={() => setAge(age + 1)}>Увелить возраст</button>
      <button onClick={() => setAge(age - 1)}>Уменьшить возраст</button>
      <button disabled={ban} onClick={() => setBan(!ban)}>Разбанить</button>
      <button disabled={!ban} onClick={() => setBan(!ban)}>Забанить</button>
    </div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setCount(count + 10)}>+10</button>
    <button onClick={() => setCount(count + 100)}>+100</button>
    <button onClick={() => setCount(count + 1000)}>+1000</button>
    <button onClick={() => setCount(count + 10000)}>+10000</button>
    <button onClick={() => setCount(count + 100000)}>+100000</button>
    <button onClick={() => setCount(count + 1000000)}>+1000000</button>
    <p>{name}</p>
    <p>{cost}</p>
    <button onClick={() => setName('Мария')}>Изменить имя</button>
    <button onClick={() => setCost('100$ час')}>Изменить цену</button>
    <p>{inCart ? '1 товар в корзине' : 'Корзина пуста'}</p>
    <button onClick={() => setInCart(!inCart)}>{!inCart ? 'Добавить в корзину' : 'Убрать из корзины'}</button>
  </div>
}
// Вывод массива объектов в виде HTML таблицы

//Вывод массива объектов в JSX

// Теги в массивах и циклах JSX

// Объект Event в React

// Навешивание событий в JSX

// Вспомогательные функции 

// Тернарный оператор ternary operator


// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. 
// С ее помощью выведите на экран сумму цифр числа 123.



// Работа с инпутами в React

// Изменение данных при выводе

function App2() {
  let [value, setValue] = useState('');
  let [value2, setValue2] = useState('');
  let [value3, setValue3] = useState('');
  let [value4, setValue4] = useState('');
  let [value5, setValue5] = useState('');

  // function celsi() {
  //   return ((value - 32) / 1.8).toFixed(1);
  // }

  return <div>
    <p>Введите 5 чисел</p>
    <input value={value} onChange={(event) => setValue(event.target.value)} />
    <input value={value2} onChange={(event) => setValue2(event.target.value)} />
    <input value={value3} onChange={(event) => setValue3(event.target.value)} />
    <input value={value4} onChange={(event) => setValue4(event.target.value)} />
    <input value={value5} onChange={(event) => setValue5(event.target.value)} />
    <p>Среднее арифметическое: {(Number(value) + Number(value2) + Number(value3) + Number(value4) + Number(value5)) / 5}</p>
  </div>;
}

// Обработка данных формы по нажатию на кнопку в React




export default App2;