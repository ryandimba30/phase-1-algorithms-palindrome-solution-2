function isPalindrome(word) {
  // Write your algorithm here
  //iterate through the word to the middle
  for (let i = 0; i < word.length / 2; i++) {
    //compare the letters with the corresponding characters
    let j = word.length - i - 1;
    // if the letters are different, then return false
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate through the word to the middle
  write a conditional statement
  return true if all the letters are the same
  if any of the letters are not the same, return false
*/

/*
  Add written explanation of your solution here
  i need to write a function that returns true if an input string is same as the output string
  that means that if the first letter of the input string is same as the last letter of the output string and the second letter
  is the same as the second last letter of the output string, i should return true
  I need to iterate over the input string to the middle and check if any of the characters  are different,
  i return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("peter"));
}

module.exports = isPalindrome;
