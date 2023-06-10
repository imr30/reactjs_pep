//write a program that calculates the sum of all numbers from 1 to 100 using a do-while loop
let sum = 0;
let number = 1;

do {
  sum += number;
  number++;
} while (number <= 100);

console.log("The sum of numbers from 1 to 100 is: " + sum);
