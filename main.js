/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/

const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultsArray = [];

/*
To check your work, log the iterator numbered position inside the for loop and run your code. 
This should count the number of characters in your input string.

Comment out this code when you’re ready to move on.
*/
// for (let i = 0; i < input.length; i++) {
//   console.log(input[i], 'is '+ i);
// };

for (let i = 0; i < input.length; i++) {
  // console.log(input[i], 'is '+ i, 'outer loop');
  if (input[i] === 'e' || input[i] === 'u') {
    resultsArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    // console.log(vowels[j], 'is '+ j, 'inner loop');
    // resultsArray.push(vowels[j]);
    if (input[i] === vowels[j]) {
      // console.log(input[i], vowels[j]);
      resultsArray.push(input[i]);
    };    
  };
};

const resultString = resultsArray.join('').toUpperCase();

console.log(resultString);
