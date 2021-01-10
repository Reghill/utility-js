function sort(array) {
    return array.sort();
}

function maximum(array){
    let lastIndex = array.length - 1;
    let maxElement = sort(array)[lastIndex];
    return maxElement
}

module.exports = maximum;