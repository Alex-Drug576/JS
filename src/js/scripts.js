var bookEnds = function(message) {
	var firstLetter = message.charAt(0);
  var lastLetter = message.charAt(message.length - 1);
  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
};

var letterSwap = function(characters) {
	var firstLetter = characters.charAt(1);
  var secondLetter = characters.charAt(0);
  return firstLetter + secondLetter;
};

var leadingLetter = function(originalMessage) {
	return originalMessage.charAt(Math.floor(originalMessage.length / 2));
};

var endSwap = function(message) {
	return message + letterSwap(bookEnds(message));
};

var reverseString = function(string) {
	return string.split("").reverse().join("");
};

var userMessage = prompt("enter a sentence!");

alert(reverseString(leadingLetter(userMessage) + endSwap(userMessage)))