import React from 'react';

function App() {
  function alertF(num) {
    alert(num)
  }

  return <div>
    <button onClick={() => alertF(1)}>act1</button>
    <button onClick={() => alertF(2)}>act2</button>
    <button onClick={() => alertF(3)}>act3</button>
  </div>;
}


// Навешивание событий в JSX

// Вспомогательные функции 

// Тернарный оператор ternary operator
export default App;



// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. 
// С ее помощью выведите на экран сумму цифр числа 123.