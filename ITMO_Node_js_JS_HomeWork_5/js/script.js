function task_1() {
    let str = document.getElementById("arr_1").value,
        str_2 = document.getElementById("arr_2").value,
        arrays = (arr1, arr2) => arr1.length == arr2.length && arr1.every((_value, _index) => _value === arr2[_index]);

    array1 = str.split(" ");
    array2 = str_2.split(" ");
    //array1.foreach((q, i) => console.log("Значение:" + q + " " + "индекс: " + i));
    array1.forEach((i, b, c) => console.log(i, b, c))
    console.log(arrays(array1, array2));
}

function range() {
    let beginValue = Math.abs(document.getElementById("begin").value),
        endValue = Math.abs(document.getElementById("end").value),
        steep = Math.abs(document.getElementById("steep").value) || 1,
        result = [];

    if (!(beginValue && endValue)) {
        console.log("Границы диапозона неккоректны")
        return
    }
    //console.log(steep);
    for (let index = beginValue; index <= endValue; index += steep) {
        result.push(index);
    }
    console.log(result);
}

function task_3() {
    let student = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: document.getElementById("age").value,
        interests: document.getElementById("interests").value.split(","),
        schl: document.getElementById("schl").value
    }

    printStudent(student);
}

function printStudent(student) {
    for (const key in student) {
        console.log(key + ' : ' + student[key])
    }
}

//let printStudent = (student) => student.forEach((i, b, c) => console.log(i, b, c))