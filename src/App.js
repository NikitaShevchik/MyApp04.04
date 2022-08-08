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
  let today = (new Date()).toISOString().slice(0, 10);
  let [value, setValue] = useState(today);
  let [value2, setValue2] = useState(today);
  let [result, setResult] = useState('');

  // function celsi() {
  //   return ((value - 32) / 1.8).toFixed(1);
  // }

  function counterDays() {
    let date = Date.parse(value);
    let date2 = Date.parse(value2);
    if (date > date2) {
      setResult((date - date2) / 86400000)
    } else {
      setResult((date2 - date) / 86400000)
    }
  }
  // <p>Введите 2 даты в формате 2025-12-31</p>
  // <input value={value} onChange={(event) => setValue(event.target.value)} />
  // <input value={value2} onChange={(event) => setValue2(event.target.value)} />
  // <button onClick={counterDays}>Разница в днях</button>
  // <p>Результат: {!result ? 'Введите коректную дату' : result}</p>


  return <div>
    <p>Введите 2 даты в формате 2025-12-31</p>
    <input value={value} onChange={(event) => setValue(event.target.value)} />
    <input value={value2} onChange={(event) => setValue2(event.target.value)} />
    <button onClick={counterDays}>Разница в днях</button>
    <p>Результат: {!result ? 'Введите коректную дату' : result}</p>
  </div>
}

// Обработка данных формы по нажатию на кнопку в React

// Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. 
// По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. Результат выводите в абзац.

// Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате '2025-12-31'. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.
// Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла текущая дата.




function App3() {
  let [result, setResult] = useState('Результат будет тут');
  let [del, setDel] = useState('')

  function sumCount(number) {
    let sum = 0;
    for (let i of number) {
      sum = sum + Number(i);
    }
    return sum
  }

  function allDelMult(number) {
    let multiDel = 1;
    for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
        multiDel = multiDel * i;
      }
    }
    return multiDel;
  }

  return <div>
    <input onBlur={event => setResult(sumCount(event.target.value))} />
    <p>{!result ? 'Введите корректное число' : result}</p>
    <div>
      <p>Тут покажем произведение делителей числа</p>
      <input onBlur={event => setDel(allDelMult(event.target.value))} />
      <p>{del}</p>
    </div>
  </div>
}

// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.

// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац произведение делителей введенного числа.




// Пусть в textarea вводится текст. Сделайте так, чтобы в абзац выводился транслит вводимого текста.
function App4() {
  const [value, setValue] = useState('');

  function translit(word) {
    var answer = '';
    var converter = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',

      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
      'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
      'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };

    for (var i = 0; i < word.length; ++i) {
      if (converter[word[i]] == undefined) {
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }

    return answer;
  }

  return <div>
    <textarea value={value} onChange={event => setValue(event.target.value)} />
    <p>{translit(value)}</p>
  </div>;
}


// Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по мере ввода в абзац выводилась сумма введенных чисел.
function App5() {
  let [value, setValue] = useState('');
  let [result, setResult] = useState('');

  function countSum() {
    let values = value.split('\n');
    let sum = 0;
    for (let i of values) {
      sum = sum + Number(i);
    }
    setResult(sum)
  }


  function two(a) {
    setValue(a)
    countSum()
  }

  return <div>
    <textarea value={value} onChange={event => two(event.target.value)} />
    <p>{result ? result : 'Введите корректные числа'}</p>
    <button onClick={countSum}>GGG</button>
  </div>
}

// Работа с чекбоксами в React
function App6() {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('Этот кусок текста видно только избранным');

  let content;
  if (checked) {
    content = <div>
      <h2>Ура, вам уже есть 18</h2>
      <p>
        здесь расположен контент только для взрослых
      </p>
    </div>
  } else {
    content = <div>
      <p>
        увы, вам еще нет 18 лет:(
      </p>
    </div>
  }


  return <div>
    <span>Вы избранный?</span>
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} style={{ cursor: 'pointer' }} />
    <p>{checked ? message : ''}</p>
  </div>

}



// Работа с селектами в React
function App7() {
  const cities = ['Минск', 'Москва', 'Санкт-Петербург', 'Казань'];
  const [value, setValue] = useState('');

  let valueCity = 0;
  const generateOptions = cities.map((text, index) => { return <option value={valueCity = valueCity + 1} key={index}>{text}</option> })

  return <div>
    <select value={value} onChange={event => setValue(event.target.value)}>
      {generateOptions}
    </select>
    <p>
      {value === '1' && 'Город Минск - столица Беларуси'}
      {value === '2' && 'Город Москва - столица России'}
      {value === '3' && 'Город Санкт-Петербург - замечательный город'}
      {value === '4' && 'Город Казань - родина Татар'}
    </p>
  </div>;
}

function App8() {
  const [value, setValue] = useState('');

  return <div>
    <p>Ваша возрастная группа:</p>
    <select value={value} onChange={event => setValue(event.target.value)}>
      <option value="1">от 0 до 12</option>
      <option value="2">от 13 до 17</option>
      <option value="3">от 18 до 25</option>
      <option value="4">старше 25</option>
    </select>
    <p>
      {value === '1' && 'Вы молод и вам меньше 12'}
      {value === '2' && 'Вы подросток до 17'}
      {value === '3' && 'Вы совершеннолетний'}
      {value === '4' && 'Взрослый!'}
    </p>
  </div>;
}


// Пусть у нас опять пункты списка хранятся в массиве:
// Давайте сформируем с помощью этого массива теги option, добавив им в качестве атрибутов value ключи элементов массива:
// Используя сформированные теги создадим выпадающий список:
// Выведем в абзац номер выбранного пункта:
// А теперь выведем текст выбранного пункта, используя его номер и массив с текстами:
// Соберем все вместе и получим следующий код:
function App9() {
  const optionsArray = ['Text 1', 'Text 2', 'Text 3']
  const [value, setValue] = useState('');

  const generateOptions = optionsArray.map((text, index) => { return <option value={index} key={index}>{text}</option> })

  return <div>
    <select value={value} onChange={event => setValue(event.target.value)}>
      {generateOptions}
    </select>
    <p>Вы выбрали {value}</p>
    <p>Текст выбранной опции: {optionsArray[value]}</p>
  </div>;
}


//Работа с radio в React
function App10() {
  const [value, setValue] = useState('')

  function changer(event) {
    setValue(event.target.value)
  }

  return <div>
    <input type="radio" name="radio" value="HTML" checked={value === "HTML" ? true : false} onChange={changer} /><>HTML</>
    <br />
    <input type="radio" name="radio" value="CSS" checked={value === "CSS" ? true : false} onChange={changer} /><>CSS</>
    <br />
    <input type="radio" name="radio" value="JS" checked={value === "JS" ? true : false} onChange={changer} /><>JS</>
    <p>{value === "JS" ? 'ВЫБРАЛИ JS? ВЫ ПОТРЯСАЮЩИЙ' : value}</p>
  </div>
}

// Значения по умолчанию в React
function App11() {
  //  defaultChecked={true}

  const [checked, setChecked] = useState(true);

  return <div>
    <input type="checkbox" defaultChecked={checked} />
  </div>;
}

export default App11;