/*
Домашняя работа 4.
Задание 1: Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
*/

function getUserData(userID) {
  const url = `https://jsonplaceholder.typicode.com/users/${userID}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

const userID = 3;

getUserData(userID)
  .then(userData => {
    console.log('-------------------');
    console.log('Homework 4. Task 1:');
    console.log(userData);
  })
  .catch(error => {
    console.error(error);
  });

/*
Задание 2: Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
*/

function saveUserData(userData) {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
    })
    .catch(error => {
      return Promise.reject(`Не удалось отправить данные на сервер: ${error}`)
    });
}

const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
};

saveUserData(user)
  .then(() => {
    console.log('-------------------');
    console.log('Homework 4. Task 2:');
    console.log('Данные пользователя успешно сохранены.');
    console.log('-------------------');
  })
  .catch(error => {
    console.error(error);
  });

/*
Задание 3: Изменение стиля элемента через заданное время.

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

Пример использования функции:
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
*/

function changeStyleDelayed(elementID, delay) {
  const element = document.getElementById(elementID);

  if (!element) {
    console.error(`Элемент с ID '${elementID}' не найден.`);
    return;
  }

  setTimeout(() => {
    element.style.color = 'red';
    element.style.backgroundColor = 'yellow';
  }, delay);
}

changeStyleDelayed('title', 2000);
