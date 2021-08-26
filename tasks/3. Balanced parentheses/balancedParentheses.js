export function areParenthesesBalanced(inputString) {
  //* Declare a stack for using LIFO, the idea here, is that only the most recent item pushed into the stack is accessible
  //* so we will only be using push and pop methods.
  let stack = [];

  //* for loop to loop through the input string until we hit the end, until i is no longer less than the length of the string, or we return from within.
  for (let i = 0; i < inputString.length; i++) {
    //* set variable char to the current character in the string for this ineration of the loop, i === current index.
    let char = inputString[i];
    //* if the current char is an opening parentheses, push it into the stack array. push will always insert this char into the end (most recent)
    if (char === "(") {
      stack.push(char);
    }
    //* else if current char is a closing parentheses, pop off the most recent opening parentheses from the stack array, store the return value of the pop method into recentOpen variable. The stack array can only contain opening parentheses due to the above logic.
    else if (char === ")") {
      let recentOpen = stack.pop();
      //* if we found a closing parentheses, and pop method returned undefined to our variable, return false.
      if (recentOpen === undefined) {
        return false;
      }
    }
  }
  //* after we have looped through the entire string, return the correct boolean based on the below comparison.
  return stack.length === 0;
}
//* the above was done almost entirely off my own knowledge without help from google. This is not the best solution possible as it will only work on parentheses and not any other brackets, below is a solution that should work for all, where I did use the help of google/stackoverflow.

// !----------------------------------- SEPERATOR FOR DIFFERENT FUNCTIONS ----------------------------------------------------

// export function areParenthesesBalanced(inputString) {
//   //* stack variable to be used the same as we did in the above function
//   let stack = [];

//   //* Object with opening brackets as the key and closing brackets as the value, this will be used in an interesting way, because the strings populated strings in the values will cause a true boolean return for our if statements below, but we can also use the closing brackets as the values for comparison reasons.
//   let opening = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   //* Object with closing brackets as the key and true booleans as the value
//   let closing = {
//     ")": true,
//     "]": true,
//     "}": true,
//   };

//   for (let i = 0; i < inputString.length; i++) {
//     let char = inputString[i];

//     //* if char is in the opening Object, we push the current char into the stack array
//     //* example, if our current iteration has us at an opening bracket like '{', opening[char] === opening['{'], which exists as a key in our opening Object.
//     //? This is where those strings we used as values are returning true.
//     if (opening[char]) {
//       stack.push(char);
//       //* similar logic to above, just checking for closing char from the closing Object, keys in the closing object have a true boolean for their value.
//     } else if (closing[char]) {
//       //* Here we use pop, which returns the most recently pushed item from the stack array.
//       //? This is where we use the actual value from the most recently pushed opening bracket, and compare that VALUE the current char(closing bracket).
//       //? if they do not match, return false.
//       //* I stored it in a variable for readability, I could have just used opening[stack.pop()] to achieve the same result.
//       let recentOpen = stack.pop();
//       if (opening[recentOpen] !== char) {
//         return false;
//       }
//     }
//   }
//   //* after the loop, if our stack array === 0 we will return true, otherwise, false.
//   //* since stack can only contain opening brakcets due to our above logic, if there's anything in here, the string is unbalanced.
//   return stack.length === 0;
// }
