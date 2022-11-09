let numbers = [-4, 8, 17, -1]

let max = [0]
let min = [0]
let avg = [0]

function maxAndMin() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= max) {
            max = numbers[i];
        }

        if (numbers[i] <= min) {
            min = numbers[i]
        }
    }


}

maxAndMin()

console.log(max, min)


function findAvg(arr) {
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
      sum += arr[i]
    }

    return sum / numbers.length
    
}

console.log(findAvg(numbers))


// Reduce

const totalSum = numbers.reduce((x, y) => x + y);

console.log(totalSum)