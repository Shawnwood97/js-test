export function getFibonacciUntil(n) {
  // start from 0, followed by a 1 add current number and previous number together, to form the next number.
  // this also means the 3rd(index 2) number will also be a 1
  //
  // lets start non recrusive and see where we get.
  //
  // declare an array with a starting point of [0
  //
  // let numList = [0];
  //
  // declare a counter for later use, starting at 1 becuase we have 1 index in the array
  // definitely more efficient to just add a 1 as a second item in the list, but, this was fun.
  // set to 1 here to avoid doing i < n + 1 in the lower loop to account for indexes starting at 0.
  //
  // counter = 1;
  //
  // yup, I definitely used a loop knowing it's only going to add a single item to the array. :)
  //
  // for (num in numList) {
  //
  //   if (num <= 1) {
  //     numList.push(1);
  //     counter++;
  //   }
  // }
  //
  // forloop where i = counter from above (2), i then increments by 1, starting from 2, each time the loop is executed (until i >= n (7))
  // when i is less than the value of n (7), push a new item equal to i - 2 + i - 1
  // first iteration is 1 (numList[2])
  //
  // for (let i = counter; i < n; i++) {
  //
  // i is 1 number higher than the previously pushed index value.
  // therefor i - 1 will equal the previously pushed index, and i - 2 will equal the index from 2 iterations ago add them together and push to the end of the Array.
  //
  //   numList.push(numList[i - 2] + numList[i - 1]);
  // }
  // return numList;
  // * the above was fun, but also horribly inefficient and not recursive, and maybe slightly over commented :)

  // if passed n is less than or equal to 2, return a list of with elements of 0 and 1, use the slice built in to
  // slice out index 0 up to, but not including index of n value. if n = 1 this will return [0], but 2 will return [0,1]
  if (n <= 2) {
    return [0, 1].slice(0, n);
  }
  // set variable result to n - 1, we will use this to build our final list below. This will cause n to be 1 less on each recursion than the previous
  const result = getFibonacciUntil(n - 1);
  // use length to get the value of what would be the current index, since length starts at 1 and index starts at 0,
  // and -1 to get the previous index, then add the index from 2 recurions ago to it using the same logic push the result to the end of the Array
  // .... and return the result list... errr Array :).
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
  // * and WE DID IT! This honestly took a little bit of research, and was wildly frustrating at times, but overall a fun learning experience!
}
