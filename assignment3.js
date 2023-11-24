
 	
var readlineSync = require('readline-sync');

let mark = parseInt(readlineSync.question('Enter your mark :'));

if(mark>90 ){
    console.log('CONGRATULATIONS YOU GOT GRADE A');
}
else if(mark>80){
    console.log('GRADE B');
}
else if(mark>70){
    console.log('GRADE C');
}
else if(mark>60){
    console.log('GRADE D');
}
else if(mark>=50){
    console.log('GRADE  E');
}
else{
    console.log('SORRY ,YOU ARE FAILED.BETTERLUCK NEXT TIME');
}