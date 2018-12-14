//forEach is a Javascript iterator method which is used in the place of for loop normally. This iterator is a best option if you 
// are not going to return the value. for eg 
var arr = [1,2,3,4];
var doubledValues = arr.forEach(function(val,index,arr){
    return val*2;
});
doubledValues; //Undefined


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
