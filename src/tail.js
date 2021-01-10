function removeFirstElementIn(array) {
    let indexToBeSpliced = 0;
    let numberOfElementsToBeRemoved = 1;
    array.splice(indexToBeSpliced, numberOfElementsToBeRemoved)
}

function tail(array){
    removeFirstElementIn(array);
    return array
}

module.exports = tail;