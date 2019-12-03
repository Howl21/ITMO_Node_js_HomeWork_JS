let stopT1 = false,
    stopT3 = false;


function task_1() {
    stopT1 = false;
    let divHours = document.getElementById("hours"),
        divMin = document.getElementById("min"),
        divSec = document.getElementById("sec"),
        date,
        strH = "",
        strM = "",
        strS = "",
        arrTimes = [divHours, divMin, divSec];

    function getTime() {
        divHours.innerHTML = "";
        divMin.innerHTML = "";
        divSec.innerHTML = "";
        date = new Date();
        strH = date.getHours();
        strM = date.getMinutes();
        strS = date.getSeconds();

        divHours.appendChild(document.createTextNode(((strH < 10) ? "0" + strH : strH)));
        divMin.appendChild(document.createTextNode(((strM < 10) ? "0" + strM : strM)));
        divSec.appendChild(document.createTextNode((strS < 10) ? "0" + strS : strS));
        arrTimes.forEach((v) => v.style.color = "rgb(" + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + ")");
        if (!stopT1) {
            setTimeout(() => getTime(), 1000);
        }

    }
    getTime();

    function getRandomNumber() {
        return Math.floor(Math.random() * 255);
    }

}

function task_1_stop() {
    stopT1 = true;
}

function task_3_stop() {
    stopT3 = true;
}

function task_3() {
    stopT3 = false;
    let circle_1 = document.getElementById("cir_1"),
        circle_2 = document.getElementById("cir_2"),
        circle_3 = document.getElementById("cir_3"),
        arrCircles_topDown = [circle_1, circle_2, circle_3],
        arrCircles_DownTop = [circle_3, circle_2, circle_1],
        abstractArray = [],
        i = 0,
        topDown = true;

    function setColor() {
        let delay = 2000;
        if (topDown) {
            abstractArray = arrCircles_topDown;
        } else {
            abstractArray = arrCircles_DownTop;
        }

        (i === 0) ? setCircleColor(abstractArray, (topDown) ? "red" : "green", "silver", "silver"): (i === 1) ? setCircleColor(abstractArray, "silver", "yellow", "silver") : setCircleColor(abstractArray, "silver", "silver", (topDown) ? "green" : "red");
        i++;
        if (i === abstractArray.length) {
            i = 0;
            topDown = !topDown;
            delay = 0;
        };
        if (!stopT3) {
            setTimeout(() => setColor(), delay);
        }


    }

    function setCircleColor(arr, color_1, color_2, color_3) {
        arr[0].style.background = color_1;
        arr[1].style.background = color_2;
        arr[2].style.background = color_3;
    }

    setColor();
}