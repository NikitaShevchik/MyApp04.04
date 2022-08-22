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





// Реактивность массивов в React
function App12() {
  let [array, setArray] = useState(['Nikita', 'Andrew', 'Oleg', 'Kirill', 'Timafey', 'Egor']);
  console.log(array)
  // let copy = Object.assign([], notes);
  // copy.push(6);
  // setNotes(copy);

  // console.log([...copy, 7])

  // notes.push(6)

  let result = array.map((value, index) => {
    return <p key={index}>{value}</p>
  })

  let index = array.length - 1;

  return <div>
    {result}
    <button onClick={() => setArray([...array, 'Tom'])}>Add Tom</button>
    <button onClick={() => setArray([...array, 'Masha'])}>Add Masha</button>
    <button onClick={() => setArray([...array, 5])}>Add 5</button>
    <button onClick={() => setArray([...array, 'Looney'])}>Add Looney</button>
    <button onClick={() => setArray([...array.slice(0, index), ...array.slice(index + 1)])}>Remove {array[index]}</button>
    <button onClick={() => setArray([...array.slice(0, 3), '!!!', ...array.slice(3 + 1)])}>Change {array[3]} on !!!</button>
    <button onClick={() => setArray([...array.reverse()])}>Перевернуть массив</button>
  </div>;
}


// Форма для добавления элементов в массив в React
function App13() {
  const [notes, setNotes] = useState(['Никита', 'Стас']);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });

  return <div>
    <ul>
      {result}
    </ul>
    <input value={value} onChange={event => setValue(event.target.value)} onBlur={() => setNotes([...notes, value]) & setValue('')} />
    <button onClick={() => setNotes([...notes, value]) & setValue('')} >Добавить в массив</button>
  </div>;
}


// Реализация удаления элементов из массива в React
function App14() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const result = notes.map((note, index) => {
    return <li key={index}>
      {note}
      <button onClick={() => remItem(index)}>delete</button>
    </li>;
  });

  function remItem(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])
  }

  return <ul>
    {result}
  </ul>;
}



// Привязка инпутов к массиву в React
function App15() {
  let [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  function getSum(arr) {
    let sum = 0;
    for (let i of arr) {
      sum += Number(i);
    }
    return sum;
  }
  function getMiddle(arr) {
    let sum = 0;
    for (let i of arr) {
      sum += Number(i);
    }
    return (sum / arr.length).toFixed(2);
  }

  function changer(index, event) {
    setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)])
  }

  let result = notes.map((value, index) => {
    return <input
      value={value}
      key={index}
      onChange={event => changer(index, event)}
    />
  })

  return <div>
    {result}
    <br />
    <p>Сумма всех чисел: {getSum(notes) ? getSum(notes) : 'Уберите символы/буквы'}</p>
    <p>Среднее арифметическое всех чисел: {getMiddle(notes) ? getMiddle(notes) : 'Уберите символы/буквы'}</p>
  </div>
}

// Редактирование массива в React

function App16() {
  let [notes, setNotes] = useState([1, 2, 3])
  let [edit, setEdit] = useState(null);

  const result = notes.map((value, index) => { return <li key={index} onClick={() => setEdit(index)}>{value}</li> })

  function changeItem(event) {
    setNotes([...notes.slice(0, edit), event.target.value, ...notes.slice(edit + 1)])
  }

  return <ul>
    {result}
    <input value={edit ? notes[edit] : ''} onChange={changeItem} />
  </ul>
}


// Выведите элементы этого массива в виде списка ul. 
// Под списком реализуйте инпут для редактирования пунктов списка. 
// Пусть в конце каждой li стоит кнопка, по нажатию на которую будет начинаться редактирование этой li.

function App17() {
  let [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  let [editor, setEditor] = useState('');
  let [disable, setDisable] = useState(true);

  let result = notes.map((value, index) => { return <li key={index}><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '200px' }}><div>{value}</div><button style={{ marginLeft: '15px', borderRadius: '5px', backgroundColor: 'yellow', border: '1px solid #000' }} onClick={() => setEditor(Number(index)) & setDisable(false)}>Редактировать</button></div></li> })

  function changer(event) {
    setNotes([...notes.slice(0, editor), event.target.value, ...notes.slice(editor + 1)])
  }

  return <ul>
    {result}
    <input onBlur={event => setDisable(true)} value={editor ? notes[editor] : (editor === 0 ? notes[editor] : '')} disabled={disable} onChange={changer} />
  </ul>
}



// Под списком реализуйте инпут для редактирования существующих и добавления новых пунктов списка.
function App18() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [edit, setEdit] = useState(null);
  const [create, setCreate] = useState('');

  let result = notes.map((value, index) => {
    return <li onClick={() => setEdit(index)} key={index}>{value}</li>
  })

  function changer(event) {
    setNotes([...notes.slice(0, edit), event.target.value, ...notes.slice(edit + 1)])
  }

  function stopEdit(event) {
    if (event.target.value == '') {
      setNotes([...notes.slice(0, edit), ...notes.slice(edit + 1)])
    }
    setEdit(false);
  }
  function addItem() {
    if (create) {
      setNotes([...notes, create])
      setCreate('');
    }
  }

  let input;
  if (edit || edit === 0) {
    input = <input
      value={edit ? notes[edit] : (edit === 0 ? notes[edit] : '')}
      onChange={changer}
      onBlur={stopEdit}
    />
  } else {
    input = <input
      value={create}
      onChange={event => setCreate(event.target.value)}
      onBlur={addItem}
    />
  }
  return <ul>
    {result}
    {input}
  </ul>
}


// Реактивность объектов
function App19() {
  let [obj, setObj] = useState({
    name: 'Nikita',
    surname: 'Shevchik',
    age: 22
  })

  return <ul>
    <li>{obj.name}</li>
    <li>{obj.surname}</li>
    <li>{obj.age}</li>

    <button onClick={() => setObj({ ...obj, name: 'Vitya' })}>Изменить имя на Витя</button>
    <br />
    <button onClick={() => setObj({ ...obj, surname: 'Alexeev' })}> Изменить фамилию на Алексеев</button >
    <br />
    <button onClick={() => setObj({ ...obj, age: 33 })}>Изменить возраст на 33</button>

    {console.log(obj)}
  </ul >
}


const userObject = {
  name: 'Nikita',
  surname: 'Shevchik',
  city: 'Minsk',
}

function App20() {
  let [obj, setObj] = useState(userObject);
  let [value, setValue] = useState('');


  function changer(prop, event) {
    setObj({ ...obj, ...{ [prop]: event.target.value } })
  }

  return <div>
    {obj.name}-{obj.surname}-{obj.city}
    <br />
    <p>Изменить имя:</p>
    <input value={obj.name} onChange={event => changer('name', event)} />
    <br />
    <p>Изменить фамилию</p>
    <input value={obj.surname} onChange={event => changer('surname', event)} />
    <br />
    <p>Изменить город</p>
    <input value={obj.city} onChange={event => changer('city', event)} />
    {/* <br />
    <p>Изменить фамилию:</p>
    <input value={value} onChange={event => setValue(event.target.value)} onBlur={() => setObj({ ...obj, surname: value })} />
    <br />
    <p>Изменить город:</p>
    <input value={value} onChange={event => setValue(event.target.value)} onBlur={event => setObj({ ...obj, city: event.target.value })} /> */}
  </div>
}

// Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.
const initDate = {
  year: 2022,
  month: 9,
  day: 3,
}

function App21() {
  let [date, setDate] = useState(initDate);
  let [value, setValue] = useState('')

  function getWeek(date) {
    let daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    let dw = new Date(date.year, date.month - 1, date.day).getDay()
    return daysWeek[dw];
  }

  function changer(prop, event) {
    setDate({ ...date, ...{ [prop]: event.target.value } })
  }

  return <div>
    <div>Год:
      <input style={{ width: '50px', marginLeft: '15px' }} placeholder='гггг' value={date.year} onChange={event => changer('year', event)} />
    </div>
    <br />
    <div>Месяц:
      <input style={{ width: '50px', marginLeft: '15px' }} placeholder='мм' value={date.month} onChange={event => changer('month', event)} />
    </div>
    <br />
    <div>День:
      <input style={{ width: '50px', marginLeft: '15px' }} placeholder='дд' value={date.day} onChange={event => changer('day', event)} />
    </div>
    <h2>День недели: {getWeek(date)}</h2>
  </div>
}



// Реактивность массива объектов в React
function idGen() {
  return nanoid()
}
function App22() {
  const initNotes = [
    {
      id: 'GYi9G_uC4gBF1e2SixDvu',
      prop1: 'value11',
      prop2: 'value12',
      prop3: 'value13',
    },
    {
      id: 'IWSpfBPSV3SXgRF87uO74',
      prop1: 'value21',
      prop2: 'value22',
      prop3: 'value23',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m1L',
      prop1: 'value31',
      prop2: 'value32',
      prop3: 'value33',
    },
  ];
  const newElem = {
    id: 'GMNCZnFT4rbBP6cirA0Ha',
    prop1: 'value41',
    prop2: 'value42',
    prop3: 'value43',
  };
  const data = {
    id: 'IWSpfBPSV3SXgRF87uO74',
    prop1: 'value21 !',
    prop2: 'value22 !',
    prop3: 'value23 !',
  };
  const id = 'JAmjRlfQT8rLTm5tG2m1L';


  const id2 = 'JAmjRlfQT8rLTm5tG2m1L';
  const prop0 = 'prop1';
  const prop = 'prop2';
  const prop2 = 'prop3';

  let [notes, setNotes] = useState(initNotes)
  let [find, setFind] = useState();

  function newElement(index) {
    let newEl = {
      id: idGen(),
      prop1: `value${index}1`,
      prop2: `value${index}2`,
      prop3: `value${index}3`
    }
    return newEl;
  }

  let result = notes.map(note => {
    return <span key={note.id}>
      {note.id}
      <p>{note.prop1}</p>
      <p>{note.prop2}</p>
      <p>{note.prop3}</p>
    </span>
  })

  console.log(find)

  const result2 = notes.reduce((res, note) => note.id === id ? note[prop0] : res, '')

  return <div>
    {result}
    <button onClick={() => setNotes(notes.filter(note => note.id !== id))}>Удалить</button>
    <button onClick={() => setNotes([...notes, newElement(notes.length + 1)])}>Добавить новый объект</button>
    <button onClick={() => setNotes(notes.map(note => note.id === id2 ? { ...note, [prop]: note[prop] + ' !', [prop2]: note[prop2] + ' ???' } : note))}>Поменять JAmjRlfQT8rLTm5tG2m1L</button>
    <br />
    <button onClick={() => setFind(notes.reduce((res, note) => note.id === id ? note[prop] : res, ''))}>Click find</button>
    <br />
    {find}

    {/* <button onClick={() => notes.reduce((res, note) => note.id === id ? setFind({ ...data }) : res, {})}>Найти элемент</button>
    <button onClick={() => setFind([...data])}>ffff</button>
    <br />

    {/* {console.log(notes.reduce((res, note) => note.id === id ? console.log('hello') : res, {}))} */}
  </div>
}



const initProds = [
  { id: idGen(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: idGen(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: idGen(), name: 'prod3', catg: 'catg3', cost: 300 },
];

function App23() {
  let [prods, setProds] = useState(initProds)
  let [obj, setObj] = useState(getInitObj())

  function remItem(idSet) {
    setProds(prods.filter(product => product.id !== idSet))
  }
  // Форма для добавления в массив объектов в React
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  function addElement() {
    let newObj = {
      id: idGen(),
      name: value1,
      catg: value2,
      cost: value3
    }
    setProds([...prods, newObj]);
    setValue1('')
    setValue2('')
    setValue3('')
  }

  function getInitObj() {
    return {
      id: idGen(),
      prop1: '',
      prop2: '',
      prop3: ''
    }
  }

  function changeProp(prop, event) {
    setObj({ ...obj, [prop]: event.target.value });
  }
  function addObject() {
    setProds([...prods, obj])
    setObj(getInitObj())
    console.log(prods);
    console.log(obj)
  }


  let result = prods.map(product => {
    return <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.catg}</td>
      <td>{product.cost}</td>
      <td><button onClick={() => remItem(product.id)}>remove</button></td>
    </tr>
  })

  return <div style={{ width: '600px' }}>
    <table style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Каталог</td>
          <td>Стоимость</td>
          <td>Действие</td>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
    <div style={{ width: '100%', margin: '10px 0 0 0' }}>
      <input style={{ width: '20%' }} value={obj.prop1} onChange={event => changeProp('prop1', event)} />
      <input style={{ width: '20%', margin: '0 0 0 25px' }} value={obj.prop2} onChange={event => changeProp('prop2', event)} />
      <input style={{ width: '20%', margin: '0 0 0 25px' }} value={obj.prop3} onChange={event => changeProp('prop3', event)} />
      <button style={{ width: '20%', margin: '0 0 0 25px' }} onClick={addObject}>Add</button>
    </div>
  </div>
}

// Форма для добавления в массив объектов в React

function App24() {

  return <div>
    Форма для добавления в массив объектов в React
  </div>
}


export default App23;