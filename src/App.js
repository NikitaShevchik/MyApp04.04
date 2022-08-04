import React from 'react';

function App() {
  const isAuth = false;

  return <div>
    {!isAuth && <p>Пожалуйста авторизируйтесь</p>}
  </div>;
}


// Тернарный оператор ternary operator
export default App;
