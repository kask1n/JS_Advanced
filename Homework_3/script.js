/*
Домашняя работа 3.
Задание 1: Управление персоналом компании.

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
1. Свойство name (имя) - строка, имя сотрудника.
2. Метод displayInfo() - выводит информацию о сотруднике (имя).

Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
1. Свойство department (отдел) - строка, отдел, в котором работает менеджер.
2. Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
*/

console.log('-------------------');
console.log('Homework 3. Task 1:');

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

/*
Задание 2: Управление списком заказов.

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
1. Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
2. Свойство products (продукты) - массив, содержащий список продуктов в заказе.
3. Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
4. Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
*/

console.log('-------------------');
console.log('Homework 3. Task 2:');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber, initialTotalCost = 0) {
    this.orderNumber = orderNumber; // Уникальный номер заказа
    this.currentTotalCost = initialTotalCost; // Начальная общая стоимость заказа
    this.products = [];
  }

  addProduct(product) {
    this.currentTotalCost += product.price;
    this.products.push(product);
  }

  getTotalPrice() {
    return this.currentTotalCost;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(`Общая стоимость заказа: ${order.getTotalPrice()}`);
console.log(order);

console.log('-------------------');
