import React from 'react';

function App() {
  function getDigitsSum(a) {
    let sum = 0;
    for (let i = 0; i < String(a).length; i++) {
      sum = sum + Number(String(a)[i]);
    }
    return sum;
  }

  return <div>
    {getDigitsSum(12345)}
  </div>
}
// Вспомогательные функции 

// Тернарный оператор ternary operator
export default App;



// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. 
// С ее помощью выведите на экран сумму цифр числа 123.