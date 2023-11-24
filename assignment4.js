var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

let sum = 0;

for (let i = 1; i<=limit; i=i+1) {
 
    if (i%2 ==1) {
    sum = sum + i;
  }
  
}

console.log("Sum of odd numbers = " , sum);