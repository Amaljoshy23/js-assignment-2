// write a js program to console the multiplication table of a number


var readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question('Enter the number : '));

let limit = parseInt(readlineSync.question('Enter the limit: '));

console.log('Multiplication table of ',number);
for(let i = 1; i<=limit; i=i+1){
    console.log(i,' * ',number,' = ',i*number);
}