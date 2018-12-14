// Exercises 1
// Write a function called printFirstAndLast which accepts an array (of objects) 
// and console.logs a new string with the first character and the last character of each value.
//This code gives the output in console as: 
//ae
//ee
//of
//fh
function printFirstAndLast() {
    var arr = ['awesome','example','of','forEach'];
arr.forEach(function(val, index, arr){
console.log(val[0]+val[val.length-1])
}
)
}
printFirstAndLast();
