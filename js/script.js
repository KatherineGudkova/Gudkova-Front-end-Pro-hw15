const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(`Array: ${array}.`);
console.log(`Number of elements in the array: ${array.length}.`);

//task 1 + task 9

let sumOne = 0;
let numbOfPositive = 0;
let productNine = 1;

array.forEach((element) => {
    if (element > 0) {
        sumOne += element;
        numbOfPositive++;
        productNine *= element;
    }
})

console.log(`\nTask 1`);
console.log(`The sum of positive elements: ${sumOne}.`);
console.log(`Number of positive elements: ${numbOfPositive}.`);

//task 2

let minElement = array[0];

array.forEach((element) => {
    if (minElement > element) {
        minElement = element;
    }
})

const indexMinElement = array.indexOf(minElement);

console.log(`\nTask 2`);
console.log(`The minimum element of the array: ${minElement}.`);
console.log(`Ordinal number (not an index) of the minimum element: ${indexMinElement + 1}.`);

//task 3

let maxElement = array[0];

array.forEach((element) => {
    if (maxElement < element) {
        maxElement = element;
    }
})

const indexMaxElement = array.indexOf(maxElement);

console.log(`\nTask 3`);
console.log(`The maximum element of the array: ${maxElement}.`);
console.log(`Ordinal number (not an index) of the maximum element: ${indexMaxElement + 1}.`);

//task 4

let numbOfNegative = 0;

array.forEach((element) => {
    if (element < 0) {
        numbOfNegative++;
    }
})

console.log(`\nTask 4`);
console.log(`Number of negative elements: ${numbOfNegative}.`);

//task 5 + task 8

let numOfUnpairedPos = 0;
let sumEight = 0;

array.forEach((element) => {
    if (element > 0 && element % 2 === 1) {
        numOfUnpairedPos++;
        sumEight += element;
    }
})

console.log(`\nTask 5`);
console.log(`Number of unpaired positive elements: ${numOfUnpairedPos}.`);

//task 6 + task 7

let numOfPairedPos = 0;
let sumSeven = 0;

array.forEach((element) => {
    if (element > 0 && element % 2 === 0) {
        numOfPairedPos++;
        sumSeven += element;
    }
})

console.log(`\nTask 6`);
console.log(`Number of paired positive elements: ${numOfPairedPos}.`);

console.log(`\nTask 7`);
console.log(`The sum of paired positive elements: ${sumSeven}.`);

//task 8 
//see decision in task 5 + task 8

console.log(`\nTask 8`);
console.log(`The sum of unpaired positive elements: ${sumEight}.`);

//task 9
//see decision in task 1 + task 9

console.log(`\nTask 9`);
if (numbOfPositive > 0) {
    console.log(`Product of positive elements: ${productNine}.`);
} else {
    console.log(`There are no positive numbers in the array.`);
}

//task 10

let newArray = [];

array.forEach((element) => {
    if (element != maxElement) {
        newArray.push(0);
    } else {
        newArray.push(element);
    }
})

console.log(`\nTask 10`);
console.log(`New array: ${newArray}.`);
console.log(`Number of elements in the array: ${newArray.length}.`); 