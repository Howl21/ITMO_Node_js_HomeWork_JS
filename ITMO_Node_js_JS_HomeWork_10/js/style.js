function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Basket() {
    let store = [],
        quantity = 0,
        sum = 0;
    this.addProduct = function(product) {
        store.push(product);
        sum += product.price;
    }
    this.getQuantity = function() {
        return store.length;
    }
    this.getSum = function() {
        return sum;
    }
}

function Human(name, age, sex, hobby) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobby = hobby;
    this.toString = () => `Человек: ${name}. Возраст: ${age}. Пол: ${sex}. Интересы: ${hobby}`;
}

function User() {
    this.toString = () => 'Пустой объект User';
}

User.Anonim = function() {
    let user = new User();
    user.toString = () => "Аноним";
    return user;
}

User.Person = function(data) {
    let user = new User();
    user.name = data.name;
    user.age = data.age;
    user.toString = function() { return `name: ${this.name}. age: ${this.age}` };
    return user;
}

function task1() {
    let product1 = new Product("apple", 20),
        product2 = new Product("milk", 5),
        product3 = new Product("potatos", 15),
        basket = new Basket();

    basket.addProduct(product1);
    basket.addProduct(product2);
    basket.addProduct(product3);

    console.log('В сейчас корзине :' + basket.getQuantity() + ' товара. На сумму :' + basket.getSum());
}

function task2() {
    let human = new Human("John", 18, "M", "music, programming.Обучается в ИТМО");

    console.log(human.toString());
}

function task3() {
    let anonim = User.Anonim(),
        person = User.Person({ name: "Ivan", age: 25 });

    console.log(anonim.toString());
    console.log(person.toString());
}