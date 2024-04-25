/*
Домашняя работа 1.
Задание 1.
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки.
*/

console.log('-------------------');
console.log('Homework 1. Task 1:');

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

/*
Задание 2.
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

console.log('-------------------');
console.log('Homework 1. Task 2:');

function createCounter(initialValue) {
  let value = initialValue;

  return {
    increment: function () {
      value += 1;
    },
    decrement: function () {
      value -= 1;
    },
    getValue: function () {
      return value;
    }
  }
}

const counter = createCounter(0);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());;

/*
Задание 3.
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

Пример:
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/

console.log('-------------------');
console.log('Homework 1. Task 3:');

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }

  for (let i = 0; i < rootElement.children.length; i++) {
    const foundElement = findElementByClass(rootElement.children[i], className);
    if (foundElement !== null) {
      return foundElement;
    }
  }

  return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

console.log('-------------------');
