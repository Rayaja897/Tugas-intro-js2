const valueSelection = (firstValue, LastValue, dataArr) => {
    if (firstValue < LastValue && (dataArr.length >= 5 && firstValue <= dataArr.length)) {
        const result = dataArr.filter((data) => data >= firstValue && data <= LastValue);
        result.sort((a, b) => a - b);
        console.log(result);
    } else if (firstValue > LastValue) {
        console.log('The final value must be greater than the initial value');
    } else if (dataArr.length < 5) {
        console.log('Array Data Must be more than 5');
    } else {
        console.log('Value not found...');
    }
}

valueSelection(2, 6, [1, 8, 3, 4, 7])

