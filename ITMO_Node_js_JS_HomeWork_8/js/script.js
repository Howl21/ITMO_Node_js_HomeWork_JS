let butCounter = 1,
    task1Parent = document.getElementById("TP1"),
    strT2Button = "На меня нажали ",
    T2button = document.getElementById("T2button");

task1Parent.addEventListener("click", changeColor);

function changeColor(e) {
    let clickElem = e.target,
        id = clickElem.dataset.id;
    if (id) {
        setStyleAndAtributes(clickElem);
        //clickElem.classList.add((boxId == 1) ? "yellow" : "blue");
        //clickElem.dataset.id = (boxId == 1) ? "0" : "1";
    }
}

function setStyleAndAtributes(clickElem) {
    switch (clickElem.dataset.id) {
        case "1":
            clickElem.style.transitionProperty = "background";
            clickElem.style.transitionDuration = "2s";
            clickElem.style.background = "yellow";
            clickElem.dataset.id = "0";
            break;
        default:
            clickElem.style.transitionProperty = "background";
            clickElem.style.transitionDuration = "2s";
            clickElem.style.background = "blue";
            clickElem.dataset.id = "1";
            break;
    }
}

function task2() {
    T2button.textContent = strT2Button + butCounter + " раз";
    butCounter++;
}

function task4() {
    let arrObject = [];
    for (let i = 0; i < 5; i++) {
        arrObject.push(getObject(i))
    }
    createTable(arrObject);
    setTableStyle();
}

function getObject(i) {
    let book = {
        code: i,
        author: "Author " + i,
        title: "Title " + i,
        descreption: "Descreption " + i
    }
    return book;
}

function createTable(arrObject) {
    let divParent = document.getElementById("TP4"),
        table = document.createElement("table"),
        arrValueTitle = ["Артикул", "Автор", "Заголовок", "Описание"],
        arrTitleTable = [document.createElement("td"), document.createElement("td"), document.createElement("td"), document.createElement("td")],
        titleTable = document.createElement("tr");

    arrTitleTable.forEach((v, i) => {
        v.appendChild(document.createTextNode(arrValueTitle[i]));
        titleTable.appendChild(v);
    });

    table.appendChild(titleTable);

    for (let i = 0; i < arrObject.length; i++) {
        newRow = document.createElement("tr");
        for (const key in arrObject[i]) {
            newCol = document.createElement("td");
            newCol.appendChild(document.createTextNode(arrObject[i][key]));
            newRow.appendChild(newCol);
        }
        table.appendChild(newRow);
    }
    divParent.innerHTML = "";
    divParent.appendChild(table);

}

function setTableStyle() {
    let cells = document.querySelectorAll("td");
    cells.forEach((v) => {
        v.style.border = "1px solid black";
        v.style.textAlign = "center";
        v.style.background = "green";
        v.style.width = "100px";
        v.style.height = "50px";
    })

}