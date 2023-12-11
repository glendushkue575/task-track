/*
   Filename: ComplexAlgorithm.js

   Description: This code implements a complex algorithm that solves a mathematical problem.
   It uses advanced data structures, recursion, and other advanced programming concepts.

   Author: Your Name
   Date: Current Date
*/

// Constants
const MAX_ITERATIONS = 1000;
const PRECISION = 0.000001;

// Function to calculate the n-th term of a complex series
function calculateTerm(n) {
  if (n === 0) {
    return 1;
  } else {
    return calculateTerm(n - 1) + Math.sin(n);
  }
}

// Function to calculate the sum of the first n terms of a complex series
function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += calculateTerm(i);
  }
  return sum;
}

// Function to find the largest term in a series
function findLargestTerm(n) {
  let largestTerm = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    const term = calculateTerm(i);
    if (term > largestTerm) {
      largestTerm = term;
    }
  }
  return largestTerm;
}

// Function to find the number of iterations needed to reach a certain precision
function findIterationsForPrecision(precision) {
  let iterations = 0;
  let error = Number.POSITIVE_INFINITY;
  for (let i = 0; i < MAX_ITERATIONS && error > precision; i++) {
    const term = calculateTerm(i);
    error = Math.abs(term - calculateTerm(i + 1));
    iterations++;
  }
  return iterations;
}

// Recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to calculate the fibonacci sequence up to n terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

// Main program
console.log("Complex Algorithm Example");
console.log("------------------------");

console.log("Terms:");
for (let i = 0; i < 10; i++) {
  console.log(`Term ${i + 1}: ${calculateTerm(i)}`);
}

console.log("\nSum:");
console.log(`Sum of the first 5 terms: ${calculateSum(5)}`);

console.log("\nLargest Term:");
console.log(`Largest term in the first 10 terms: ${findLargestTerm(10)}`);

console.log("\nIterations for Precision:");
console.log(`Iterations needed to reach precision of ${PRECISION}: ${findIterationsForPrecision(PRECISION)}`);

console.log("\nFactorials:");
for (let i = 0; i < 10; i++) {
  console.log(`Factorial of ${i}: ${factorial(i)}`);
}

console.log("\nFibonacci Sequence:");
console.log(`First 10 terms of the Fibonacci sequence: ${fibonacci(10)}`);
