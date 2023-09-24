const selectionValue = (Awal, Akhir, dataArr) => {
    if (Awal < Akhir && (dataArr.length >= 5 && Awal <= dataArr.length)) {
        const result = dataArr.filter((data) => data >= Awal && data <= Akhir);
        result.sort((a, b) => a - b);
        console.log(result);
    } else if (Awal > Akhir) {
        console.log('Nilai Akhir Harus Lebih besar dari nilai awal');
    } else if (dataArr.length < 5) {
        console.log('Data Array Harus lebih dari 5');
    } else {
        console.log('Nilai tidak di temukan');
    }
}

selectionValue(2, 6, [1, 8, 3, 4, 7])

