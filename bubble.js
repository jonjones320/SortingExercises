function bubbleSort(array) {
    for (let i = 0; i <= array.length; i++) {
        let switched = false;
        for (let j = 0; j <= array.length - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;  
                switched = true;
            } 
        };
        if (!switched) break;
    };
    return array;
}

module.exports = bubbleSort;