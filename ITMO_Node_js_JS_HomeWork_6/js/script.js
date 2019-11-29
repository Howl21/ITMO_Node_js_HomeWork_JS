function task_1() {
    let a = {
        name: "static",
        count: 0
    }
    console.log(foo(a, "count", 10));
}

function foo(a, propName, n) {
    let arrResult = [];
    for (let i = a.count; i < n; i++) {
        newObject = Object.assign({}, a);
        newObject.propName = i;
        arrResult.push(newObject);
    }
    return arrResult;
}

function task_2() {
    // один вызов
    let w = arrayRandom();
    w();

    function arrayRandom() {
        let arrRandomNumber = [],
            attempts = 0,
            arraySize = Math.abs(document.getElementById("arraySize").value);
        return function getRandomNumber() {
            let flag = true;
            while (flag) {
                let i = Math.ceil(Math.random() * arraySize);
                if (arrRandomNumber.indexOf(i) === -1) {
                    arrRandomNumber.push(i);
                }
                for (let q = 1; q < arraySize; q++) {
                    if (arrRandomNumber.indexOf(q) === -1) {
                        attempts++;
                        break;
                    }
                    if (arrRandomNumber.length === arraySize) {
                        flag = false;
                    }
                }
            }
            arrRandomNumber.sort((a, b) => a - b);
            console.log(arrRandomNumber);
            console.log("Массив заполнен. Потребовалось попыток :" + attempts)
        }
    }
}

function task_3() {
    let student = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: document.getElementById("age").value,
        interests: document.getElementById("interests").value.split(","),
        schl: document.getElementById("schl").value,
        printStudent: function() {
            return this.name + ' ' + this.surname + ' ' + this.age + ' ' + this.interests + ' ' + this.schl;
        }
    }

    console.log(student.printStudent());
}

function task_4() {
    let m = Math.abs(document.getElementById("fac").value);
    console.log(getFactorial(m));

    function getFactorial(n) {
        return (n != 1) ? n * getFactorial(n - 1) : 1;
    }
}

function task_5() {
    let arr = [{ 'price': 10, 'count': 2 },
        { 'price': 5, 'count': 5 },
        { 'price': 8, 'count': 5 },
        { 'price': 12, 'count': 4 },
        { 'price': 8, 'count': 4 },
    ];

    console.log(arr.sort((a, b) => a.price - b.price));
}