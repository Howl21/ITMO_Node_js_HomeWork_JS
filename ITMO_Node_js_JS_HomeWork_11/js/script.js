class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

class Basket {
    constructor() {
        this.store = [];
        this.quantity = 0;
        this.sum = 0;
    }
    addProduct(product) {
        this.store.push(product);
        this.sum += product.price;
        this.quantity++;
    }
    get basketSum() {
        return this.sum;
    }
    get basketQuantity() {
        return this.quantity;
    }

}

class Human {
    constructor(name, age, sex, hobby) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.hobby = hobby;
    }
    toString() {
        return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex}. Интересы: ${this.hobby}`;
    }

}

class Student extends Human {
    constructor(name, age, sex, hobby, institute) {
        super(name, age, sex, hobby);
        this.institute = institute;
    }
    toString() {
        return `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex}. Интересы: ${this.hobby}. Обучается в ${this.institute}.`;
    }
}

let product1 = new Product("apple", 20),
    product2 = new Product("milk", 5),
    product3 = new Product("potatos", 15),
    basket = new Basket(),
    human = new Human("Peter", 31, "M", "footbal,hockey"),
    student = new Student("Max", 23, "M", "programming,music", "SPBGPU");

basket.addProduct(product1);
basket.addProduct(product2);
basket.addProduct(product3);

console.log('В сейчас корзине :' + basket.basketQuantity + ' товара. На сумму :' + basket.basketSum);

console.log(human);
console.log(student);