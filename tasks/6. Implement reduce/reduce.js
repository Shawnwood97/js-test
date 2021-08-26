export function Reduce(array, reducer, initialValue) {
  //* I wasn't immediately familiar with the reduce() method, but a quick google search got me there, not super complicated given this implementation.

  //* Since the majority of the logic is included in the test file, all we need to do, is use the reduce() method on the passed array, and pass the
  //* supplied reducer and initalValue as arguments, which will add or concat depending on which test we are on (str or numbers)
  return array.reduce(reducer, initialValue);
}
