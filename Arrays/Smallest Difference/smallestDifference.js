function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let indexOne = 0;
    let indexTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];

    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    while(indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
        let firstNumber = arrayOne[indexOne];
        let secondNumber = arrayTwo[indexTwo];

        if(firstNumber < secondNumber) {
            current = secondNumber - firstNumber
            indexOne++;
        } else if(firstNumber > secondNumber) {
            current = firstNumber - secondNumber;
            secondNumber++;
        } else {
            return [firstNumber, secondNumber]
        }

        if(smallest > current) {
            smallest = current;
            smallestPair = [firstNumber, secondNumber];
        }
    }
    return smallestPair
}

