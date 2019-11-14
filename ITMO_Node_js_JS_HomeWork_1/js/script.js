function beds() {
    let lendArea = document.getElementById("S_u").value,
        londBeds = document.getElementById("long_g").value,
        widthBeds = document.getElementById("width_g").value,
        error = false,
        lendArea_m2 = 0,
        freePlace = 0,
        result = "",
        areaBeds = 0,
        havePlace = true,
        i = 0;

    if (lendArea <= 0) {
        alert("Некорректнрое значение для 'Площадь участка'")
        error = true;
    }

    if (londBeds <= 0) {
        alert("Некорректнрое значение для 'Длина грядки'")
        error = true;
    }
    if (widthBeds <= 0) {
        alert("Некорректнрое значение для 'Ширина грядки'")
        error = true;
    }

    if (error) {
        return;
    }

    lendArea_m2 = lendArea * 100;

    while (havePlace) {
        i++;
        areaBeds = i * (widthBeds * londBeds);
        freePlace = lendArea_m2 - areaBeds;
        if ((lendArea_m2 - ((i + 1) * (widthBeds * londBeds))) < 0) {
            havePlace = false;
        }


    }

    result = "Можно разместить грядок: [" + i + "]. Останется свободного места: [" + freePlace + "]";
    document.getElementById("zadanie1_result").innerHTML = "Ответ: " + result;
}

function oval() {
    let lendOval = document.getElementById("S_oval").value,
        lendOval_2 = document.getElementById("S_oval_2").value,
        lendOval_sm = 0,
        error = false,
        result = "",
        lendRing = 0;

    if (lendOval <= 0) {
        alert("Некорректнрое значение для 'Площадь овала'");
        error = true;
    }
    if (lendOval_2 <= 0) {
        alert("Некорректнрое значение для 'Площадь вырезанного овала'");
        error = true;
    }

    if (error) {
        return;
    }

    lendOval_sm = lendOval * 100;
    lendRing = ((lendOval_sm - lendOval_2) < 0) ? 0 : lendOval_sm - lendOval_2;
    result = (lendRing === 0) ? "К сожалению, не удалось получить площадь кольца.." : "Площадь кольца: [" + lendRing + "] см квадратных";
    document.getElementById("zadanie2_result").innerHTML = "Ответ: " + result;


}

function numbers() {
    let number_1 = document.getElementById("number_1").value,
        number_2 = document.getElementById("number_2").value,
        number_3 = document.getElementById("number_3").value,
        minNumber;

    minNumber = Math.min(number_1, number_2, number_3);

    document.getElementById("zadanie3_result").innerHTML = "Ответ: минимальное число [" + minNumber + "]";

}

function nearestNumber() {
    let t = document.getElementById("t").value,
        m = document.getElementById("m").value,
        n = document.getElementById("n").value,
        nearestNumber;

    nearestNumber = ((Math.abs(t - m)) < (Math.abs(t - n))) ? m : n;
    document.getElementById("zadanie4_result").innerHTML = "Ответ: ближайщее число к 't': [" + nearestNumber + "]";
}

function triangle() {
    let coordinates_A = document.getElementById("K_a").value,
        coordinates_B = document.getElementById("C_b").value,
        coordinates_C = document.getElementById("C_c").value,
        nearestNumber;

    arr_A = coordinates_A.split(",");
    arr_B = coordinates_B.split(",");
    arr_C = coordinates_C.split(",");




}