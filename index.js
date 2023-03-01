
//prompts the user to enter a sentence and stores is as variable 'sentence'
let sentence = prompt("Enter a Sentence");
//prints out sentence entered by user.
alert(sentence);

//function capitalizes first and last char of string given as argument, then returns results.
function firstLast(frase) {
  let first = (frase.charAt(0)).toUpperCase();
  let last = (frase.charAt(frase.length - 1)).toUpperCase();
  return first+last;
}
//prints out the output of function firstLast
alert(firstLast(sentence));

//function reverses the returned result of function firstLast, then returns this new result.
//function also concatenates result to end of original sentence inputted by user.
function reverse() {
  let array=(firstLast(sentence)).split("");
  let reversed=((array.reverse()).join(""));
  return sentence+reversed ;
}
//prints out the result of function 'reverse.'
alert(reverse());


function fourthFunction() {
  let howLong=(sentence.length);
  let charAtHalfway=((sentence).charAt((Math.floor((howLong/2)))));
  alert(charAtHalfway+sentence);
}

fourthFunction();
  


  