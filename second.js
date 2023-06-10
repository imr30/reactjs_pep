//write a program that checks a number if it is prime or not using a while loop\
let number = 17;
let isPrime = true;
let divisor = 2;

if (number <= 1) {
  isPrime = false;
}

while (divisor < number) {
  if (number % divisor === 0) {
    isPrime = false;
    break;
  }
  divisor++;
}

if (isPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}
