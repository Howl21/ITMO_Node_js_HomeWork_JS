function Ex_1() {
    let A = [12, 4, 3, 10, 1, 20],
        B = [-3, -7, -100, -33],
        C = [];
    C = A.concat(B);
    console.log(C);
    C = B.concat(A);
    console.log(C);
}

function Ex_2() {
    let area = [null, null, null, null, null, null, null, null, null],
        playZone = document.getElementById('playZoneContainer'),
        z = 0;
    playZone.innerHTML = '';
    for (let i = 0; i < area.length; i++) {
        let p = document.createElement('p');
        z = Math.floor(Math.random() * 3);
        if (z === 1) {
            area[i] = 'O';
            p.innerHTML = 'O';
        } else if (z === 0) {
            area[i] = 'X';
            p.innerHTML = 'X';
        } else {
            area[i] = ' ';
            p.innerHTML = ' ';
        }
        playZone.appendChild(p);
    }

}

function Ex_3() {
    let a = [12, 4, 3, 10, 1, 20],
        min = a[0],
        max = a[0];

    console.log(a);
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] > max) {
            max = a[i];
        }
    }
    console.log('min: ' + min);
    console.log('max: ' + max);
    a.splice(a.indexOf(min), 1);
    a.splice(a.indexOf(max), 1);
    console.log(a);
}