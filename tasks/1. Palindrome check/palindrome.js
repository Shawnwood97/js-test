export function isPalindrome(inputString) {
  // Split the string to an array of substrings using the built-in JS split method
  // Passing an empty string as the separator, ensures the split method gives each letter it's own index
  // !* any whitespace would also be given it's own index.

  // let stringArray = inputString.split("");

  // Reverse the order of elements within stringArray (first index becomes last, second becomes second to last, etc)

  // let reversedStringArray = stringArray.reverse();

  // Join each index together to form a string using the built in join method.
  // Passing an empty string as the separator ensure each index is joined without the default comma.

  // let reversedString = reversedStringArray.join("");

  // Compare our reversesed string to the passed string, if they match by Type and Value, we will get true, otherwise, false.
  // return reversedString === inputString;

  // we can do this in one line as well.
  return inputString.split("").reverse().join("") === inputString;
}
