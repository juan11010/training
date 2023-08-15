function pyramid(rows) {
    for(let i = 1; i <= rows; i++) {
        let row = "";
        let start = (i % 2 === 0) ? 2 : 1;
        let step = 2;
        for(let j = start; j <= start + (i - 1) * step; j+=step) {
            row += j + " ";
        }
        console.log(row);
    }
}

pyramid(10);
