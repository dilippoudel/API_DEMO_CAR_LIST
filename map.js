
//Write a function called extractKey which accepts two parameters, 
// an array of objects, and the name of a key and returns an array with just the values for that key:
//this gives the output like this ==>> ["Elie", "Tim", "Matt"]
var x = extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")
function extractKey(arr, key){
return arr.map(function(value,key){
return value.name;
})
}
console.log(x);
