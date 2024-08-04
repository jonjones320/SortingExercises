function merge(arr1, arr2) {
    const results = [];
    let i;
    let j;
    while (arr1.length && arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    };
    while (i < arr1.length) {
        results.push(arr1);
        i++;
    };
    while (j < arr2.length) {
        results.push(arr2);
        j++;
    };
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const front = array.split([], 0, mid);
    const back = array.split([], mid);
    return merge(front, back);
}

module.exports = { merge, mergeSort};