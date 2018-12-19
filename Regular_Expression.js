//Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.

countLetters('awesome', 'e');
function countNumbers(a,b){
    var regex = new RegExp(b, 'gi')
    var matches = a.match(regex)
    if(matches){
        console.log(matches.length)
    }
}

countNumbers("321321dsadsa930-29d132b13a", '[0-9]') // output: 16

//Write a function called capitalSentence which accepts a string and returns another string with all the capital letters joined together.

function capitalSentence(x,y){
    var regex = new RegExp(y, 'g')
    var matches = x.match(regex)
    if(matches){
        let h = matches.join('');
        console.log(h)
    }
}
capitalSentence("And I Think to Myself What a Wonderful World", '[A-Z]') // output : ATMWWW


//Write a function caled isValidPassword, which accepts a string. If the string is longer than 7 characters and includes at least one special character (!,@,#, or $) , the function should return true. Otherwise, return false





