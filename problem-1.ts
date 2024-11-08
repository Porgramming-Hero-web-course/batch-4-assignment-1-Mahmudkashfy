{
  //
  function sumArray(numsArray: number[]): number {
    return numsArray.reduce((acc, currval) => acc + currval, 0);
  }

  console.log(sumArray([1, 2, 3, 4, 5, 10]));

  //
}
