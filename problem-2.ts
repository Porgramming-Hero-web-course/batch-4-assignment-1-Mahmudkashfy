{
  function removeDuplicates(numsArray: number[]): number[] {
    
    const setOfNumber = new Set(numsArray)    
    const unicNumbers: number[] = [...setOfNumber];
    return unicNumbers;
  }

  console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5]));

  //
}
