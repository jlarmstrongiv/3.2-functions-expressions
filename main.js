// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
}
console.log(max(1, 2));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
    if (num1 > num2) {
      if (num1 > num3) {
        return num1;
      } else {
        return num3;
      }
    } else {
      if (num2 > num3) {
        return num2;
      } else {
        return num3;
      }
    }
}
console.log(maxOfThree(1, 2, 3));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel('u'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(num1, num2){
  Number(num1);
  Number(num2);
  return num1 + num2;
}
console.log(sum(2, 2));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(num1, num2, num3){
  Number(num1);
  Number(num2);
  Number(num3);
  var total = num1 + num2 + num3;
  return total / 3;
}
console.log(avg(1, 2, 3));
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(myString){
  return myString.length;
}
console.log(getLength('four'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(num1, num2){
  return (num1 < num2);
}
console.log(greaterThan(1,2));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(name){
  return 'Hello, ' + name + '!';
}
console.log(greet('Bob'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(word1, word2, word3, word4){
  return 'The ' + word1 + ', ' + word2 + ', ' + word3 + ' jumps over the ' + word4 + '.';
}
console.log(madlib('quick', 'brown', 'fox', 'fence'))
