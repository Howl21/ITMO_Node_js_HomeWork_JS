let divParent = document.getElementById("game"),
    attemptsElement = document.getElementById("attempts");
divParent.addEventListener("click", getPresent);



function task1() {
    let arr = [4, 8, 15, 16, 23, 42];
    console.log('Исходный массив : ' + arr.toString());
    console.log('Минимальный элемент : ' + myLibrary.min(arr));
    console.log('Максимальный элемент : ' + myLibrary.max(arr));
    console.log('Средннее арифметическое : ' + myLibrary.middle(arr));
    console.log('Клонированный массив : ' + myLibrary.clone(arr));
}

function task2() {

    let line1 = {
        x: [],
        y: [],
        type: 'scatter'
    };


    function calcY(x) {
        let y;
        if (x >= 1) {
            y = 5 / x;
        } else {
            y = x * x - 4 * x;
        }
        return y;
    }

    for (let i = -5; i < 5; i += 0.1) {
        line1.x.push(i);
        line1.y.push(calcY(i));
    }

    let layout = {
        title: 'График',
        xaxis: {
            title: 'X',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Y',
            zeroline: false
        }
    }

    Plotly.newPlot('placeholder', [line1], layout);
}

function task3() {
    createTable();
    attemptsElement.value = 3;
}

function createTable() {
    divParent.innerHTML = '';
    let n = document.getElementById("n").value;
    if (n == 0) {
        return;
    }
    tab = document.createElement('table');
    tab.setAttribute('cellspacing', 0);
    tab.setAttribute('cellpadding', 4);
    tab.setAttribute('border', 1);
    for (let i = 1; i <= n; i++) {
        let newRow = document.createElement('tr');
        for (let j = 1; j <= n; j++) {
            let newCol = document.createElement('td');
            newCol.setAttribute('havePresent', Math.round(Math.random()) + 1);
            newCol.setAttribute('getPresent', false);
            newRow.appendChild(newCol);
        }
        tab.appendChild(newRow);
    }
    divParent.appendChild(tab);
    setTableStyle();
}

function setTableStyle() {
    let cells = document.querySelectorAll("td");
    cells.forEach((v) => {
        v.style.border = "1px solid black";
        v.style.background = "green";
    })

}


function getPresent(e) {
    let attempts = document.getElementById("attempts").value;
    if (+attempts) {
        let clickElem = e.target,
            id = clickElem.attributes.havePresent.value;
        if (id) {
            if (id > 1) {
                clickElem.style.transitionProperty = "background";
                clickElem.style.transitionDuration = "2s";
                clickElem.style.background = "yellow";
                clickElem.textContent = "Ура. Вы выиграли";
                clickElem.setAttribute('getPresent', true);
            } else {
                clickElem.textContent = "Увы...";
            }
            attempts--;
            attemptsElement.value = attempts;
        }
    } else {
        alert("Попыток больше не осталось");
        let cells = document.querySelectorAll("td");
        cells.forEach((v) => {
            if (v.attributes.havePresent.value > 1 && v.attributes.getPresent.value == "false") {
                v.style.transitionProperty = "background";
                v.style.transitionDuration = "2s";
                v.style.background = "red";
                v.textContent = "Приз был здесь";
            }
        });
    }
}