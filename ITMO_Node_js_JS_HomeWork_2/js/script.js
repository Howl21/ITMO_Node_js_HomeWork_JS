function month() {
    let numberMonth = parseInt(prompt(`Выберите месяц :
        1 - Январь
        2 - Февраль
        3 - Март
        4 - Апрель
        5 - Май
        6 - Июнь
        7 - Июль
        8 - Август
        9 - Сентябрь
        10 - Октябрь
        11 - Ноябрь
        12 - Декабрь`));

    switch (numberMonth) {
        case 3:
        case 4:
        case 5:
            alert("Это весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Это лето");
            break;
        case 9:
        case 10:
        case 11:
            alert("Это осень");
            break;
        case 12:
        case 1:
        case 2:
            alert("Это зима");
            break;
        default:
            alert("Ничего не указали, поэтому будет лето");
            break;
    }


}

function longLine() {
    let unit = parseInt(prompt(`Выберите единицу измерения :
    1 - дециметр,
    2 - километр
    3 - метр
    4 - миллиметр
    5 - сантиметр`)),
        long = parseInt(prompt("Введите длинну отрезка"));

    switch (unit) {
        case 1:
            alert(`${long} дм  = ${long / 10} м`);
            break;
        case 2:
            alert(`${long} км  = ${long * 1000} м`);
            break;
        case 3:
            alert(`${long} м  = ${long} м`);
            break;
        case 4:
            alert(`${long} мм  = ${long / 1000} м`);
            break;
        case 5:
            alert(`${long} см  = ${long / 100} м`);
            break;

        default:
            alert(`Считаем в футах: 1 фут  = 0,3048 м`);
            break;
    }

}

function longNumber() {
    let strNumber = prompt("Введите число от -999 до 999", "1"),
        strResult = "",
        sign = false;

    if (isNaN(+strNumber)) {
        alert("Введите число");
        return;
    }

    if (parseInt(strNumber) === 0) {
        alert("Вы ввели нулевое число");
        return;
    }
    switch (strNumber[0]) {
        case "+":
            strResult += "Вы ввели положительное ";
            sign = true;
            break;
        case "-":
            strResult += "Вы ввели отрицательное ";
            sign = true;
            break;
        default:
            strResult += "Вы ввели положительное ";

    }

    switch ((sign) ? strNumber.length - 1 : strNumber.length) {
        case 1:
            strResult += "однозначное число."
            break;
        case 2:
            strResult += "двузначное число."
            break;
        case 3:
            strResult += "трехзначное число."
            break;
        default:
            strResult += "число, состоящее из более трех цифр."
    }
    alert(strResult);

}

function doSta() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("ThreeFive");
        } else if (i % 3 === 0) {
            console.log("Three");
        } else if (i % 5 === 0) {
            console.log("Five");
        } else
            console.log(i);
    }
}