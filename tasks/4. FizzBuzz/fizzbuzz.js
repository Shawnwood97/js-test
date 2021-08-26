export function getFizzBuzzUntil(n) {
  //* declare empty array for storing values
  let fizzBuzz = [];
  //* for loop, where we start i at 1 instead of 0 to prevent getting a FizzBuzz return for 0
  //* also, using <= to ensure we iterate on the value passed
  for (let i = 1; i <= n; i++) {
    //* we check for FizzBuzz first becaause we can only enter one block, so if Fizz or Buzz was checked first, FizzBuzz could never happen.
    //* we use the remainder operator to check if the remainder of i is 0, for 3 AND 5, push 'FizzBuzz' to the array if true
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz.push("FizzBuzz");
    } else if (i % 3 === 0) {
      //* not much special here, check for Fizz by checking the remainder of i against only 3. push 'Fizz' to the array if true
      fizzBuzz.push("Fizz");
      //* andddd check for Buzz by checking the remainder of i against only 5. push 'Buzz' to the array if true
    } else if (i % 5 === 0) {
      fizzBuzz.push("Buzz");
    } else {
      //* else block to catch everything that does not fall into the above conditions. push the current value of i(current iteration) to the array
      fizzBuzz.push(i);
    }
  }
  return fizzBuzz;
}

//! this is a challenge I have done in the past in Python, it's basically the same, and I believe this is one of the shortest ways to do it, could be shortened by removing brackets I suppose. There is a Typo in your Readme example that shows that 6 should be in the array. :) Only pointing out in case it was a test :P.
