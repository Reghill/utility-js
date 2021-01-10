function minimum(array) {
    array = sortArray(array);
    let firstIndex = 0;
    return array[firstIndex];
}

function sortArray(array) {
    return array.sort();
}

module.exports = minimum;