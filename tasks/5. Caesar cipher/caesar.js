//! Bonus 1: if you want to use this function to decode something, you would just need to change the (- 26) from the conditional block on line 22 to (+ 26)
//! and change the (+ key) from within the String.fromCharCode method on line 16 to (- key)
//! Could even have a third argument to pass to this function and use conditionals to make it more dynamic and do both.

//? Bonus 2: The most simple way that comes to mind, while likely a less efficient method, would be to brute force it by looping through the string 25 times,
//? once for each remaining letter in the alphabet, push the value each iteration into an array, and look through it for a legible word. Given we are dealing with single words
//? this would probably be ok.

//? if dealing with multiple words or a paragraph for example, I think I would start by encrypting some common pronouns, adjectives, etc, 25 times each, and check those values
//? against the given input. When you get one that matches a word in the input, use the key that was used to encrypt it to decrypt the rest. If it works, cool, if not look for
//? another "Real" word and try again.

//! I Didn't write this out in code to test my ability to explain my thought process, plus I'm a little short on time.

export function encryptCaesar(inputString, key) {
  //* Declare caesar variable to append to and return.
  let caesar = "";
  //* for loop to loop through the input string until i is no longer less than the length of the inputString
  for (let i = 0; i < inputString.length; i++) {
    //* declare char as the current letter in the sring for each iteration
    let char = inputString[i];
    //* declare charCode for the current Unicode value for the current char
    let charCode = char.charCodeAt(0);

    //* update the char variable to the character value of the Unicode value of charCode plus the value from the key argument, using the String.fromCharCode method.
    char = String.fromCharCode(charCode + key);

    //* Conditional block that uses regular expressions and the match method to check if the character stored in the char variable is a letter or not.
    //? This is my solution for wrapping through the alphabet, if z is passed with a key of 1, the char value from above would be '{', so it would trigger this conditional.
    if (!char.match(/[a-z]/i) || !char.match(/[A-Z]/i)) {
      //* If we get in here, we set the charCode variable to be the current charCode minus 26 (number of letters in the alphabet), this will give us the proper character while wrapping only letters, works for upper and lower case.
      charCode = char.charCodeAt(0) - 26;
      //* we now set the char variable to the proper character by passing the unicode value from charCode to the String.fromCharCode method,
      char = String.fromCharCode(charCode);
    }
    //* Append the current value of char to our caesar variable.
    caesar += char;
  }
  return caesar;
}
