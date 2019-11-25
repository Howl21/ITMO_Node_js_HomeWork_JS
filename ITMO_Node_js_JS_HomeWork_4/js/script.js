function task_1() {
    // Без регулярок.
    let str = document.getElementById("idTask_1").value,
        summ = 0,
        mapSymbol = new Map();

    // Избыточно. Можно через if
    mapSymbol.set("+", "+");
    mapSymbol.set("-", "-");

    for (let index = 0; index < str.length; index++) {
        if (isNaN(str[index]) && mapSymbol.get(str[index]) === undefined) {
            continue;
        }
        // проверяем строку на наличие "-" и учитываем его позицию в строке.
        if (str[index] === "-" && str[index + 1] !== undefined && str[index + 1] !== "+") {
            // знак относится к правому числу
            summ += str[index + 1] * (-1);
            // число справо от "-" нам больше не нужно
            index++
            continue;
        } else if (str[index] === "+") {
            continue;
        }
        // костыль
        if (isNaN(str[index])) {
            continue;
        }
        summ += (+str[index]);
    }
    console.log(summ);
}

function task_2() {
    // для символа, а не для подстроки (длинна символа = 1)
    let str = document.getElementById("str").value,
        symbol = document.getElementById("symbol").value,
        k = Math.abs(document.getElementById("k").value),
        strResult = "";

    if ((str.indexOf(symbol)) === -1) {
        console.log("Вхождений нет");
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            strResult += symbol.repeat(k);
        } else
            strResult += str[i];
    }
    console.log(strResult);

}

function task_3() {
    let str = document.getElementById("pass").value,
        regExpLength = /(.){9}/ig, // длина пароля
        regExpEnglish = /[a-z]/ig, // english
        regExp_number = /\d/ig, // цифры
        regExp_symbol = /[\!\$\#\%]/ig, // неалфавитные символы
        isregExpLength = false,
        isEnglish = false,
        isNumber = false,
        isSymbol = false;

    isregExpLength = regExpLength.test(str);
    isEnglish = regExpEnglish.test(str);

    try {
        isNumber = str.match(regExp_number).length > 2;
    } catch (error) {
        isNumber = false;
    }

    try {
        isSymbol = str.match(regExp_symbol).length === 1;
    } catch (error) {
        isSymbol = false;
    }

    console.log(isregExpLength, isEnglish, isNumber, isSymbol);

    console.log("Пароль валиден: " + (isNumber && isSymbol && isregExpLength && isEnglish));
}