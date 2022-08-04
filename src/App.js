import React from 'react';

function App() {
  function func(arg, event, arg2) {
    console.log(arg, event, arg2); // объект с событием
  }

  return <div>
    <button onClick={event => func('hello', event, 'good bye')}>act</button>
  </div>;
}


// Объект Event в React

// Навешивание событий в JSX

// Вспомогательные функции 

// Тернарный оператор ternary operator
export default App;



// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. 
// С ее помощью выведите на экран сумму цифр числа 123.