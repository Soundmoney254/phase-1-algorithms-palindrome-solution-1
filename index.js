function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  return (word === reversedWord);
}

/* 
  Add your pseudocode here
  Initialize reversedWord which represents the input parameter reveresed.
  Split the word into an array of letters.
  Reverse the array of letters output after the split.
  Join the array of the reversed letters to form a word.
  Compare the word and the reversed word to return true when they are equal and false otherwise.
*/

/*
  Add written explanation of your solution here
   I initialized a variable called reversedWord and assigned it to the result of: 
    Splitting the input word with no delimiter to output an array of letters.
    Reversing the array of letters to form another array of the letters reversed.
    Joining the array of letters reversed with no delimiter to form a string of the input word in reversed format.
  Once the reversedWord variable contains a string that has gone through the above processes I returned the value of an expression comparing the input "word" and the "reversedWord"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
    console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("phase"));
}

module.exports = isPalindrome;
