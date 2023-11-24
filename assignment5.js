var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

let number = []; 

let count = 0;

for (let i = 1; i<=limit; i=i+1) {

    parseInt(readlineSync.question("Enter the " + i + "th element : "))

}

for (let i = 0; i<= number; i=i+1) {
  if ( i % 2 == 0) {
    count = count + 1;
  }
}

console.log("Number of even numbers in the given array is " , count);