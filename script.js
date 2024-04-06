                                             // ..................................Problems......................//

// 1. Explain the concept of prime numbers and write a function to check if a given number is prime.

// Pseudo Code for Prime Number:

// function isPrime(number):
//     if number is less than 2:
//         return false
//     if number is 2:
//         return true
//     if number is even:
//         return false
//     for each integer i from 3 to square root of number, incrementing by 2:
//         if number is divisible by i:
//             return false
//     return true

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true

// ...............................................2...............................................//


// 2.Write a function to find the largest element in an array.


// ... Pseudo Code to Find the Largest Element in an Array.....//

// Initialize largestElement to the first element of the array
// Iterate through the array starting from the second element
// If the current element is greater than largestElement,
// update largestElement to the current element
//Return the largest element found
//return largestElement

function findLargestElement(array) {
    if (array.length === 0) {
        return "Array is empty";
    }
    let largestElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestElement) {
            largestElement = array[i];
        }
    }
    return largestElement;
}

console.log(findLargestElement([3, 7, 2, 10, 5])); // Output: 10
console.log(findLargestElement([])); // Output: "Array is empty"



// ...............................................3...............................................//

// 3. Write a function to find the second largest element in an array.

// .....Pseudo Code to Find the Second Largest Element in an Array...\\

// Initialize largest and secondLargest to the first and second elements of the array
 // Iterate through the array starting from the third element
// Update largest and secondLargest accordingly
// Update only secondLargest
// Return the secondLargest element found

function findSecondLargestElement(array) {
    if (array.length < 2) {
        return "Array should have at least 2 elements";
    }
    let firstLargest, secondLargest;
    if (array[0] > array[1]) {
        firstLargest = array[0];
        secondLargest = array[1];
    } else {
        firstLargest = array[1];
        secondLargest = array[0];
    }
    for (let i = 2; i < array.length; i++) {
 
        if (array[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = array[i];
        }else if (array[i] > secondLargest) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

console.log(findSecondLargestElement([3, 7, 2, 10, 5])); // Output: 7


// ...............................................4...............................................//

// 4.Write a function to find the nth Fibonacci number using iteration.

//....... Pseudo Code to Find the nth Fibonacci Number using Iteration.....//

// Initialize variables to store the two previous Fibonacci numbers
// Initialize a variable to store the current Fibonacci number
// Iterate from 2 to n to calculate the nth Fibonacci number iteratively
// Calculate the current Fibonacci number by adding the two previous Fibonacci numbers
// Update the two previous Fibonacci numbers for the next iteration
 // Return the nth Fibonacci number

 function findNthFibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let fibonacciMinusTwo = 0;
    let fibonacciMinusOne = 1;
    let currentFibonacci = 0;

    for (let i = 2; i <= n; i++) {
        currentFibonacci = fibonacciMinusTwo + fibonacciMinusOne;
        fibonacciMinusTwo = fibonacciMinusOne;
        fibonacciMinusOne = currentFibonacci;
    }

    return currentFibonacci;
}


console.log(findNthFibonacci(0)); // Output: 0
console.log(findNthFibonacci(1)); // Output: 1
console.log(findNthFibonacci(2)); // Output: 1
console.log(findNthFibonacci(5)); // Output: 5
console.log(findNthFibonacci(10)); // Output: 55


// ...............................................5...............................................//

// 5.Write a function to calculate the factorial of a number using iteration.

// ....Pseudo Code to Calculate Factorial using Iteration...\\

// Initialize the factorial variable to store the result
 // Iterate from 2 to n (inclusive) to calculate the factorial iteratively
// Multiply the current factorial value by the current number (i)
// Return the factorial value

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;

    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(calculateFactorial(0)); // Output: 1
console.log(calculateFactorial(1)); // Output: 1
console.log(calculateFactorial(5)); // Output: 120 (5!)
console.log(calculateFactorial(10)); // Output: 3628800 (10!)


