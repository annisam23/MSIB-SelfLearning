function pyramid(params) {
    for (let i = 1; i <= params; i++) {
        let row = '';
        for (let j = 1; j <= params - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

pyramid(2);
